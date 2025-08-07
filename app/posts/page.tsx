// app/page.tsx
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function HomePage() {
  const posts = getSortedPostsData();

  return (
    <main>
      <h1>블로그</h1>
      <ul>
        {posts.map(({ slug, title, date }) => (
          <li key={slug}>
            <Link href={`/posts/${slug}`}>{title}</Link> ({date})
          </li>
        ))}
      </ul>
    </main>
  );
}