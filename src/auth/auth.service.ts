import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';

import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

import * as bcrypt from 'bcrypt';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(dto: RegisterDto) {

    const userExists =
      await this.usersService.findByEmail(dto.email);

    if (userExists) {
      throw new BadRequestException(
        'Email already exists',
      );
    }

    const hashedPassword =
      await bcrypt.hash(dto.password, 10);

    const user =
      await this.usersService.create({
        name: dto.name,
        email: dto.email,
        password: hashedPassword,
      });

    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      access_token:
        this.jwtService.sign(payload),
    };
  }

  async login(dto: LoginDto) {

    const user =
      await this.usersService.findByEmail(
        dto.email,
      );

    if (!user) {
      throw new UnauthorizedException();
    }

    const validPassword =
      await bcrypt.compare(
        dto.password,
        user.password,
      );

    if (!validPassword) {
      throw new UnauthorizedException();
    }

    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      access_token:
        this.jwtService.sign(payload),
    };
  }
}