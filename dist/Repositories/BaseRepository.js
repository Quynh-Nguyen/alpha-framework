"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class BaseRepository {
    constructor(entityTableName, roleName, entityClass, connectionName = 'default') {
        this.entityTableName = entityTableName;
        this.roleName = roleName;
        this.entityClass = entityClass;
        this.repository = typeorm_1.getConnectionManager()
            .get(connectionName)
            .getRepository(this.entityClass);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map