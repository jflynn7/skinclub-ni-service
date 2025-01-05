import { Module } from '@nestjs/common';
import { UploadService } from './service/upload.service';
import { UploadController } from './controller/upload.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Upload } from './entity/upload';

@Module({
  imports: [TypeOrmModule.forFeature([Upload])],
  exports: [TypeOrmModule],
  providers: [UploadService],
  controllers: [UploadController],
})
export class UploadModule {}
