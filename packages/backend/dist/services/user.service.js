"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_entity_1 = require("../entities/User.entity");
const database_1 = require("../config/database");
class UserService {
    async findAll() {
        const dataSource = (0, database_1.getAppDataSource)();
        const data = await dataSource.manager.find(User_entity_1.User);
        return data;
    }
    async findById(id) {
        try {
            const dataSource = (0, database_1.getAppDataSource)();
            const user = await dataSource.manager.findOneBy(User_entity_1.User, { id });
            return user;
        }
        catch (error) {
            console.error(error);
        }
    }
    async findByEmail(email) {
        try {
            const dataSource = (0, database_1.getAppDataSource)();
            const user = await dataSource.manager.findOneBy(User_entity_1.User, { email });
            return user;
        }
        catch (error) {
            console.error(error);
        }
    }
    async create(body) {
        try {
            const dataSource = (0, database_1.getAppDataSource)();
            const newTodo = dataSource.manager.create(User_entity_1.User, Object.assign({}, body));
            await dataSource.manager.save(newTodo);
            return newTodo;
        }
        catch (error) {
            console.error(error);
        }
    }
    async updateById(id, body) {
        try {
            const dataSource = (0, database_1.getAppDataSource)();
            const updatedEntity = await dataSource.manager.update(User_entity_1.User, { id }, Object.assign({}, body));
            return updatedEntity;
        }
        catch (error) {
            console.error(error);
        }
    }
    async updatePassword(id, password) {
        try {
            const dataSource = (0, database_1.getAppDataSource)();
            const updatedEntity = await dataSource.manager.update(User_entity_1.User, { id }, { password });
            return updatedEntity;
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.default = UserService;
//# sourceMappingURL=user.service.js.map