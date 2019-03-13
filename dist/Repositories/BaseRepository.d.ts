import { Repository, ObjectType } from 'typeorm';
export declare class BaseRepository<Entity> {
    entityTableName: string;
    roleName: string;
    entityClass: ObjectType<Entity>;
    repository: Repository<Entity>;
    constructor(entityTableName: string, roleName: string, entityClass: ObjectType<Entity>, connectionName?: string);
}
