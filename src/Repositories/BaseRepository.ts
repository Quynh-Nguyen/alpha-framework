import { Repository, ObjectLiteral, DeepPartial } from 'typeorm';


export class BaseRepository<Entity extends ObjectLiteral> extends Repository<Entity> {
  createOrUpdate(plainEntityLikeOrPlainEntityLikes?: DeepPartial<Entity>|DeepPartial<Entity>[]): Entity|Entity[] {
    return this.manager.create<any>(this.metadata.target as any, plainEntityLikeOrPlainEntityLikes as any);
  }
}
