import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudiantesService {
  private estudiantes: Estudiante[] = [];
  private idCounter = 1;

  create(dto: CreateEstudianteDto): Estudiante {
    const newEstudiante: Estudiante = {
      id: this.idCounter++,
      ...dto,
    };
    this.estudiantes.push(newEstudiante);
    return newEstudiante;
  }

  findAll(): Estudiante[] {
    return this.estudiantes;
  }

  findOne(id: number): Estudiante {
    const estudiante = this.estudiantes.find(e => e.id === id);
    if (!estudiante) throw new NotFoundException('Estudiante no encontrado');
    return estudiante;
  }

  update(id: number, dto: UpdateEstudianteDto): Estudiante {
    const index = this.estudiantes.findIndex(e => e.id === id);
    if (index === -1) throw new NotFoundException('Estudiante no encontrado');
    this.estudiantes[index] = { ...this.estudiantes[index], ...dto };
    return this.estudiantes[index];
  }

  remove(id: number): void {
    const index = this.estudiantes.findIndex(e => e.id === id);
    if (index === -1) throw new NotFoundException('Estudiante no encontrado');
    this.estudiantes.splice(index, 1);
  }
}
