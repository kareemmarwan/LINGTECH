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
      name: 'ماريا رودريغيز',
      course: 'اللغة الإنجليزية للمبتدئين',
      quote: "لم أكن أستطيع التحدث بكلمة واحدة بالإنجليزية من قبل، الآن أستطيع التواصل بثقة أثناء سفراتي!",
      image: student1
    },
    {
      id: '2',
      name: 'أحمد السيد',
      course: 'دورة بايثون الشاملة',
      quote: "هذه الدورة غيرت مساري المهني، حصلت على أول وظيفة لي كمطور مبتدئ بعد 3 أشهر فقط من إنهائها.",
      image: student2
    },
    {
      id: '3',
      name: 'إيميلي بلانت',
      course: 'اللغة الإنجليزية للأعمال',
      quote: "مرونة الدروس عبر زوم سمحت لي بالتعلم أثناء عملي بدوام كامل. أنصح بها بشدة!",
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
