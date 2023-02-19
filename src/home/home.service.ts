import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  getName() {
    return { name: 'Henry' };
  }
}
