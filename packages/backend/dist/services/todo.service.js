"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToDo_entity_1 = require("../entities/ToDo.entity");
const database_1 = require("../config/database");
class TodoService {
    async findAll() {
        const dataSource = (0, database_1.getAppDataSource)();
        const data = await dataSource.manager.find(ToDo_entity_1.Todo);
        return data;
    }
    async findById(id) {
        try {
            const dataSource = (0, database_1.getAppDataSource)();
            const todo = await dataSource.manager.findOneBy(ToDo_entity_1.Todo, { id });
            return todo;
        }
        catch (error) {
            console.error(error);
        }
    }
    async create(body, userId) {
        try {
            const dataSource = (0, database_1.getAppDataSource)();
            const newTodo = dataSource.manager.create(ToDo_entity_1.Todo, Object.assign(Object.assign({}, body), { userId }));
            await dataSource.manager.save(newTodo);
            return newTodo;
        }
        catch (error) {
            console.error(error);
        }
    }
    async findPrivate(body, userId) {
        try {
            const dataSource = (0, database_1.getAppDataSource)();
            const todos = await dataSource.manager.findBy(ToDo_entity_1.Todo, { isPrivate: true, userId });
            return todos;
        }
        catch (error) {
            console.error(error);
        }
    }
    async updateById(id, body) {
        try {
            const dataSource = (0, database_1.getAppDataSource)();
            const updatedEntity = await dataSource.manager.update(ToDo_entity_1.Todo, { id }, Object.assign({}, body));
            return updatedEntity;
        }
        catch (error) {
            console.error(error);
        }
    }
    async deleteTodoById(id) {
        try {
            const dataSource = (0, database_1.getAppDataSource)();
            await dataSource.manager.delete(ToDo_entity_1.Todo, { id });
        }
        catch (error) {
            console.error(error);
        }
    }
}
exports.default = TodoService;
//# sourceMappingURL=todo.service.js.map