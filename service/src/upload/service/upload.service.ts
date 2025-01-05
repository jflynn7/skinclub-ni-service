import { Injectable } from '@nestjs/common';
import { Upload } from '../entity/upload';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { S3 } from 'aws-sdk';
import { getConfig } from '../../config/config.service';
import * as process from 'node:process';
import { v4 as uuid } from 'uuid';
import { SuccessResponse } from '../../database/success-response';
import { ErrorResponse } from '../../database/error-response';

@Injectable()
export class UploadService {
  constructor(
    @InjectRepository(Upload)
    private uploadRepository: Repository<Upload>,
  ) {}

  async uploadPublicFile(dataBuffer: Buffer, filename: string) {
    const s3: S3 = new S3();
    const uploadResult = await s3
      .upload({
        Bucket: getConfig(process.env.APP_ENV).AWS_UPLOAD_BUCKET_NAME,
        Body: dataBuffer,
        Key: `${uuid()}-${filename}`,
      })
      .promise();

    const newFile = this.uploadRepository.create({
      key: uploadResult.Key,
      url: uploadResult.Location,
    });
    await this.uploadRepository.save(newFile);
    return newFile;
  }

  async deletePublicFile(filename: string) {
    const s3: S3 = new S3();
    const deleteResult = await s3
      .deleteObject({
        Bucket: getConfig(process.env.APP_ENV).AWS_UPLOAD_BUCKET_NAME,
        Key: filename,
      })
      .promise();

    if (!deleteResult.$response.error) {
      await this.uploadRepository.delete({ key: filename });
      return new SuccessResponse(200, deleteResult);
    } else {
      return new ErrorResponse(400, 'Error deleting file', deleteResult);
    }
  }
}
