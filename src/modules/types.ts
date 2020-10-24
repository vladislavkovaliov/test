export type PostId = string | number;
export type AuthorId = string | number;
export type LikeId = string | number;

export type Post = {
    id: PostId;
    author: Author;
    likes: Like[];
};
export type Like = {
    id: LikeId;
    author: Author;
};
export type Author = {
    id: AuthorId;
    firstName: string;
};

export type PostsEntities = {
    entities: Record<PostId, Post>;
    result: (string | number)[];
};

export type Auth = {
    isAuthenticated: boolean;
};

export type InitStore = {
    posts: PostsEntities;
    auth: Auth;
};

export type State = InitStore & {};

export type PostResponse = {
    userId: number;
    id: number;
    title: string;
    body: string;
};
