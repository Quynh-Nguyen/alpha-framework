import { AbstractRepository, ObjectLiteral } from 'typeorm';
declare class BaseRepository<Entity extends ObjectLiteral> extends AbstractRepository<Entity> {
}
export default BaseRepository;
