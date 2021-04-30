import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {CarsService} from "./cars.service";
import {CarsInterface} from "./cars.interface";

@Controller()
export class CarsController {
    constructor(private UsersService: CarsService) {
    }

    @Get()
    getUsers() {
        return this.UsersService.getUsers()
    }

    @Get(':id')
    getUser(@Param() params) {
        return this.UsersService.getUsers()
    }

    @Post()
    createUser(@Body() car: CarsInterface) {
        return this.UsersService.createUser(car)
    }

    @Put()
    updateUser(@Body() car: CarsInterface) {
        return this.UsersService.updateUser(car)

    }

    @Delete(":id")
    deleteUser(@Param() params) {
        return this.UsersService.deleteUser(params.id)

    }

}