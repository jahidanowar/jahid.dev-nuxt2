export interface Post {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  slug: string;
  excerpt: {
    rendered: string;
  };
  link: string;
  author: string;
  content: {
    rendered: string;
  };
  categories: number[];
  tags: number[];
  _embedded: any;
}
