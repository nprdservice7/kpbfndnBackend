import { plainToInstance } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
  validateSync,
} from 'class-validator';

export class EnvironmentVariables {
  @IsString()
  @IsNotEmpty()
  HOST: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(65535)
  PORT: number;

  @IsString()
  API_TITLE: string;

  @IsString()
  API_DESCRIPTION: string;

  @IsString()
  API_VERSION: string;

  @IsString()
  API_PREFIX: string;

  @IsString()
  @IsNotEmpty()
  CLOUDINARY_CLOUD_NAME: string;

  @IsString()
  @IsNotEmpty()
  CLOUDINARY_API_KEY: string;

  @IsString()
  @IsNotEmpty()
  CLOUDINARY_API_SECRET: string;

  @IsNumber()
  @IsNotEmpty()
  FILE_SIZE_LIMIT: number;

  @IsString()
  @IsNotEmpty()
  EMAIL_USER : string;

  @IsString()
  @IsNotEmpty()
  EMAIL_PASSWORD : string;

  @IsString()
  @IsNotEmpty()
  EMAIL_FROM : string;

  @IsString()
  @IsNotEmpty()
  EMAIL_SERVICE : string;

  @IsString()
  @IsNotEmpty()
  ADMIN_EMAIL : string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}