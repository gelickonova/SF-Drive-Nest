import {Injectable} from "@nestjs/common";
import {User} from "./users.interface";
import {ObjectID} from 'mongodb'
import {getMongoManager} from "typeorm";
import {UserEntity} from "./entities/user.entity";
import {UsersRepository} from "./repositories/users.repository";

@Injectable()
export class UsersService {
    constructor(private usersRepository: UsersRepository) {
    }

    async getUsers() {
        const manager = getMongoManager();
        return await manager.find(UserEntity)
    }

    async getUser(id: string) {
        const manager = getMongoManager();
        return await manager.findOne(UserEntity, {_id: new ObjectID(id)})
    }

    async createUser(user: User) {
        const newUser = new UserEntity(user) //TODO

        return await this.usersRepository.createUser(newUser)
    }

    async updateUser(user: User) {
        const manager = getMongoManager();
        const existingUser = await manager.findOne(UserEntity, {_id: new ObjectID(user.id)})
        existingUser.fullName = user.fullName; //TODO
        return await manager.save(existingUser)
    }

    async deleteUser(id: string) {
        const manager = getMongoManager()
        return await manager.deleteOne(UserEntity, {_id: new ObjectID(id)})

    }
}