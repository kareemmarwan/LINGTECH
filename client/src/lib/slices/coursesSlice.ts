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

// const initialState: { courses: Course[] } = {
//   courses: [
//     {
//       id: '1',
//       title: 'General English - Level 1',
//       description: 'Start your journey with English. Learn basics, grammar, and daily conversation skills.',
//       schedule: 'Mon & Wed, 6:00 PM - 8:00 PM (Zoom)',
//       price: '$120',
//       level: 'Beginner',
//       category: 'Language'
//     },
//     {
//       id: '2',
//       title: 'Python Programming Masterclass',
//       description: 'Learn Python from scratch. Data structures, algorithms, and building real-world applications.',
//       schedule: 'Tue & Thu, 7:00 PM - 9:00 PM (Zoom)',
//       price: '$250',
//       level: 'Intermediate',
//       category: 'Programming'
//     },
//     {
//       id: '3',
//       title: 'ICDL Certification Preparation',
//       description: 'Master the essential computer skills required for the modern workplace including Office suite.',
//       schedule: 'Sat, 10:00 AM - 2:00 PM (Zoom)',
//       price: '$150',
//       level: 'All Levels',
//       category: 'Computer'
//     },
//     {
//       id: '4',
//       title: 'Business English',
//       description: 'Enhance your professional communication skills for meetings, emails, and presentations.',
//       schedule: 'Fri, 5:00 PM - 8:00 PM (Zoom)',
//       price: '$180',
//       level: 'Advanced',
//       category: 'Language'
//     },
//     {
//       id: '5',
//       title: 'Web Development Bootcamp',
//       description: 'Become a full-stack developer with HTML, CSS, JavaScript, and React.',
//       schedule: 'Mon, Wed, Fri 6:00 PM - 9:00 PM (Zoom)',
//       price: '$300',
//       level: 'Beginner to Advanced',
//       category: 'Programming'
//     }
//   ]
// };
const initialState: { courses: Course[] } = {
  courses: [
    {
      id: "1",
      title: "اللغة الإنجليزية العامة - المستوى الأول",
      description: "ابدأ رحلتك في تعلم اللغة الإنجليزية. تعلم الأساسيات، القواعد، ومهارات المحادثة اليومية.",
      schedule: "الاثنين والأربعاء، 6:00 مساءً - 8:00 مساءً (عبر Zoom)",
      price: "$120",
      level: "مبتدئ",
      category: 'Language'
    },
    {
      id: "2",
      title: "دورة البرمجة بلغة بايثون من الصفر للاحتراف",
      description: "تعلم لغة بايثون من البداية. هياكل البيانات، الخوارزميات، وبناء تطبيقات حقيقية.",
      schedule: "الثلاثاء والخميس، 7:00 مساءً - 9:00 مساءً (عبر Zoom)",
      price: "$250",
      level: "متوسط",
      category: 'Programming'
    },
    {
      id: "3",
      title: "التحضير لشهادة ICDL",
      description: "إتقان مهارات الحاسوب الأساسية المطلوبة في سوق العمل بما يشمل حزمة Microsoft Office.",
      schedule: "السبت، 10:00 صباحًا - 2:00 ظهرًا (عبر Zoom)",
      price: "$150",
      level: "جميع المستويات",
      category: 'Computer'
    },
    {
      id: "4",
      title: "اللغة الإنجليزية للأعمال",
      description: "تطوير مهارات التواصل المهني للاجتماعات، البريد الإلكتروني، والعروض التقديمية.",
      schedule: "الجمعة، 5:00 مساءً - 8:00 مساءً (عبر Zoom)",
      price: "$180",
      level: "متقدم",
      category: 'Language'
    },
    {
      id: "5",
      title: "معسكر تطوير الويب الشامل",
      description: "تعلم تطوير المواقع باستخدام HTML وCSS وJavaScript وReact لتصبح مطور Full Stack.",
      schedule: "الاثنين، الأربعاء، الجمعة 6:00 مساءً - 9:00 مساءً (عبر Zoom)",
      price: "$300",
      level: "من مبتدئ إلى متقدم",
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
