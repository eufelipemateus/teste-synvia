import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Result, ReturnAauthJwt } from './entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  validateUser(username: string, pass: string): Result {
    const user = this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  login(user: any): ReturnAauthJwt {
    const payload = { username: user.username, sub: user.userId };
    try {
      return {
        access_token: this.jwtService.sign(payload),
      } as ReturnAauthJwt;
    } catch (e) {
      throw new HttpException(
        'Erro ao gerar token jwt',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
