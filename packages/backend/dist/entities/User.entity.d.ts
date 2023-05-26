import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}
