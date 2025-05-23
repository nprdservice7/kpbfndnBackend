import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class CreateDonateDto {

    @ApiProperty({ 
        example : 1550,
        description : "Enter Donate Amout Here",
        type : Number,
        required : false
    })
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    amount : number;

     @ApiProperty({
            example : "John",
            description : "First Name is Required",
            type : String,
            required : true
        })
        @IsString()
        @IsNotEmpty()
    first_name : string;

     @ApiProperty({
        example : 'Doe',
        description : "Last Name is Required",
        type : String,
        required : true
    })
    @IsString()
    @IsNotEmpty()
    last_name : string;

        @ApiProperty({
            example : 'test@example.com',
            description : "Enter Email Here",
            type : String,
            required : true
        })
        @IsString()
        @IsEmail()
    email : string;

    @ApiProperty({
        example : 'This is a test Comment',
        description : "Comment Goes Here",
        type : String,
        required : false
    })
    comment : string;

    @ApiProperty({
        example : 'http://cloudinary.com/test.png',
        description : "Enter the proof of payment here",
        type : String,
        required : true,
    })
    image : string;
}
