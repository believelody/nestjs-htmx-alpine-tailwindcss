import { PartialType } from '@nestjs/mapped-types';
import { CreatePosts2Dto } from './create-posts-2.dto';

export class UpdatePosts2Dto extends PartialType(CreatePosts2Dto) {}
