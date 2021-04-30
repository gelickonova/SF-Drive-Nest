import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {UsersService} from "./users.service";
import {User} from "./users.interface";

@Controller()
export class UsersController {
    constructor(private UsersService: UsersService) {
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
    createUser(@Body() user: User) {
        return this.UsersService.createUser(user)
    }

    @Put()
    updateUser(@Body() user: User) {
        return this.UsersService.updateUser(user)

    }

    @Delete(":id")
    deleteUser(@Param() params) {
        return this.UsersService.deleteUser(params.id)

    }

}