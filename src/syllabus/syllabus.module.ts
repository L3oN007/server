import { Module } from '@nestjs/common';
import { SyllabusResolver } from './syllabus.resolver';
import { SyllabusService } from './syllabus.service';
import { SyllabusRepository } from './syllabus.repository';

@Module({
  providers: [SyllabusResolver, SyllabusService, SyllabusRepository],
})
export class SyllabusModule {}
