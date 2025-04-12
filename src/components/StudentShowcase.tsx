import React from 'react';

import { Section } from '@/layout/Section';

interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
}

const studentProjects: Project[] = [
  {
    id: '1',
    title: 'Python Website',
    description: 'A simple website showcasing Python skills.',
    url: 'https://nihal27055.github.io/python_website/',
  },
  {
    id: '2',
    title: 'Dinosaur Game',
    description: 'A classic T-Rex runner game.',
    url: 'https://nihal27055.github.io/dinosaur_game/',
  },
  {
    id: '3',
    title: 'Photo App',
    description: 'A basic photo application.',
    url: 'https://nihal27055.github.io/photo--app/',
  },
  {
    id: '4',
    title: 'Flappy Bird',
    description: 'A clone of the popular Flappy Bird game.',
    url: 'https://nihal27055.github.io/flappy_bird/',
  },
  {
    id: '5',
    title: 'Catch the Ball',
    description: 'A simple game to catch falling balls.',
    url: 'https://nihal27055.github.io/catch-the-ball/',
  },
];

const studentInfo = {
  name: 'Nihal',
  grade: '7th Standard',
  bio: 'Nihal is a bright 7th Standard student learning the basics of Python and Vibecoding. Check out some of the amazing projects he has built!',
};

const StudentShowcase = () => (
  <Section
    // Updated title
    title="Student Showcases"
    // Removed subtitle from here
  >
    {/* Added student bio below the title */}
    <p className="mt-4 text-center text-lg text-gray-600 dark:text-gray-600">
      {studentInfo.bio}
    </p>

    {/* Flex container with horizontal scrolling */}
    <div className="mt-8 flex space-x-6 overflow-x-auto py-4">
      {studentProjects.map((project) => (
        <a
          key={project.id}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          // Added min-width to cards to prevent shrinking
          className="block min-w-[300px] rounded-lg bg-white p-6 shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg dark:bg-gray-800"
        >
          <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
          <span className="mt-4 inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            View Project &rarr;
          </span>
        </a>
      ))}
    </div>
  </Section>
);

export { StudentShowcase };
