import { BaseEntity } from 'typeorm';
export declare class Todo extends BaseEntity {
    id: string;
    title: string;
    description: string;
    isPrivate: boolean;
    isCompleted: boolean;
    userId: string;
}
