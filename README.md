## Article on how to build a restful service with nestjs, knexjs and objectionjs

<br>


##### Create Post
POST ⇒ {{URL}}/posts/new
**Example requestbody:**
```ts
{
  "title": "Delete Post",
  "contents": "Regions are geographic locations worldwide where AWS hosts",
  "image": "https://res.cloudinary.com/techa3rfde/image/upload/v5634t/dfnrhy4tgk.jpg",
  "categoryId": 1,
  "userId": 1
}

```

**Example response body**
```ts
{
  "message": "New Post Created",
  "data": {
    "title": "Delete Post",
    "contents": "Regions are geographic locations worldwide where AWS hosts",
    "image": "https://res.cloudinary.com/techarewa-com/image/upload/v1633352938/lfliv4hbmw7idobwhrrq.jpg",
    "categoryId": 1,
    "userId": 1,
    "id": 3
  }
}
```
<br>

##### DELETE a Post
DELETE ⇒ {{URL}}/posts/3


**Example response body**
```ts
{
  "message": "Post Deleted Successfully",
  "data": {}
}
```
<br>


##### Fetch all Posts
DELETE ⇒ {{URL}}/posts/


**Example response body**
```ts
{
  "message": "All Posts Available",
  "data": [
    {
      "id": 1,
      "title": "demo day at gain",
      "contents": "Regions are geographic locations worldwide where AWS hosts its data centers. AWS Regions are named after the location where they reside. For example, in the United States",
      "image": "https://res.cloudinary.com/tyvcer5/image/upload/4fv6333563/lfli7idobwhrrq.jpg",
      "categoryId": 4,
      "userId": 2,
      "createdAt": "2023-01-19T12:28:56.981Z",
      "updatedAt": "2023-01-19T12:28:56.981Z"
    }
  ]
}
```
<br>

##### Fetch Posts by Id
GET ⇒ {{URL}}/posts/{postId}


**Example response body**
```ts
{
  "message": "Single Post Details",
  "data": {
    "id": 2,
    "title": "Edit post via Patch",
    "contents": "Regions are geographic locations worldwide where AWS hosts",
    "image": "https://res.cloudinary.com/tyvcer5/image/upload/4fv6333563/lfli7idobwhrrq.jpg",
    "categoryId": 1,
    "userId": 1,
    "createdAt": "2023-01-19T12:44:49.172Z",
    "updatedAt": "2023-01-19T12:44:49.172Z"
  }
}
```
<br>

##### Update a Post
POST ⇒ {{URL}}/posts/{postId}
**Example requestbody:**
```ts
{
  "title": "Update a Post",
}

```

**Example response body**
```ts
{
  "message": "Post Updated Successfully",
  "data": {
    "id": 2,
    "title": "Update a Post",
    "contents": "Regions are geographic locations worldwide where AWS hosts",
    "image": "https://res.cloudinary.com/tyvcer5/image/upload/4fv6333563/lfli7idobwhrrq.jpg",
    "categoryId": 1,
    "userId": 1,
    "createdAt": "2023-01-19T12:44:49.172Z",
    "updatedAt": "2023-01-19T12:44:49.172Z"
  }
}
```
<br>


## Stay in touch

- Author - [Mubarak Aminu](https://www.linkedin.com/in/mubarak-aminu/)
- Blog - [My HashNode bLOG](https://mubaraktech.hashnode.dev/)
- Twitter - [@200OKDeveloper](https://twitter.com/200OKDeveloper)

## License

Nest is [MIT licensed](LICENSE).
