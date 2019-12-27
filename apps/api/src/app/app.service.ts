import { Injectable } from '@nestjs/common';
import { Message } from '@nx-demo/shared/models';

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
