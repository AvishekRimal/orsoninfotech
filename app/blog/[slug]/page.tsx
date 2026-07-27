import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, BlogPost } from "@/lib/blog";
import CTA from "@/components/sections/CTA";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Tag,
  User,
  CheckCircle2,
  ChevronRight,
  BookOpen,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Orson InfoTech Blog",
    };
  }

  return {
    title: `${post.title} | Orson InfoTech Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Find related posts (same category or recent, excluding current)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && (p.category === post.category || true)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-20">
        {/* Article Container */}
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Top Breadcrumb & Back Link */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <nav className="flex items-center gap-2 text-xs text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground font-medium truncate max-w-[200px] sm:max-w-[300px]">
                {post.title}
              </span>
            </nav>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors bg-muted/60 px-3 py-1.5 rounded-lg"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Articles
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-10 text-center sm:text-left">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-secondary/10 text-secondary">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Author Profile Box */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-card border border-border/60">
              <div className="flex items-center gap-4">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover border border-border"
                />
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    {post.author.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {post.author.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-secondary" />
                  Published {post.date}
                </span>
              </div>
            </div>
          </header>

          {/* Hero Banner Image */}
          <div className="relative w-full h-[300px] sm:h-[450px] rounded-3xl overflow-hidden mb-12 shadow-elevated border border-border/40">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
              className="object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-foreground leading-relaxed space-y-8">
            {/* Intro */}
            <div className="text-lg font-medium text-foreground/90 bg-muted/40 p-6 rounded-2xl border-l-4 border-secondary leading-relaxed">
              {post.content.intro}
            </div>

            {/* Content Sections */}
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-4 pt-4">
                <h2 className="text-2xl font-bold text-foreground tracking-tight">
                  {section.heading}
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  {section.body}
                </p>

                {section.bullets && (
                  <ul className="space-y-2.5 my-4 pl-0 list-none">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-foreground/90">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.code && (
                  <div className="my-6 rounded-xl overflow-hidden bg-slate-900 text-slate-100 p-4 font-mono text-sm border border-slate-800 shadow-inner">
                    <div className="flex items-center justify-between text-xs text-slate-400 pb-2 mb-3 border-b border-slate-800 uppercase tracking-wider">
                      <span>{section.code.language}</span>
                      <span>Snippet</span>
                    </div>
                    <pre className="overflow-x-auto p-2 text-slate-200">
                      <code>{section.code.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion Box */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-card via-muted/40 to-card border border-secondary/20 shadow-sm">
              <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-secondary" />
                Key Takeaway
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>

            {/* Tags & Categories */}
            <div className="pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <section className="mt-20 pt-12 border-t border-border">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-foreground">
                  Related Articles
                </h3>
                <Link
                  href="/blog"
                  className="text-xs font-semibold text-secondary hover:underline"
                >
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relPost) => (
                  <Link
                    key={relPost.slug}
                    href={`/blog/${relPost.slug}`}
                    className="group bg-card rounded-xl overflow-hidden border border-border hover:border-secondary/40 transition-all p-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-36 rounded-lg overflow-hidden mb-4 bg-muted">
                        <Image
                          src={relPost.image}
                          alt={relPost.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">
                        {relPost.category}
                      </span>
                      <h4 className="text-sm font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-2 mt-1 mb-2">
                        {relPost.title}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {relPost.readTime}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        {/* CTA section */}
        <div className="mt-20">
          <CTA />
        </div>
      </main>
    </div>
  );
}
