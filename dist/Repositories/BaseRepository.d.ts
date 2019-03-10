import { Repository, ObjectLiteral } from 'typeorm';
export declare class BaseRepository<Entity extends ObjectLiteral> extends Repository<Entity> {
    createOrUpdate(): Promise<Entity>;
}
