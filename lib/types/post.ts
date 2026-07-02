export interface Post {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  tags: string[];
  excerpt: string;
  content: string;
  img: string;
  url: string;
}

export interface CategoryCount {
  name: string;
  count: number;
}

export interface RawPost {
  slug?: string;
  url?: string;
  path?: string;
  title?: string;
  date?: string;
  categories?: string[];
  tags?: string[];
  excerpt?: string;
  description?: string;
  content?: string;
  con?: string;
  img?: string;
  thumbnail?: string;
}

export interface PostListResponse {
  postlist?: RawPost[];
}
