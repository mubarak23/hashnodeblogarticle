import { Injectable, Inject } from '@nestjs/common';
import { ModelClass } from 'objection';
import { PostModel } from 'src/db/Models/Post.model';
import { newPost } from './dto/newPost.dto';
import { updatedPost } from './dto/updatedPost.dto';
import { PostInterface } from './interface/post.interface';

@Injectable()
export class PostService {
  constructor(@Inject('PostModel') private PostClass: ModelClass<PostModel>) {}

  // fetch single post by id
  async findPostById(postId: number): Promise<PostInterface> {
    return await this.PostClass.query().findOne({ id: postId });
  }
  // fetch all post
  async fetchAllPosts(): Promise<PostInterface[]> {
    const posts = await this.PostClass.query();
    return posts;
  }

  // // create a post
  async createPost(newPost: newPost): Promise<PostInterface> {
    const savepost: PostInterface = await this.PostClass.query().insert(
      newPost,
    );
    return savepost;
  }

  // update post
  async updatePost(postId: number, updatedPost: updatedPost): Promise<boolean> {
    await this.PostClass.query().update(updatedPost).where('id', postId);
    return true;
  }

  // delete post
  async deletePost(postId: number): Promise<boolean> {
    await this.PostClass.query().deleteById(postId);
    return true;
  }
}
