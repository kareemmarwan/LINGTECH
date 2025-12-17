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
      name: 'سارة جونسون',
      role: 'رئيسة قسم اللغة الإنجليزية',
      bio: 'مدرّسة معتمدة في تدريس اللغة الإنجليزية (TEFL) بخبرة 10 سنوات في تعليم الطلاب من مختلف أنحاء العالم.',
      image: teacher1
    },
    {
      id: '2',
      name: 'ديفيد تشين',
      role: 'مدرب برمجة أول',
      bio: 'مهندس سابق في جوجل، شغوف بتعليم بايثون وتطوير الويب للجيل القادم.',
      image: teacher2
    },
    {
      id: '3',
      name: 'أميرة حسن',
      role: 'مدرّبة مهارات الحاسوب',
      bio: 'متخصصة في الثقافة الرقمية وشهادة ICDL مع التركيز على المهارات العملية لسوق العمل.',
      image: teacher3
    },
    {
      id: '4',
      name: 'جيمس ويلسون',
      role: 'مدرب التواصل في مجال الأعمال',
      bio: 'يساعد المهنيين على إتقان فن التفاوض والتواصل المؤسسي.',
      image: teacher4
    },

  ]

};

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {}
});

export default teamSlice.reducer;
