import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';

import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';
import { Meta } from '../layout/Meta';
import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';
import { AppConfig } from '../utils/AppConfig';

const CoursesPage = () => {
  const coursesRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    // Wait for the page to load and then scroll if there's a hash
    if (router.asPath.includes('#courses') && coursesRef.current) {
      setTimeout(() => {
        coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [router.asPath]);

  return (
    <div className="text-gray-600 antialiased">
      <Meta
        title={`Courses - ${AppConfig.title}`}
        description="Explore our courses"
      />
      <Hero />

      <div className="min-h-screen bg-gray-50">
        <div
          id="courses"
          ref={coursesRef}
          className="container mx-auto px-4 py-16"
        >
          <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
            Our Courses
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Discover our comprehensive range of courses designed to help you
            master new skills and advance your career in technology.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                imageUrl={course.imageUrl}
                duration={course.duration}
                level={course.level}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoursesPage;
