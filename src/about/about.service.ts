import { Injectable } from '@nestjs/common';

@Injectable()
export class AboutService {
  async fetchAll() {
    return new Promise((resolve, reject) => {
      resolve([...Array(12)].map((_, index) => ({
        src: `https://dummyimage.com/72${index}x40${index}`,
        alt: "content " + (index + 1),
        title: "Chichen Itza",
        subtitle: "SUBTITLE",
        content: "Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche."
      })));
    });
  }
}
