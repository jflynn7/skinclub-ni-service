import { Module } from '@nestjs/common';
import { ContentService } from './service/content.service';
import { ContentController } from './controller/content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content } from './entity/content';
import { ContentItem } from './entity/content-item';

@Module({
  imports: [TypeOrmModule.forFeature([Content, ContentItem])],
  exports: [TypeOrmModule],
  providers: [ContentService],
  controllers: [ContentController],
})
export class ContentModule {}
