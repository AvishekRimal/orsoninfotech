"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ExternalLink,
  Sparkles,
  Clock,
  Award,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  BookOpen,
  Send,
  X,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import {
  COURSES,
  TRAINING_CATEGORIES,
  Course,
} from "@/lib/training";
import CTA from "@/components/sections/CTA";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 9;

export default function TrainingPage() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Quick Inquiry Modal State
  const [activeInquiryCourse, setActiveInquiryCourse] = useState<Course | null>(null);
  const [inquirySubmitting, setInquirySubmitting] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  // Filter courses based on category, level, and search
  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;

      const matchesLevel =
        selectedLevel === "All" || course.level === selectedLevel;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query) ||
        course.highlights.some((h) => h.toLowerCase().includes(query));

      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Pagination calculations
  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE) || 1;
  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredCourses.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredCourses, currentPage]);

  const recommendedList = useMemo(() => {
    return COURSES.filter((course) => course.recommended);
  }, []);

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));

    toast({
      title: "Inquiry Sent Successfully!",
      description: `Thank you for your interest in ${activeInquiryCourse?.title}. Our academic counselor will contact you shortly.`,
    });

    setInquiryData({ name: "", email: "", phone: "", notes: "" });
    setInquirySubmitting(false);
    setActiveInquiryCourse(null);
  };

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
                <GraduationCap className="w-3.5 h-3.5 text-secondary" />
                Industry Certification & Skill Programs
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight"
              >
                Professional Tech & Skill <span className="gradient-text">Training</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              >
                Accelerate your career in software engineering, AI, cloud architecture, design, and cybersecurity with certified courses.
              </motion.p>

              {/* Broadway Partner Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 px-4 py-2 rounded-xl bg-card border border-border/80 text-xs text-muted-foreground shadow-sm"
              >
                <span>Official Training Partner:</span>
                <a
                  href="https://broadwayinfosys.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-secondary hover:underline inline-flex items-center gap-1"
                >
                  Broadway Infosys
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>

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
                    onChange={(e) => handleSearchChange(e.target.value)}
                    placeholder="Search by topic (e.g., Python, Next.js, DevOps, AI)..."
                    className="w-full pl-10 pr-12 py-3 rounded-xl bg-card border border-border/80 focus:border-secondary focus:ring-2 focus:ring-secondary/20 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground outline-none shadow-sm transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => handleSearchChange("")}
                      className="absolute right-3.5 text-xs text-muted-foreground hover:text-foreground font-medium"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recommended Courses Banner */}
        {!searchQuery && selectedCategory === "All" && selectedLevel === "All" && (
          <section className="pb-10 sm:pb-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card via-muted/40 to-card border border-secondary/20 p-6 sm:p-8 md:p-10 shadow-elevated">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                      <Award className="w-3.5 h-3.5 text-secondary" />
                      Top Recommended for Developers
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                      Best Courses Aligned with Your Tech Stack
                    </h2>
                  </div>
                  <a
                    href="https://broadwayinfosys.com/courses"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-secondary hover:underline"
                  >
                    View All Courses (Broadway Infosys)
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {recommendedList.slice(0, 6).map((course) => (
                    <div
                      key={course.id}
                      className="bg-card rounded-xl p-4 border border-border/80 hover:border-secondary/40 hover:shadow-card transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-secondary">
                            {course.categoryIcon} {course.category}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-secondary/15 text-secondary">
                            Top Match
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-foreground mb-1.5 line-clamp-1">
                          {course.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-3">
                          {course.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-border/40 space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-secondary" />
                            {course.duration}
                          </span>
                          <button
                            onClick={() => setActiveInquiryCourse(course)}
                            className="font-semibold text-foreground hover:text-secondary text-[11px] transition-colors"
                          >
                            Quick Inquiry
                          </button>
                        </div>

                        <div className="flex items-center gap-2 pt-1">
                          <a
                            href="https://broadwayinfosys.com/courses"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-1.5 px-2 rounded-lg bg-muted text-[11px] font-semibold text-foreground hover:bg-muted/80 transition-colors"
                          >
                            Course Details
                          </a>
                          <a
                            href="https://broadwayinfosys.com/enroll-now"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center py-1.5 px-2 rounded-lg bg-secondary text-[11px] font-semibold text-secondary-foreground shadow-sm hover:opacity-90 transition-opacity"
                          >
                            Enroll Now
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Category & Skill Filter Pills */}
        <section className="pb-6">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-5xl mx-auto">
              {TRAINING_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground shadow-sm scale-105"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Level Selector */}
            <div className="mt-4 flex items-center justify-center gap-2 text-xs">
              <span className="text-muted-foreground font-medium">Difficulty Level:</span>
              {["All", "Beginner", "Intermediate", "Advanced"].map((level) => (
                <button
                  key={level}
                  onClick={() => {
                    setSelectedLevel(level);
                    setCurrentPage(1);
                  }}
                  className={`px-2.5 py-1 rounded-md transition-colors ${
                    selectedLevel === level
                      ? "bg-secondary/20 text-secondary font-bold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Course Catalog Grid with Pagination */}
        <section className="pb-16 sm:pb-20 lg:pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                {selectedCategory === "All" ? "All Training Courses" : `${selectedCategory} Courses`}
              </h3>
              <span className="text-xs font-medium text-muted-foreground">
                Showing {paginatedCourses.length} of {filteredCourses.length} courses
              </span>
            </div>

            {filteredCourses.length === 0 ? (
              <div className="py-12 text-center bg-card rounded-2xl border border-border/60 p-6">
                <BookOpen className="w-10 h-10 text-muted-foreground/50 mx-auto mb-3" />
                <h4 className="text-base font-semibold text-foreground">No courses found</h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
                  No training course matches your current filter selection.
                </p>
                <button
                  onClick={() => {
                    handleSearchChange("");
                    handleCategoryChange("All");
                    setSelectedLevel("All");
                  }}
                  className="mt-5 px-4 py-2 rounded-lg bg-muted text-xs font-medium hover:bg-muted/80 text-foreground transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  <AnimatePresence mode="popLayout">
                    {paginatedCourses.map((course, index) => (
                      <motion.div
                        key={course.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ delay: index * 0.04 }}
                        whileHover={{ y: -5, scale: 1.01 }}
                        className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden border border-border hover:border-secondary/40 hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          {/* Course Image */}
                          <div className="relative h-44 sm:h-48 overflow-hidden bg-muted">
                            <Image
                              src={course.image}
                              alt={course.title}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                              <span className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold bg-background/90 backdrop-blur-md text-foreground shadow-sm">
                                {course.categoryIcon} {course.category}
                              </span>
                              {course.recommended && (
                                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-secondary text-secondary-foreground shadow-sm">
                                  Top Pick
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-5 sm:p-6">
                            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 text-secondary" />
                                {course.duration}
                              </span>
                              <span className="px-2 py-0.5 rounded bg-muted text-[10px] font-medium text-foreground">
                                {course.level}
                              </span>
                            </div>

                            <h4 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-secondary transition-colors mb-2">
                              {course.title}
                            </h4>

                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-3">
                              {course.description}
                            </p>

                            {/* Highlights */}
                            <div className="flex flex-wrap gap-1 mb-1">
                              {course.highlights.map((h, hIdx) => (
                                <span
                                  key={hIdx}
                                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-muted/60 text-muted-foreground"
                                >
                                  ✓ {h}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons: Course Details & Enroll Now */}
                        <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-border/40 space-y-2">
                          <div className="flex items-center gap-2">
                            <a
                              href="https://broadwayinfosys.com/courses"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-muted text-xs font-bold text-foreground hover:bg-muted/80 transition-colors"
                            >
                              Course Details
                              <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                            </a>

                            <a
                              href="https://broadwayinfosys.com/enroll-now"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 inline-flex items-center justify-center gap-1 py-2 px-3 rounded-lg bg-secondary text-xs font-bold text-secondary-foreground shadow-sm hover:opacity-90 transition-opacity"
                            >
                              Enroll Now
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>

                          <div className="text-center pt-1">
                            <button
                              onClick={() => setActiveInquiryCourse(course)}
                              className="text-[11px] font-semibold text-muted-foreground hover:text-secondary transition-colors"
                            >
                              Need guidance? Instant Inquiry
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Pagination Bar */}
                {totalPages > 1 && (
                  <div className="mt-10 flex items-center justify-center gap-2">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg bg-card border border-border text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      aria-label="Previous Page"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                          <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`w-8 h-8 rounded-lg text-xs font-semibold transition-all ${
                              currentPage === page
                                ? "bg-primary text-primary-foreground shadow-sm"
                                : "bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            {page}
                          </button>
                        )
                      )}
                    </div>

                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg bg-card border border-border text-foreground hover:bg-muted disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                      aria-label="Next Page"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>

        {/* Quick Inquiry Modal */}
        <AnimatePresence>
          {activeInquiryCourse && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-md bg-card rounded-2xl border border-border p-6 shadow-elevated"
              >
                <button
                  onClick={() => setActiveInquiryCourse(null)}
                  className="absolute top-4 right-4 p-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>

                <h3 className="text-lg font-bold text-foreground mb-1">
                  Course Inquiry
                </h3>
                <p className="text-xs text-muted-foreground mb-4">
                  Inquiring about <span className="font-semibold text-secondary">{activeInquiryCourse.title}</span>
                </p>

                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">
                      Full Name
                    </label>
                    <Input
                      required
                      placeholder="Enter your name"
                      value={inquiryData.name}
                      onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                      className="h-10 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">
                      Email Address
                    </label>
                    <Input
                      required
                      type="email"
                      placeholder="Enter your email"
                      value={inquiryData.email}
                      onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                      className="h-10 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1">
                      Phone Number
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="Enter phone number"
                      value={inquiryData.phone}
                      onChange={(e) => setInquiryData({ ...inquiryData, phone: e.target.value })}
                      className="h-10 text-xs"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="sm"
                    className="w-full text-xs font-bold"
                    disabled={inquirySubmitting}
                  >
                    {inquirySubmitting ? "Submitting..." : "Send Course Inquiry"}
                    <Send className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <CTA />
      </main>
    </div>
  );
}
