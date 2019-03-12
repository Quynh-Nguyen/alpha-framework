"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class BaseRepository extends typeorm_1.Repository {
    createOrUpdate(plainEntityLikeOrPlainEntityLikes) {
        return this.manager.create(this.metadata.target, plainEntityLikeOrPlainEntityLikes);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map