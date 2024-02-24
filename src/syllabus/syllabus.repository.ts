import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { syllabusRoute } from 'src/APIRoute';
import { Syllabus } from './syllabus.entity';

@Injectable()
export class SyllabusRepository {
  public async findAll(): Promise<Syllabus[]> {
    try {
      const response = await axios.get<Syllabus[]>(syllabusRoute);
      return response.data;
    } catch (error) {
      console.error('Error fetching syllabus:', error);
      throw new Error('Failed to fetch syllabus');
    }
  }

  public async findById(id: string): Promise<Syllabus | null> {
    try {
      const response = await axios.get<Syllabus>(`${syllabusRoute}/${id}`);
      return response.data;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Syllabus with the given ID not found
        return null;
      }
      console.error('Error fetching syllabus by ID:', error);
      throw new Error('Failed to fetch syllabus by ID');
    }
  }
}
