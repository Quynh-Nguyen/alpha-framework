import { Repository, ObjectLiteral, DeepPartial } from 'typeorm';
export declare class BaseRepository<Entity extends ObjectLiteral> extends Repository<Entity> {
    createOrUpdate(plainEntityLikeOrPlainEntityLikes?: DeepPartial<Entity> | DeepPartial<Entity>[]): Entity | Entity[];
}
