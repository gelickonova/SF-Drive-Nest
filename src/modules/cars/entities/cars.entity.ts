import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";
import {UserEntity} from "../../users/entities/user.entity";

@Entity()
export class CarsEntity {
    constructor(car) {

    }
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    model: string;

    @Column()
    year: string;

    @Column()
    owner: UserEntity;

    @Column()
    engine: string;

    @Column()
    carBody: string;

    @Column()
    transmission: string;

    @Column()
    driveUnit: string;

    @Column()
    mileage: string;
}