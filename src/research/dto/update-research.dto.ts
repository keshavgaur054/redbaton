import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateResearchDto } from './create-research.dto';

export class UpdateResearchDto extends PartialType(CreateResearchDto) {
    @IsString()
    updatedBy: string;
}
