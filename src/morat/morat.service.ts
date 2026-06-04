import { Injectable } from '@nestjs/common';
import { CreateMoratDto } from './dto/create-morat.dto';
import { UpdateMoratDto } from './dto/update-morat.dto';

@Injectable()
export class MoratService {

  private morat = [
    {
      id: 1,
      integrante: 'Juan Pablo Isaza',
      instrumento: 'Guitarra',
      nacionalidad: 'Colombiano'
    },
    {
      id: 2,
      integrante: 'Juan Pablo Villamil',
      instrumento: 'Guitarra',
      nacionalidad: 'Colombiano'
    }
  ];

  findAll() {
    return this.morat;
  }

  findOne(id: number) {
    return this.morat.find(
      integrante => integrante.id === id
    );
  }

  create(createMoratDto: CreateMoratDto) {

    const newIntegrante = {
      id: this.morat.length + 1,
      ...createMoratDto
    };

    this.morat.push(newIntegrante);

    return newIntegrante;
  }

  update(
    id: number,
    updateMoratDto: UpdateMoratDto
  ) {

    const integrante = this.findOne(id);

    if (integrante) {
      Object.assign(
        integrante,
        updateMoratDto
      );

      return integrante;
    }

    return 'Integrante no encontrado';
  }

  remove(id: number) {

    this.morat = this.morat.filter(
      integrante => integrante.id !== id
    );

    return 'Integrante eliminado';
  }
}