import { Repository, ObjectType, getConnectionManager } from 'typeorm';


export class BaseRepository<Entity> {
  public entityTableName: string;
  public roleName: string;
  public entityClass : ObjectType<Entity>;
  public repository: Repository<Entity>;

  constructor(
    entityTableName: string,
    roleName: string,
    entityClass: ObjectType<Entity>,
    connectionName: string = 'default',
  ) {
    this.entityTableName = entityTableName;
    this.roleName = roleName;
    this.entityClass = entityClass;
    this.repository = getConnectionManager()
      .get(connectionName)
      .getRepository<Entity>(this.entityClass);
  }
}