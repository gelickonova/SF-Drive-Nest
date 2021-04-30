import {Injectable} from "@nestjs/common";
import {getMongoRepository} from "typeorm";
import {UserEntity} from "../entities/user.entity";

@Injectable()
export class UsersRepository{
    async createUser(user: UserEntity){
        const repository = getMongoRepository(UserEntity)
        return await repository.save(user)
    }
}