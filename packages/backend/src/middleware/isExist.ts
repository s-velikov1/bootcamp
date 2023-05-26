import { Request, Response, NextFunction } from 'express';
import { ObjectType } from 'typeorm';
import { getAppDataSource } from '../config/database';

export function isExist<T>(type: ObjectType<T>, field: string) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const value: string = field === 'id' ? req.params.id : req.body[field];
      const dataSource = getAppDataSource();
      const item = await dataSource.manager.findOneBy(type, { [field]: value });

      if (!item) {
        return res.status(400).json({
          error: true,
          message: `There is no item with such ${field}.`
        });
      }

      return next();
    } catch (error) {
      return res.status(500).json({
        error: true,
        message: error
      });
    }
  };
}
