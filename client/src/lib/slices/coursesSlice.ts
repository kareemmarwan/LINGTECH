import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Course {
  id: string;
  title: string;
  description: string;
  schedule: string;
  price: string;
  level: string;
  category: 'Language' | 'Computer' | 'Programming';
}

const initialState: { courses: Course[] } = {
  courses: [
    {
      id: '1',
      title: 'General English - Level 1',
      description: 'Start your journey with English. Learn basics, grammar, and daily conversation skills.',
      schedule: 'Mon & Wed, 6:00 PM - 8:00 PM (Zoom)',
      price: '$120',
      level: 'Beginner',
      category: 'Language'
    },
    {
      id: '2',
      title: 'Python Programming Masterclass',
      description: 'Learn Python from scratch. Data structures, algorithms, and building real-world applications.',
      schedule: 'Tue & Thu, 7:00 PM - 9:00 PM (Zoom)',
      price: '$250',
      level: 'Intermediate',
      category: 'Programming'
    },
    {
      id: '3',
      title: 'ICDL Certification Preparation',
      description: 'Master the essential computer skills required for the modern workplace including Office suite.',
      schedule: 'Sat, 10:00 AM - 2:00 PM (Zoom)',
      price: '$150',
      level: 'All Levels',
      category: 'Computer'
    },
    {
      id: '4',
      title: 'Business English',
      description: 'Enhance your professional communication skills for meetings, emails, and presentations.',
      schedule: 'Fri, 5:00 PM - 8:00 PM (Zoom)',
      price: '$180',
      level: 'Advanced',
      category: 'Language'
    },
    {
      id: '5',
      title: 'Web Development Bootcamp',
      description: 'Become a full-stack developer with HTML, CSS, JavaScript, and React.',
      schedule: 'Mon, Wed, Fri 6:00 PM - 9:00 PM (Zoom)',
      price: '$300',
      level: 'Beginner to Advanced',
      category: 'Programming'
    }
  ]
};

export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {}
});

export default coursesSlice.reducer;
