import {
    Column,
    Table,
    Model,
    DataType,
    PrimaryKey,
    ForeignKey,
    Default,
} from 'sequelize-typescript';
import { PROJECT_STATUS, PROJECT_STATUS_LISTS, TYPES, TYPES_LISTS } from 'src/constants/app.constant';
import { Research } from 'src/research/research.model';

@Table
export class Project extends Model {
    @PrimaryKey
    @Column(DataType.STRING)
    id: string;

    @Column(DataType.STRING)
    name: string;

    @Column(DataType.STRING)
    header: string;

    @Column(DataType.STRING)
    description: string

    @Column(DataType.STRING)
    image_url: string

    @Column(DataType.STRING)
    category: string

    @Column(DataType.JSON)
    contents: [string]

    // @Column(DataType.INTEGER)
    // sequence_number: number

    // @Default(CATEGORIES['WORK'])
    // @Column({
    //     type: DataType.ENUM({
    //         values: CATEGORIES_LISTS,
    //     }),
    // })
    // category: string

    //this status will be used to difine the type either of :-
    //-->FULL_WIDTH -->ONE_COLUMN -->TWO_COLUMN -->THREE_COLUMN
    @Default(TYPES['FULL_WIDTH'])
    @Column({
        type: DataType.ENUM({
            values: TYPES_LISTS,
        }),
    })
    type: string  //----->contents

    //this status will be used to hide any project from UI or will be used to unhide
    // @Default(PROJECT_STATUS['SHOW'])
    // @Column({
    //     type: DataType.ENUM({
    //         values: PROJECT_STATUS_LISTS,
    //     }),
    // })
    // status: string

    // @Column(DataType.STRING)
    // @HasMany(() => Research)
    // contents: string

    // @ForeignKey(() => Research)
    // @Column(DataType.INTEGER)
    // sequence_number: number

    // @Column(DataType.STRING)
    // content_type: string

    // @Column(DataType.INTEGER)
    // createdBy: number;

    // @Default(DataType.NOW)
    // @Column(DataType.DATE)
    // deleted_at: Date;

    // @AllowNull
    // @Column(DataType.INTEGER)
    // deleted_by: number;
}
