import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { environment } from './../environments/environment.prod';
import { AppController } from './app.controller';
import { DemoOneController } from './demo-one/demo-one.controller';
import { DemoOneService } from './demo-one/demo-one.service';
import { LoggerController } from './logger/logger.controller';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        level: environment.production ? 'info' : 'debug',
        prettyPrint: !environment.production ? { colorize: true, levelFirst: true } : {},
        redact: ['cookie']
      }
    })
  ],
  controllers: [AppController, DemoOneController, LoggerController],
  providers: [DemoOneService]
})
export class AppModule {}
