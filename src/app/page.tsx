'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/Stats';
import AboutSection from './components/AboutSection';
import FeaturedSection from './components/FeaturedSection';
import CourseCarousel from './components/CourseCarousel';
import ReviewsSection from './components/ReviewsSection';
import CtaSection from './components/CtaSection';
import ContactSection from './components/ContactSection';
import { Course } from './lib/gumroad';

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourses() {
      try {
        const res = await fetch('/api/courses');
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error('Failed to load courses from API:', err);
      } finally {
        setLoading(false);
      }
    }
    loadCourses();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <FeaturedSection courses={courses} loading={loading} />
        <CourseCarousel courses={courses} />
        <ReviewsSection />
        <CtaSection />
        <ContactSection />
      </main>

      <footer className="bg-surface-100 border-t border-surface-500/30 py-10 text-center text-sm text-on-surface-500">
        <p>©  Supra Chetana. All rights reserved.</p>
      </footer>
    </div>
  );
}