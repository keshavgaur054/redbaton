import { Module } from '@nestjs/common';
import { ProjectModule } from './project/project.module';
import { ShowcaseModule } from './showcase/showcase.module';
import { ResearchModule } from './research/research.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '.';


@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
     ProjectModule,
    // ResearchModule,
    // ShowcaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
