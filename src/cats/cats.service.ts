import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {

  private cats = [
    {
      id: 1,
      nombre: 'Michi',
      raza: 'Persa',
      edad: 2
    },
    {
      id: 2,
      nombre: 'Luna',
      raza: 'Siames',
      edad: 3
    }
  ];

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.find(cat => cat.id === id);
  }

  create(createCatDto: CreateCatDto) {

    const newCat = {
      id: this.cats.length + 1,
      ...createCatDto
    };

    this.cats.push(newCat);

    return newCat;
  }

  update(id: number, updateCatDto: UpdateCatDto) {

    const cat = this.findOne(id);

    if (cat) {
      Object.assign(cat, updateCatDto);
      return cat;
    }

    return 'Cat no encontrado';
  }

  remove(id: number) {

    this.cats = this.cats.filter(
      cat => cat.id !== id
    );

    return 'Cat eliminado';
  }
}