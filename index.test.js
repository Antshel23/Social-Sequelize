// const { User, Profile, Post, Comment, Like } = require('./models'); // Ensure correct import
// const { db } = require('./db/connection');
const { db } = require("./db/connection");
const User = require("./models/User");
const Profile = require("./models/Profile");
const Post = require("./models/Post");
const Comment = require("./models/Comment");
const Like = require("./models/Like");

describe('Social Media Models Test', () => {
    // Sync the database before running tests
    beforeAll(async () => {
        await db.sync({ force: true });
    });

    afterAll(async () => {
        await db.close();
    });

    test("User model should create a new user", async () => {
        const user = await User.create({ username: 'testUser', email: 'test@example.com' });
        expect(user.username).toBe('testUser');
        expect(user.email).toBe('test@example.com');
    });

    test("Profile model should create a new profile", async () => {
        const user = await User.create({ username: 'testUser2', email: 'test2@example.com' });
        const profile = await Profile.create({ bio: 'Hello World', profilePicture: 'picture.jpg', birthday: '1990-01-01' });
        await user.setProfile(profile);  // Associate profile with user

        const foundProfile = await user.getProfile();
        expect(foundProfile.bio).toBe('Hello World');
        expect(foundProfile.profilePicture).toBe('picture.jpg');
        expect(foundProfile.birthday).toBe('1990-01-01');
    });

    test("Post model should create a new post", async () => {
        const user = await User.create({ username: 'testUser3', email: 'test3@example.com' });
        const post = await Post.create({ title: 'Test Post', body: 'This is a test post.', createdAt: new Date().toISOString() });
        await user.addPost(post);  // Associate post with user

        const foundPosts = await user.getPosts();
        expect(foundPosts.length).toBe(1);
        expect(foundPosts[0].title).toBe('Test Post');
        expect(foundPosts[0].body).toBe('This is a test post.');
    });

    test("Comment model should create a new comment", async () => {
        const user = await User.create({ username: 'testUser4', email: 'test4@example.com' });
        const post = await Post.create({ title: 'Another Post', body: 'This is another post.', createdAt: new Date().toISOString() });
        await user.addPost(post);  // Associate post with user

        const comment = await Comment.create({ body: 'This is a comment.', createdAt: new Date().toISOString() });
        await post.addComment(comment);  // Associate comment with post

        const foundComments = await post.getComments();
        expect(foundComments.length).toBe(1);
        expect(foundComments[0].body).toBe('This is a comment.');
    });

    test("Like model should create a new like", async () => {
        const user = await User.create({ username: 'testUser5', email: 'test5@example.com' });
        const post = await Post.create({ title: 'Post to Like', body: 'This is a post to like.', createdAt: new Date().toISOString() });
        await user.addPost(post);  // Associate post with user

        const like = await Like.create({ reactionType: 'like', createdAt: new Date().toISOString() });
        await user.addLike(like);  // Associate like with user

        const foundLikes = await user.getLikes();
        expect(foundLikes.length).toBe(1);
        expect(foundLikes[0].reactionType).toBe('like');
    });
});

describe('Social Media Models Test', () => {
    // Sync the database before running tests
    beforeAll(async () => {
        await db.sync({ force: true });
    });

    afterAll(async () => {
        await db.close();
    });

    test("User model should create a new user", async () => {
        const user = await User.create({ username: 'testUser', email: 'test@example.com' });
        expect(user.username).toBe('testUser');
        expect(user.email).toBe('test@example.com');
    });

    test("Profile model should create a new profile", async () => {
        const user = await User.create({ username: 'testUser2', email: 'test2@example.com' });
        const profile = await Profile.create({ bio: 'Hello World', profilePicture: 'picture.jpg', birthday: '1990-01-01' });
        await user.setProfile(profile);  // Associate profile with user

        const foundProfile = await user.getProfile();
        expect(foundProfile.bio).toBe('Hello World');
        expect(foundProfile.profilePicture).toBe('picture.jpg');
        expect(foundProfile.birthday).toBe('1990-01-01');
    });

    test("Post model should create a new post", async () => {
        const user = await User.create({ username: 'testUser3', email: 'test3@example.com' });
        const post = await Post.create({ title: 'Test Post', body: 'This is a test post.', createdAt: new Date().toISOString() });
        await user.addPost(post);  // Associate post with user

        const foundPosts = await user.getPosts();
        expect(foundPosts.length).toBe(1);
        expect(foundPosts[0].title).toBe('Test Post');
        expect(foundPosts[0].body).toBe('This is a test post.');
    });

    test("Comment model should create a new comment", async () => {
        const user = await User.create({ username: 'testUser4', email: 'test4@example.com' });
        const post = await Post.create({ title: 'Another Post', body: 'This is another post.', createdAt: new Date().toISOString() });
        await user.addPost(post);  // Associate post with user

        const comment = await Comment.create({ body: 'This is a comment.', createdAt: new Date().toISOString() });
        await post.addComment(comment);  // Associate comment with post

        const foundComments = await post.getComments();
        expect(foundComments.length).toBe(1);
        expect(foundComments[0].body).toBe('This is a comment.');
    });

    test("Like model should create a new like", async () => {
        const user = await User.create({ username: 'testUser5', email: 'test5@example.com' });
        const post = await Post.create({ title: 'Post to Like', body: 'This is a post to like.', createdAt: new Date().toISOString() });
        await user.addPost(post);  // Associate post with user

        const like = await Like.create({ reactionType: 'like', createdAt: new Date().toISOString() });
        await user.addLike(like);  // Associate like with user

        const foundLikes = await user.getLikes();
        expect(foundLikes.length).toBe(1);
        expect(foundLikes[0].reactionType).toBe('like');
    });
});
