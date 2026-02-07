import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './domain/entities/user/user';
import { UserHttpModule } from './application/modules/user/user-http.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthHttpModule } from './application/modules/auth/auth-http.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'reloflow-nestjs-db',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000,
          limit: 10,
        },
      ],
    }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || 'ASFDLAJSÇDLFJSÇLDFJLÇASDFÇLSAJFLÇSA',
      signOptions: { expiresIn: '1day' },
    }),
    UserHttpModule,
    AuthHttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
