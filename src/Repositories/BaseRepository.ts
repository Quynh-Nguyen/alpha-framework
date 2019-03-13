import { AbstractRepository, ObjectLiteral } from 'typeorm';


export class BaseRepository<Entity extends ObjectLiteral> extends AbstractRepository<Entity> {

}
