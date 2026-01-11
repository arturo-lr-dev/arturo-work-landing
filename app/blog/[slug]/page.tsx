import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Container, Badge, Button } from "@/components/ui";
import { Navigation, Footer } from "@/components/layout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: post.image ? [{ url: post.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Dynamic import of MDX content
  let MDXContent;
  try {
    MDXContent = (await import(`@/content/blog/${slug}.mdx`)).default;
  } catch {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24">
        <Container>
          <article className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-12">
              {/* Meta */}
              <div className="flex items-center gap-3 text-sm text-text-secondary mb-4">
                <time>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>

              {/* Title */}
              <h1 className="heading-1 mb-6">{post.title}</h1>

              {/* Description */}
              <p className="body-large text-text-secondary mb-6">
                {post.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </header>

            {/* Featured Image */}
            {post.image && (
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-12 bg-surface-card">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <MDXContent />
            </div>

            {/* Footer */}
            <footer className="mt-16 pt-8 border-t border-white/5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-text-secondary">
                  Thanks for reading! Have thoughts?{" "}
                  <a
                    href="https://twitter.com/arturo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Let me know on Twitter
                  </a>
                </p>
                <Button href="/blog" variant="secondary">
                  More Articles
                </Button>
              </div>
            </footer>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
