import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  UnprocessableEntityException,
  ParseIntPipe,
  Delete,
  Res,
  Patch,
} from '@nestjs/common';
import { PostService } from './post.service';
import { newPost } from './dto/newPost.dto';
import { PostInterface } from './interface/post.interface';
import { updatedPost } from './dto/updatedPost.dto';
import { Response } from 'express';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('')
  async getAllPosts(@Res() response: Response) {
    const allPost = await this.postService.fetchAllPosts();
    return response
      .status(200)
      .send({ message: 'All Posts Available', data: allPost });
  }
  @Get('/:postId')
  async getPostById(
    @Param('postId', ParseIntPipe) postId: number,
    @Res() response: Response,
  ) {
    const post = await this.postService.findPostById(postId);
    if (!post) {
      throw new UnprocessableEntityException(
        'Post with the provided Id Does Not Exist',
      );
    }
    return response
      .status(200)
      .send({ message: 'Single Post Details', data: post });
    // return post;
  }

  @Post('/new')
  async createNewPost(@Body() PostDto: newPost, @Res() response: Response) {
    try {
      const newPost = await this.postService.createPost(PostDto);
      return response
        .status(201)
        .send({ message: 'New Post Created', data: newPost });
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
  }

  @Patch('/:postId/update')
  async updatePost(
    @Param('postId', ParseIntPipe) postId: number,
    @Body() updatePostDto: updatedPost,
    @Res() response: Response,
  ) {
    try {
      const updatePost = await this.postService.updatePost(
        postId,
        updatePostDto,
      );
      if (!updatePost) {
        throw new UnprocessableEntityException(
          'update operation cannot be completed at this time, try again',
        );
      }
    } catch (error) {
      throw new UnprocessableEntityException(error.message);
    }
    const updatedPost = await this.postService.findPostById(postId);
    return response
      .status(201)
      .send({ message: 'Post Updated Successfully', data: updatedPost });
  }

  @Delete('/:postId')
  async deletePostById(
    @Param('postId', ParseIntPipe) postId: number,
    @Res() response: Response,
  ) {
    const post = await this.postService.findPostById(postId);
    if (!post) {
      throw new UnprocessableEntityException(
        'Post with the provided Id Does Not Exist',
      );
    }
    const deletePost = this.postService.deletePost(postId);
    return response
      .status(201)
      .send({ message: 'Post Deleted Successfully', data: deletePost });
  }
}
