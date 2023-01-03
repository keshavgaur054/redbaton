import { Module } from '@nestjs/common';
import { ResearchService } from './research.service';
import { ResearchController } from './research.controller';
import { Research } from './research.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  // imports: [SequelizeModule.forFeature([Research])],
  controllers: [ResearchController],
  providers: [ResearchService],
  // exports:[SequelizeModule]
})
export class ResearchModule { }
