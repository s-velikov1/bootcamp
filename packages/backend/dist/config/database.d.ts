import { DataSource } from 'typeorm';
declare const connectDB: () => Promise<void>;
declare const getAppDataSource: () => DataSource;
export { getAppDataSource };
export default connectDB;
