import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './teams.interface';

@Injectable()
export class TeamsService {
  create(createTeamDto: CreateTeamDto) {
    return 'This action adds a new team';
  }

  async findAll(): Promise<Team[]> {
    return new Promise((resolve) => {
      resolve([
        {
          name: 'Holden Caulfield',
          job: 'UI Designer',
          image: { src: 'https://dummyimage.com/80x80', alt: 'team' },
        },
        {
          name: 'Henry Letham',
          job: 'CTO',
          image: { src: 'https://dummyimage.com/84x84', alt: 'team' },
        },
        {
          name: 'Oskar Blinde',
          job: 'Blinde',
          image: { src: 'https://dummyimage.com/88x88', alt: 'team' },
        },
        {
          name: 'John Doe',
          job: 'DevOps',
          image: { src: 'https://dummyimage.com/94x94', alt: 'team' },
        },
        {
          name: 'Martin Eden',
          job: 'Software Engineer',
          image: { src: 'https://dummyimage.com/98x98', alt: 'team' },
        },
        {
          name: 'Boris Kitua',
          job: 'UX Researcher',
          image: { src: 'https://dummyimage.com/100x90', alt: 'team' },
        },
        {
          name: 'Atticus Finch',
          job: 'QA Engineer',
          image: { src: 'https://dummyimage.com/80x80', alt: 'team' },
        },
        {
          name: 'Alper Kamu',
          job: 'System',
          image: { src: 'https://dummyimage.com/104x94', alt: 'team' },
        },
        {
          name: 'Rodrigo Monchi',
          job: 'Product Manager',
          image: { src: 'https://dummyimage.com/108x98', alt: 'team' },
        },
      ]);
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} team`;
  }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return `This action updates a #${id} team`;
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
