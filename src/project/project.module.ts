import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { Project } from './project.model';

import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([Project])],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
