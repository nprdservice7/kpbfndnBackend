import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateContactDto {
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
        example : 9847839108,
        description : "Enter Phone Number Here",
        type : Number,
        required : false
    })
    @IsNumber()
    @IsOptional()
    phone : number;

    @ApiProperty({
        example : 'This is the Test Message',
        description : 'Enter Message here',
        type : String,
        required : false
    })
    @IsString()
    @IsOptional()
    message : string;

}
