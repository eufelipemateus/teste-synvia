import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: '.env',
          isGlobal: true,
        }),
        UsersModule,
        PassportModule,
        JwtModule.registerAsync({
          inject: [ConfigService],
          useFactory: async (configService: ConfigService) => ({
            secret: configService.get('JWT_SECRET'),
            signOptions: {
              expiresIn: configService.get<number>('JWT_EXP', 60),
            },
          }),
        }),
      ],
      providers: [AuthService, LocalStrategy, JwtStrategy],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Authenticação', () => {
    test('Teste login errado', () => {
      const username = 'testerrado';
      const password = 'passwordErrado';
      expect(service.validateUser(username, password)).toBeNull();
    });

    test('Teste login correto', () => {
      const username = 'admin';
      const password = 'admin';

      const result = {
        userId: 1,
        username: 'admin',
      };

      expect(service.validateUser(username, password)).toStrictEqual(result);
    });

    test('Teste gerar token jwt', async () => {
      const username = 'admin';
      const password = 'admin';

      const user = service.validateUser(username, password);
      expect(service.login(user)).toEqual(
        expect.objectContaining({
          access_token: expect.any(String),
        }),
      );
    });
  });
});
