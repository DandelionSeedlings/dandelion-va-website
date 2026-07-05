import Link from 'next/link';
import { getAllPosts } from '../../lib/blog';
import { remark } from 'remark';
import html from 'remark-html';
import './blog.css';

export async function generateStaticParams() {
  return [];
}

export default async function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="blog-container">
        <div className="blog-header">
          <h1>The Dandelion Journal</h1>
          <p>Automation insights, business systems, and no-BS marketing strategy for South African entrepreneurs.</p>
        </div>

        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.slug} className="blog-card">
              <Link href={`/blog/${post.slug}`} className="blog-card-link">
                <div className="blog-card-image" style={{ backgroundImage: `url(${post.coverImage})` }}>
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <time className="blog-date">
                    {new Date(post.date).toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </time>
                  <h2>{post.title}</h2>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <span className="blog-read-more">Read article →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}