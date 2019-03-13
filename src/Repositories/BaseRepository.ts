import { AbstractRepository, ObjectLiteral } from 'typeorm';


class BaseRepository<Entity extends ObjectLiteral> extends AbstractRepository<Entity> {

}

export default BaseRepository;
