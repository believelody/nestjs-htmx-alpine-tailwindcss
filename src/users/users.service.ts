import { Injectable } from '@nestjs/common';
import { FetchService } from 'src/common/fetch/fetch.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Author, UserResponse } from './users.interface';

@Injectable()
export class UsersService {
  constructor(private fetchService: FetchService) {}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number, fields = []): Promise<UserResponse> {
    const path = `/users/${id}`;
    if (fields.length) {
      path.concat(`?select=${fields.join(',')}`);
    }
    return await this.fetchService.get(path);
  }

  async findAuthor(id: number) {
    return (await this.findOne(id, ['username', 'id'])) as Author;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
