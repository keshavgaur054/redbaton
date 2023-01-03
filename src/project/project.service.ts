import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilterProjectDto } from './dto/filter-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './project.model';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project) private project: typeof Project,
  ) { }

  create(data) {
    return this.project.create(data);
  }

  async findAll(query: FilterProjectDto) {
    return this.project.findAll();
  }

  findOne(id: string) {
    return this.project.findByPk(id);
  }

  update(id: string, data: UpdateProjectDto) {
    return this.project.update(data,
      {
        where: { id }
      }
    );
  }

  remove(id: string) {
    return this.project.destroy(
      {
        where: { id }

      }
    );
  }
}
