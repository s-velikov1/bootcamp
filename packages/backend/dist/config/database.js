"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAppDataSource = void 0;
const typeorm_1 = require("typeorm");
function getSSLConfig(env) {
    const configs = {
        production: { rejectUnauthorized: true },
        local: false,
        deploy: { rejectUnauthorized: false }
    };
    if (!configs[env] === undefined) {
        throw new Error('Set network in your .env file');
    }
    return configs[env];
}
let AppDataSource;
const connectDB = async () => {
    try {
        const options = {
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            logging: ['query', 'error'],
            type: 'postgres',
            entities: ['dist/**/*.entity.{ts,js}'],
            migrations: ['dist/migrations/**/*.{ts,js}'],
            subscribers: ['src/subscriber/**/*.ts'],
            database: process.env.POSTGRES_DB,
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            ssl: getSSLConfig(process.env.SERVER_MODE),
            synchronize: true
        };
        AppDataSource = new typeorm_1.DataSource(options);
        await AppDataSource.initialize();
        console.log('MongoDB Connected...');
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(err.message);
        }
        process.exit(1);
    }
};
const getAppDataSource = () => AppDataSource;
exports.getAppDataSource = getAppDataSource;
exports.default = connectDB;
//# sourceMappingURL=database.js.map