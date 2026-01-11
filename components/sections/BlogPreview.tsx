"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container, Card, Badge, Button } from "@/components/ui";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { BlogPost } from "@/types";

interface BlogPreviewProps {
  posts: BlogPost[];
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`}>
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
          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-text-secondary mb-3">
            <time>{new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:gradient-text transition-all line-clamp-2">
            {post.title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary text-sm mb-4 line-clamp-2">
            {post.description}
          </p>

          {/* Tags */}
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
  );
}

export function BlogPreview({ posts }: BlogPreviewProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[128px] -z-10" />

      <Container>
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div>
            <motion.span
              className="text-primary font-medium tracking-wider uppercase text-sm"
              variants={fadeInUp}
            >
              Blog
            </motion.span>
            <motion.h2 className="heading-2 mt-4" variants={fadeInUp}>
              Latest{" "}
              <span className="gradient-text">Articles</span>
            </motion.h2>
            <motion.p className="text-text-secondary mt-4 max-w-lg" variants={fadeInUp}>
              Thoughts on design, development, and the digital industry.
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="mt-6 md:mt-0">
            <Button href="/blog" variant="secondary">
              View All Posts
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              variants={fadeInUp}
              custom={index}
            >
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
