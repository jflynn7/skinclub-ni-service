import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ContentService } from '../service/content.service';
import { Content } from '../entity/content';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('all')
  getAllContent() {
    return this.contentService.getAllContent();
  }

  @Get(':contentKey')
  getContentByKey(@Param('contentKey') contentKey: string) {
    return this.contentService.getContentValue(contentKey);
  }

  @Post(':contentKey/set')
  setContentByKey(
    @Param('contentKey') contentItemKey: string,
    @Body() contentValue: Content,
  ) {
    return this.contentService.setContentValue(contentItemKey, contentValue);
  }
}
