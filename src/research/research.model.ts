import {
    Column,
    Model,
    Table,
    DataType,
    PrimaryKey,
    ForeignKey,
} from 'sequelize-typescript';
import { Project } from 'src/project/project.model';

@Table
export class Research extends Model {

    @PrimaryKey
    @Column(DataType.STRING)
    id: string;

    @ForeignKey(()=>Project)
    sequence_number: string

    @Column(DataType.INTEGER)
    createdBy: number;

    @Column(DataType.INTEGER)
    updatedBy: number;

    @Column(DataType.INTEGER)
    createdAt: number;

    @Column(DataType.INTEGER)
    updatedAt: number;
}
