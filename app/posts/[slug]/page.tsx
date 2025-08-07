// app/posts/[slug]/page.tsx

import { getPostData, getAllPostSlugs } from '@/lib/posts';
import { notFound } from 'next/navigation';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();

  return slugs.map((slugObj) => ({
    slug: slugObj.params.slug, // string만 반환하도록 수정
  }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  if (typeof slug !== 'string') return notFound();

  const postData = await getPostData(slug);

  if (!postData) return notFound();

  return (
    <article>
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}