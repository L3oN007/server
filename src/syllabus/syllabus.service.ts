import { Injectable, NotFoundException } from '@nestjs/common';
import { SyllabusRepository } from './syllabus.repository';
import { Syllabus } from './syllabus.entity';

@Injectable()
export class SyllabusService {
  constructor(private syllabusRepository: SyllabusRepository) {}

  async getSyllabuses(): Promise<Syllabus[]> {
    try {
      const users = await this.syllabusRepository.findAll();
      if (users?.length === 0) {
        throw new Error('No record found.');
      }
      return users;
    } catch (error) {
      return error;
    }
  }

  async getSyllabusById(id: string): Promise<Syllabus | null> {
    try {
      const syllabus = await this.syllabusRepository.findById(id);

      if (!syllabus) {
        throw new NotFoundException(`Syllabus with ID "${id}" not found`);
      }

      return syllabus;
    } catch (error) {
      throw error;
    }
  }
}
