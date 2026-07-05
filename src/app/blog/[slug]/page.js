import Link from 'next/link';
import { getAllSlugs, getPostBySlug } from '../../../lib/blog';
import { remark } from 'remark';
import html from 'remark-html';
import '../blog.css';

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  return {
    title: `${post.title} — Dandelion Creations`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <article className="blog-post-container">
      <div className="blog-post-header">
        <span className="blog-post-category">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="blog-post-meta">
          <time>
            {new Date(post.date).toLocaleDateString('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' })}
          </time>
          <span>·</span>
          <span>{post.readTime} min read</span>
        </div>
      </div>

      <div 
        className="blog-post-cover" 
        style={{ backgroundImage: `url(${post.coverImage})` }}
      />

      <div 
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />

      <div className="blog-post-cta">
        <h3>Ready to automate your business?</h3>
        <p>We build custom Google Workspace systems that save you 10+ hours per week.</p>
        <div className="blog-cta-buttons">
          <a href="https://wa.me/27728393087" className="btn-primary" target="_blank" rel="noopener noreferrer">
            WhatsApp Us
          </a>
          <Link href="/#templates" className="btn-secondary">
            View Products
          </Link>
        </div>
      </div>
    </article>
  );
}