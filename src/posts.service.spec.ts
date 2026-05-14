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
    const firstPost = postsService.create({ text: 'First post' });
    const secondPost = postsService.create({ text: 'Second post' });

    const foundPost = postsService.find(secondPost.id);

    expect(foundPost).toEqual(secondPost);
    expect(foundPost).not.toEqual(firstPost);
  });
});
