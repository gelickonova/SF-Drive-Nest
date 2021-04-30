import {Body, Controller, Post, Res, UploadedFile, UseInterceptors} from '@nestjs/common';
import {AppService} from './app.service';
import {Response} from 'express';
import { diskStorage } from 'multer';
import {FileInterceptor} from "@nestjs/platform-express";


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/sf-drive-users', function (err) {
    if (err) throw err;
    console.log('Successfully connected!!');

});

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    birthDate: Date,
    email: {
        type: String,
        required: true
    },
    phoneNumber: Number,
    passportID: Number,
    dateOfIssue: Date,
    issuingAuthority: String,
    departmentCode: Number,
    numberOfLicense: Number,
    dateOfLicense: Date,
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

type UserType = {
    fullName: string
    birthDate: string
    email: string
    phoneNumber: string
    passportID: string
    dateOfIssue: string
    issuingAuthority: string
    departmentCode: string
    numberOfLicense: string
    dateOfLicense: string
    password: string

    repeatPassword: string
}

type Errors = {
    email?: boolean
    password?: boolean
}

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Post("/registration/step1")
    getHello(@Body() user: UserType, @Res() res: Response): string {
        const errors: Errors = {};
        const emailRegex = /^\S+@\S+\.\S+$/;

        if (user.password !== user.repeatPassword) errors.password = true;
        if (!user.email.match(emailRegex)) errors.email = true;
        if (errors.password || errors.email) {
            res.status(500).send(errors)
        } else {

            let someUser = new User(
                {
                    fullName: user.fullName,
                    birthDate: user.birthDate,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    passportID: user.passportID,
                    dateOfIssue: user.dateOfIssue,
                    issuingAuthority: user.issuingAuthority,
                    departmentCode: user.departmentCode,
                    numberOfLicense: user.numberOfLicense,
                    dateOfLicense: user.dateOfLicense,
                    password: user.password
                })
            someUser.save(err => {
                if (err) throw err;
                console.log('user successfully saved!')
            })
            res.sendStatus(200)
            return '';
        }
    }

    @Post('registration/step2')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination:'/files',
                filename: (req, file, callback) =>{
                    callback(null, file.originalname)
                }
            })
        })
    )
    uploadFile(@UploadedFile()file) {
        console.log(file)
        return
    }

}
