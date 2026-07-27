"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, User, Tag, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, CATEGORIES, BlogPost } from "@/lib/blog";
import CTA from "@/components/sections/CTA";

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0];
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background" />
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary uppercase tracking-wider mb-4"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Engineering Insights & Trends
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
              >
                Orson InfoTech <span className="gradient-text">Blog</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-lg text-muted-foreground leading-relaxed"
              >
                Explore articles on cloud architecture, AI workflows, web performance, cybersecurity, and modern software craftmanship.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 max-w-xl mx-auto relative"
              >
                <div className="relative flex items-center">
                  <Search className="absolute left-4 w-5 h-5 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search articles by title, topic, or keyword..."
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-card border border-border/80 focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-foreground placeholder:text-muted-foreground outline-none shadow-sm transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 text-xs text-muted-foreground hover:text-foreground font-medium"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Category Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto"
            >
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-md scale-105"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Post Banner (Only shown if no search filter active) */}
        {!searchQuery && selectedCategory === "All" && featuredPost && (
          <section className="pb-12">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative rounded-3xl overflow-hidden border border-border/60 bg-card shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-[460px] overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground shadow-sm">
                      Featured Post
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-center bg-card">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="font-semibold text-secondary uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-secondary transition-colors mb-4">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        width={36}
                        height={36}
                        className="rounded-full object-cover border border-border"
                      />
                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-[11px] text-muted-foreground">
                          {featuredPost.date}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:underline group-hover:translate-x-1 transition-transform"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Post Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-foreground">
                {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
              </h3>
              <span className="text-xs font-medium text-muted-foreground">
                Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-16 text-center bg-card rounded-2xl border border-border/60"
              >
                <Search className="w-12 h-12 text-muted-foreground/50 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-foreground">No articles found</h4>
                <p className="text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
                  We couldn&apos;t find any articles matching &quot;{searchQuery}&quot; in category &quot;{selectedCategory}&quot;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-6 px-4 py-2 rounded-lg bg-muted text-sm font-medium hover:bg-muted/80 text-foreground transition-colors"
                >
                  Reset Filters
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -6 }}
                      className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-secondary/40 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Thumbnail */}
                        <div className="relative h-52 overflow-hidden bg-muted">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-background/90 backdrop-blur-md text-foreground shadow-sm">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Article Meta & Info */}
                        <div className="p-6">
                          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              {post.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </span>
                          </div>

                          <h4 className="text-xl font-bold text-foreground leading-snug group-hover:text-secondary transition-colors mb-3">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h4>

                          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Footer & Author */}
                      <div className="px-6 pb-6 pt-2 border-t border-border/40 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={28}
                            height={28}
                            className="rounded-full object-cover border border-border"
                          />
                          <span className="text-xs font-medium text-foreground">
                            {post.author.name}
                          </span>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          aria-label={`Read ${post.title}`}
                          className="w-8 h-8 rounded-full bg-muted flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>

        {/* CTA section */}
        <CTA />
      </main>
    </div>
  );
}
