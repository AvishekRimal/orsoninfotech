"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS, CATEGORIES } from "@/lib/blog";
import CTA from "@/components/sections/CTA";

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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
        <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/10 text-secondary uppercase tracking-wider mb-3"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Engineering Insights & Trends
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight"
              >
                Orson InfoTech <span className="gradient-text">Blog</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              >
                Explore articles on cloud architecture, AI workflows, web performance, cybersecurity, and modern software craftsmanship.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-6 sm:mt-8 max-w-xl mx-auto relative"
              >
                <div className="relative flex items-center">
                  <Search className="absolute left-3.5 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by title, topic, or tag..."
                    className="w-full pl-10 pr-12 py-3 rounded-xl bg-card border border-border/80 focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none shadow-sm transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3.5 text-xs text-muted-foreground hover:text-foreground font-medium"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Category Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-4xl mx-auto"
            >
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-sm scale-105"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Featured Post Banner */}
        {!searchQuery && selectedCategory === "All" && featuredPost && (
          <section className="pb-8 sm:pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border/60 bg-card shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-0"
              >
                <div className="lg:col-span-7 relative h-56 sm:h-72 md:h-80 lg:h-auto lg:min-h-[400px] overflow-hidden bg-muted">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-secondary text-secondary-foreground shadow-sm">
                      Featured Article
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center bg-card">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2.5">
                    <span className="font-semibold text-secondary uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground group-hover:text-secondary transition-colors mb-3 leading-snug">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2.5">
                      <Image
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        width={32}
                        height={32}
                        className="rounded-full object-cover border border-border"
                      />
                      <div>
                        <p className="text-xs font-semibold text-foreground">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {featuredPost.date}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-secondary hover:underline group-hover:translate-x-1 transition-transform"
                    >
                      Read Article
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Blog Post Grid */}
        <section className="pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
              </h3>
              <span className="text-xs font-medium text-muted-foreground">
                {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 sm:py-16 text-center bg-card rounded-2xl border border-border/60 p-6"
              >
                <Search className="w-10 h-10 text-muted-foreground/50 mx-auto mb-3" />
                <h4 className="text-base font-semibold text-foreground">No articles found</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
                  We couldn&apos;t find any articles matching &quot;{searchQuery}&quot; in category &quot;{selectedCategory}&quot;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="mt-5 px-4 py-2 rounded-lg bg-muted text-xs font-medium hover:bg-muted/80 text-foreground transition-colors"
                >
                  Reset Filters
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.slug}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ y: -5, scale: 1.01 }}
                      className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden border border-border hover:border-secondary/40 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Thumbnail */}
                        <div className="relative h-44 sm:h-48 overflow-hidden bg-muted">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold bg-background/90 backdrop-blur-md text-foreground shadow-sm">
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Article Meta & Info */}
                        <div className="p-5 sm:p-6">
                          <div className="flex items-center gap-2.5 text-[11px] sm:text-xs text-muted-foreground mb-2">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </span>
                          </div>

                          <h4 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-secondary transition-colors mb-2">
                            <Link href={`/blog/${post.slug}`}>
                              {post.title}
                            </Link>
                          </h4>

                          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Footer & Author */}
                      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-border/40 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={24}
                            height={24}
                            className="rounded-full object-cover border border-border"
                          />
                          <span className="text-xs font-medium text-foreground">
                            {post.author.name}
                          </span>
                        </div>

                        <Link
                          href={`/blog/${post.slug}`}
                          aria-label={`Read ${post.title}`}
                          className="w-7 h-7 rounded-full bg-muted flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </section>

        <CTA />
      </main>
    </div>
  );
}
