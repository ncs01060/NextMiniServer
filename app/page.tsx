// app/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function HomePage() {
  const posts = getSortedPostsData();

  return (
    <div>
      <h1>마이 블로그</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link> ({post.date})
          </li>
        ))}
      </ul>
    </div>
  );
}