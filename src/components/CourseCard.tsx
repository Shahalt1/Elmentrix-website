import Link from 'next/link';
import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  imageUrl,
  duration,
  level,
}) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <img src={imageUrl} alt={title} className="size-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span className="flex items-center">
            <svg
              className="mr-1 size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {duration}
          </span>
          <span className="rounded bg-blue-100 px-2 py-1 text-blue-800">
            {level}
          </span>
        </div>
        <Link href="/course-details" className="mt-4 inline-block">
          <button className="mt-4 w-full rounded bg-blue-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-700">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
