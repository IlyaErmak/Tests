import { Post, PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  it('should add a new post', () => {
    const post: Omit<Post, 'id' | 'date'> = {
      text: 'Mocked post',
    };

    const createdPost = postsService.create(post);

    expect(createdPost).toEqual({
      text: post.text,
      id: '1',
      date: expect.any(String),
    });
  });

  it('should find the correct post by id', () => {
    const firstPost = postsService.create({ text: 'First post' });
    const secondPost = postsService.create({ text: 'Second post' });
    const thirdPost = postsService.create({ text: 'Third post' });

    expect(postsService.find(firstPost.id)).toEqual(firstPost);
    expect(postsService.find(secondPost.id)).toEqual(secondPost);
    expect(postsService.find(thirdPost.id)).toEqual(thirdPost);

    expect(postsService.find(secondPost.id)?.id).toBe(secondPost.id);
    expect(postsService.find(secondPost.id)?.text).toBe(secondPost.text);
    expect(postsService.find(secondPost.id)).not.toEqual(firstPost);
  });
});
