import {
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table,
} from "sequelize-typescript";


@Table
export class Showcase extends Model {
    @PrimaryKey
    @Column(DataType.STRING)
    id: string;
}