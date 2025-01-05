import {
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from '../service/upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: { buffer: any; originalname: string }) {
    return this.uploadService.uploadPublicFile(file.buffer, file.originalname);
  }

  @Delete('image/:filename')
  deleteFile(@Param('filename') filename: string) {
    return this.uploadService.deletePublicFile(filename);
  }
}
