import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { RootState } from '@/lib/store';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CourseCard } from '@/components/courses/CourseCard';
import { Button } from '@/components/ui/button';

/* ================== Types ================== */
type Category = 'All' | 'Language' | 'Programming' | 'Computer' | 'Design' | 'Marketing';

/* ================== Constants ================== */
const CATEGORY_LABELS: Record<Category, string> = {
  All: 'الكل',
  Language: 'اللغات',
  Programming: 'البرمجة',
  Computer: 'مهارات الحاسوب',
  Design: ' التصميم',
  Marketing: 'التسويق الإلكتروني'
};

export default function Courses() {
  const { t, i18n } = useTranslation();
  const { courses } = useSelector((state: RootState) => state.courses);

  const [filter, setFilter] = useState<Category>('All');

  const filteredCourses =
    filter === 'All'
      ? courses
      : courses.filter((course) => course.category === filter);

  return (
    <div
      className="min-h-screen flex flex-col bg-background"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
    >
      <Navbar />

      <main className="flex-grow py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-primary">
              {t('nav.courses')}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              تصفح كتالوجنا الشامل للدورات التدريبية المصممة لمساعدتك على النجاح في العصر الرقمي.
            </p>
          </div>

          {/* Filter Buttons */}
          <div
            className="
              flex gap-2 sm:gap-3 mb-10
              overflow-x-auto sm:overflow-visible
              px-1
              justify-start sm:justify-center
            "
          >
            {(Object.keys(CATEGORY_LABELS) as Category[]).map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                onClick={() => setFilter(category)}
                className="
                  rounded-full
                  px-4 sm:px-6
                  text-sm sm:text-base
                  whitespace-nowrap
                "
              >
                {CATEGORY_LABELS[category]}
              </Button>
            ))}
          </div>

          {/* Courses Grid */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6 md:gap-8
            "
          >
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16 text-muted-foreground text-sm sm:text-base">
              لم يتم العثور على دورات في هذه الفئة.
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}









// import { useTranslation } from 'react-i18next';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/lib/store';
// import { Navbar } from '@/components/layout/Navbar';
// import { Footer } from '@/components/layout/Footer';
// import { CourseCard } from '@/components/courses/CourseCard';
// import { useState } from 'react';
// import { Button } from '@/components/ui/button';

// export default function Courses() {
//   const { t, i18n } = useTranslation();
//   const { courses } = useSelector((state: RootState) => state.courses);
//   const [filter, setFilter] = useState<'All' | 'Language' | 'Programming' | 'Computer'>('All');

//   const filteredCourses = filter === 'All'
//     ? courses
//     : courses.filter(c => c.category === filter);

//   return (
//     <div className="min-h-screen flex flex-col bg-background" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
//       <Navbar />

//       <main className="flex-grow py-16">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h1 className="text-4xl font-bold mb-4 text-primary">{t('nav.courses')}</h1>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               تصفح كتالوجنا الشامل للدورات التدريبية المصممة لمساعدتك على النجاح في العصر الرقمي.
//             </p>
//           </div>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-3 mb-12">
//             {['All', 'Language', 'Programming', 'Computer'].map((category) => (
//               <Button
//                 key={category}
//                 variant={filter === category ? 'default' : 'outline'}
//                 onClick={() => setFilter(category as any)}
//                 className="rounded-full px-6"
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredCourses.map((course) => (
//               <CourseCard key={course.id} course={course} />
//             ))}
//           </div>

//           {filteredCourses.length === 0 && (
//             <div className="text-center py-20 text-muted-foreground">
//               لم يتم العثور على دورات في هذه الفئة.
//             </div>
//           )}
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// }
