import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import CTA from "@/components/sections/CTA";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
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

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && (p.category === post.category || true)
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20">
        <article className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Top Breadcrumb & Back Link */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
            <nav className="flex items-center gap-1.5 text-[11px] sm:text-xs text-muted-foreground overflow-hidden">
              <Link href="/" className="hover:text-foreground transition-colors flex-shrink-0">
                Home
              </Link>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <Link href="/blog" className="hover:text-foreground transition-colors flex-shrink-0">
                Blog
              </Link>
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              <span className="text-foreground font-medium truncate max-w-[140px] sm:max-w-[280px]">
                {post.title}
              </span>
            </nav>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors bg-muted/70 px-2.5 py-1 rounded-lg"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-8 sm:mb-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-secondary/10 text-secondary">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight mb-4 sm:mb-6">
              {post.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
              {post.excerpt}
            </p>

            {/* Author Profile Box */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-card border border-border/60">
              <div className="flex items-center gap-3">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover border border-border"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-foreground">
                    {post.author.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-muted-foreground">
                    {post.author.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-secondary" />
                  {post.date}
                </span>
              </div>
            </div>
          </header>

          {/* Hero Banner Image */}
          <div className="relative w-full h-[220px] sm:h-[340px] md:h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden mb-8 sm:mb-12 shadow-elevated border border-border/40 bg-muted">
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
          <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-foreground leading-relaxed space-y-6 sm:space-y-8">
            {/* Intro */}
            <div className="text-sm sm:text-base md:text-lg font-medium text-foreground/90 bg-muted/40 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-l-4 border-secondary leading-relaxed">
              {post.content.intro}
            </div>

            {/* Content Sections */}
            {post.content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3 sm:space-y-4 pt-2">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
                  {section.heading}
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                  {section.body}
                </p>

                {section.bullets && (
                  <ul className="space-y-2 my-3 pl-0 list-none text-xs sm:text-sm">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.code && (
                  <div className="my-4 sm:my-6 rounded-xl overflow-hidden bg-slate-900 text-slate-100 p-3.5 sm:p-4 font-mono text-xs sm:text-sm border border-slate-800 shadow-inner">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 mb-2 border-b border-slate-800 uppercase tracking-wider">
                      <span>{section.code.language}</span>
                      <span>Snippet</span>
                    </div>
                    <pre className="overflow-x-auto p-1 text-slate-200">
                      <code>{section.code.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}

            {/* Conclusion Box */}
            <div className="mt-8 sm:mt-12 p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-card via-muted/30 to-card border border-secondary/20 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-secondary" />
                Key Takeaway
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {post.content.conclusion}
              </p>
            </div>

            {/* Tags */}
            <div className="pt-6 border-t border-border flex flex-wrap items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-muted-foreground" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-muted text-muted-foreground cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <section className="mt-14 sm:mt-20 pt-8 sm:pt-12 border-t border-border">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Related Articles
                </h3>
                <Link
                  href="/blog"
                  className="text-xs font-semibold text-secondary hover:underline"
                >
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {relatedPosts.map((relPost) => (
                  <Link
                    key={relPost.slug}
                    href={`/blog/${relPost.slug}`}
                    className="group bg-card rounded-xl overflow-hidden border border-border hover:border-secondary/40 transition-all p-3.5 sm:p-4 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-32 rounded-lg overflow-hidden mb-3 bg-muted">
                        <Image
                          src={relPost.image}
                          alt={relPost.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 300px"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <span className="text-[10px] font-semibold text-secondary uppercase tracking-wider">
                        {relPost.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-foreground group-hover:text-secondary transition-colors line-clamp-2 mt-1 mb-2">
                        {relPost.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-muted-foreground">
                      {relPost.readTime}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>

        <div className="mt-14 sm:mt-20">
          <CTA />
        </div>
      </main>
    </div>
  );
}
