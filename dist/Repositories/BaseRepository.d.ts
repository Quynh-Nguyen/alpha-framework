import { ObjectLiteral, Repository } from 'typeorm';
declare class BaseRepository<Entity extends ObjectLiteral> extends Repository<Entity> {
}
export default BaseRepository;
