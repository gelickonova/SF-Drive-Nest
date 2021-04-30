import {Injectable} from "@nestjs/common";
import {getMongoRepository} from "typeorm";
import {CarsEntity} from "../entities/cars.entity";

@Injectable()
export class CarsRepository {
    async createUser(user: CarsEntity){
        const repository = getMongoRepository(CarsEntity)
        return await repository.save(user)
    }
}