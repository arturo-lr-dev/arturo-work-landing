import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { Container, Card, Badge } from "@/components/ui";
import { Navigation, Footer } from "@/components/layout";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on design, development, and the digital industry.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navigation />
      <main className="pt-32 pb-24">
        <Container>
          {/* Header */}
          <div className="max-w-2xl mb-16">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Blog
            </span>
            <h1 className="heading-1 mt-4">
              Thoughts &{" "}
              <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-text-secondary mt-4 body-large">
              Sharing knowledge about design, development, and building digital
              products.
            </p>
          </div>

          {/* Posts Grid */}
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="group h-full">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                      {post.image ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl font-bold text-white/20">
                            {post.title.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-sm text-text-secondary mb-3">
                        <time>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </time>
                        <span>·</span>
                        <span>{post.readingTime}</span>
                      </div>

                      <h2 className="text-lg font-semibold text-text-primary mb-2 group-hover:gradient-text transition-all line-clamp-2">
                        {post.title}
                      </h2>

                      <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-surface-card flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                No posts yet
              </h2>
              <p className="text-text-secondary">
                Check back soon for new articles!
              </p>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </>
  );
}
