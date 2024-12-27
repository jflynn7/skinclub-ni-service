import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Content } from '../entity/content';
import { Repository } from 'typeorm';
import { ApiResponse } from '../../database/api-response.type';
import { SuccessResponse } from '../../database/success-response';
import { ErrorResponse } from '../../database/error-response';
import { ContentItem } from '../entity/content-item';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Content)
    private contentRepository: Repository<Content>,
    @InjectRepository(ContentItem)
    private contentItemRepository: Repository<ContentItem>,
  ) {}

  async setContentValue(contentKey: string, contentValue: Content) {
    const value: Content = await this.findOneByContentKey(contentKey);
    if (value) {
      await this.deleteContentItems(value.contentItems);
    }
    const valueToSave = {
      id: value?.id,
      ...contentValue,
    };
    await this.contentRepository.save(valueToSave);
    return new SuccessResponse(200, valueToSave);
  }

  async getContentValue(
    contentKey: string,
  ): Promise<ApiResponse<Content | any>> {
    const value: Content = await this.findOneByContentKey(contentKey);
    if (value) {
      return new SuccessResponse<Content>(200, value);
    } else {
      return new ErrorResponse(404, 'No content found', { oops: 'Oopsy' });
    }
  }

  private async deleteContentItems(contentItems: ContentItem[] = []) {
    for (const contentItem of contentItems) {
      await this.contentItemRepository.delete({ id: contentItem.id });
    }
  }

  private async findOneByContentKey(contentKey: string) {
    return this.contentRepository.findOne({
      where: { contentKey },
      relations: ['contentItems'],
    });
  }
}
