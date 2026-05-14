import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  const post: Omit<Post, 'id' | 'date'> = {
    text: 'Mocked post',
  };

  beforeEach(() => {
    postsService = new PostsService();
  });

  it('should add a new post', () => {
    const createdPost = postsService.create(post);

    expect(createdPost).toEqual({
      text: 'Mocked post',
      id: '1',
      date: expect.any(String),
    });
  });

  it('should find a post', () => {
    const createdPost = postsService.create(post);

    const foundPost = postsService.find(createdPost.id);

    expect(foundPost).toEqual({
      text: createdPost.text,
      id: createdPost.id,
      date: createdPost.date,
    });
  });
});
