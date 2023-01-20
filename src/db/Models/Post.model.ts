import { BaseModel } from './base.model';

export class PostModel extends BaseModel {
  static tableName = 'posts';
  title: string;
  contents: string;
  image: string;
  categoryId: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
}
