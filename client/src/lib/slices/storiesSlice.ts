import { createSlice } from '@reduxjs/toolkit';
import student1 from '@assets/stock_images/happy_students_diver_70c04364.jpg';
import student2 from '@assets/stock_images/happy_students_diver_0c1e50f3.jpg';
import student3 from '@assets/stock_images/happy_students_diver_2f071293.jpg';

export interface SuccessStory {
  id: string;
  name: string;
  course: string;
  quote: string;
  image: string;
}

const initialState: { stories: SuccessStory[] } = {
  stories: [
    {
      id: '1',
      name: 'Maria Rodriguez',
      course: 'English for Beginners',
      quote: "I couldn't speak a word of English before. Now I can communicate confidently in my travels!",
      image: student1
    },
    {
      id: '2',
      name: 'Ahmed Al-Sayed',
      course: 'Python Masterclass',
      quote: "This course changed my career. I landed my first junior developer job just 3 months after finishing.",
      image: student2
    },
    {
      id: '3',
      name: 'Emily Blunt',
      course: 'Business English',
      quote: "The flexibility of Zoom lessons allowed me to learn while working full-time. Highly recommended!",
      image: student3
    }
  ]
};

export const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {}
});

export default storiesSlice.reducer;
