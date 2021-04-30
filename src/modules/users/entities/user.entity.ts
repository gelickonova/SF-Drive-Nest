import {Column, Entity, ObjectID, ObjectIdColumn} from "typeorm";

@Entity()
export class UserEntity{
    constructor(user) {

    }
    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    fullName: string;

    @Column()
    birthDate: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    @Column()
    passportID: string;

    @Column()
    dateOfIssue: string;

    @Column()
    issuingAuthority: string;

    @Column()
    departmentCode: string;

    @Column()
    numberOfLicense: string;

    @Column()
    dateOfLicense: string;

    @Column()
    password: string;

    @Column()
    repeatPassword: string;
}