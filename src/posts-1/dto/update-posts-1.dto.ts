import { PartialType } from '@nestjs/mapped-types';
import { CreatePosts1Dto } from './create-posts-1.dto';

export class UpdatePosts1Dto extends PartialType(CreatePosts1Dto) {}
