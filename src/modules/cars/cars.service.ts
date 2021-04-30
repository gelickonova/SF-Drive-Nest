import {Injectable} from "@nestjs/common";
import {CarsInterface} from "./cars.interface";
import {ObjectID} from 'mongodb'
import {getMongoManager} from "typeorm";
import {CarsEntity} from "./entities/cars.entity";
import {CarsRepository} from "./repositories/cars.repository";

@Injectable()
export class CarsService {
    constructor(private usersRepository: CarsRepository) {
    }

    async getUsers() {
        const manager = getMongoManager();
        return await manager.find(CarsEntity)
    }

    async getUser(id: string) {
        const manager = getMongoManager();
        return await manager.findOne(CarsEntity, {_id: new ObjectID(id)})
    }

    async createUser(car: CarsInterface) {
        const newUser = new CarsEntity(car) //TODO

        return await this.usersRepository.createUser(newUser)
    }

    async updateUser(car: CarsInterface) {
        const manager = getMongoManager();
        const existingUser = await manager.findOne(CarsEntity, {_id: new ObjectID(car.id)})
        existingUser.model = car.model; //TODO
        return await manager.save(existingUser)
    }

    async deleteUser(id: string) {
        const manager = getMongoManager()
        return await manager.deleteOne(CarsEntity, {_id: new ObjectID(id)})

    }
}