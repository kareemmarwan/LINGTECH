import { createSlice } from '@reduxjs/toolkit';
import teacher1 from '@assets/stock_images/diverse_professional_858d51a0.jpg';
import teacher2 from '@assets/stock_images/diverse_professional_9c342fff.jpg';
import teacher3 from '@assets/stock_images/diverse_professional_cb77bae8.jpg';
import teacher4 from '@assets/stock_images/diverse_professional_3af6d303.jpg';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const initialState: { members: TeamMember[] } = {
  members: [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Head of English Department',
      bio: 'Certified TEFL instructor with 10 years of experience in teaching ESL to students worldwide.',
      image: teacher1
    },
    {
      id: '2',
      name: 'David Chen',
      role: 'Senior Programming Instructor',
      bio: 'Ex-Google engineer passionate about teaching Python and Web Development to the next generation.',
      image: teacher2
    },
    {
      id: '3',
      name: 'Amira Hassan',
      role: 'Computer Skills Trainer',
      bio: 'Specialist in digital literacy and ICDL certification with a focus on practical workplace skills.',
      image: teacher3
    },
    {
      id: '4',
      name: 'James Wilson',
      role: 'Business Communication Coach',
      bio: 'Helps professionals master the art of negotiation and corporate communication.',
      image: teacher4
    }
  ]
};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {}
});

export default teamSlice.reducer;
