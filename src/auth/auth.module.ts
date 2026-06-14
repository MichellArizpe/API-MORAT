import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { UsersModule } from '../users/users.module';

import { JwtStrategy } from './strategies/jwt.strategy';
import type { SignOptions } from 'jsonwebtoken';

@Module({
  imports: [
    UsersModule,

    JwtModule.register({
      secret: process.env.JWT_SECRET,

      signOptions: {
        expiresIn: process.env.JWT_EXPIRES as SignOptions['expiresIn'],
      },
    }),
  ],

  controllers: [AuthController],

  providers: [
    AuthService,
    JwtStrategy,
  ],
})
export class AuthModule {}