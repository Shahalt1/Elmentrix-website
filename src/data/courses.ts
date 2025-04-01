interface Course {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  level: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Python for Beginners',
    description:
      'Learn the fundamentals of Python programming language. Perfect for absolute beginners who want to start their programming journey.',
    imageUrl: '/assets/images/courses/python.webp',
    duration: '8 weeks',
    level: 'Beginner',
  },
  {
    id: '2',
    title: 'Introduction to Robotics for Beginners',
    description:
      'Discover the exciting world of robotics. Learn about robot mechanics, programming, and control systems in this comprehensive course.',
    imageUrl: '/assets/images/courses/robotics.jpg',
    duration: '10 weeks',
    level: 'Beginner',
  },
  {
    id: '3',
    title: 'Vibe Coding',
    description:
      'A unique approach to coding that combines creativity and technical skills. Learn to code while expressing your creative side.',
    imageUrl: '/assets/images/courses/vibe-coding.png',
    duration: '6 weeks',
    level: 'Intermediate',
  },
  {
    id: '4',
    title: 'Introduction to AI for Beginners',
    description:
      'Start your journey into Artificial Intelligence. Learn about machine learning, neural networks, and AI applications.',
    imageUrl: '/assets/images/courses/ai.png',
    duration: '12 weeks',
    level: 'Beginner',
  },
];
