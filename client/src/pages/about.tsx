import { useTranslation } from 'react-i18next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, BookOpen, Award, Heart } from 'lucide-react';

export default function About() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="min-h-screen flex flex-col bg-background"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
    >
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-whit">
              {t('nav.about')}
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              نحن نكرّس جهودنا لنشر التعليم للجميع وتوفير فرص تعليمية عالية الجودة
              في أي مكان وزمان.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* النص */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-semibold bg-primary/10 px-4 py-1.5 rounded-full">
                  <Target className="h-4 w-4" />
                  <span>رسالتنا</span>
                </div>

                <h2 className="text-3xl font-bold">
                  تمكين الأفراد من سدّ فجوة المهارات الرقمية                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  نؤمن في منصتنا بأن التعليم الجيد حق للجميع. لذلك نسعى إلى تمكين المتعلمين من اكتساب اللغة الإنجليزية ومهارات الحاسوب والبرمجة، بما يساعدهم على مواكبة متطلبات سوق العمل الحديث.
                  نلتزم ببناء مجتمع تعليمي داعم عبر الإنترنت، يتيح للطلاب التعلّم والتطور وتحقيق أهدافهم المهنية من خلال دروس مباشرة وتفاعلية تُقدَّم عبر برنامج زووم، بإشراف نخبة من المدرّبين المحترفين.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  نحرص على بناء مجتمع تعليمي داعم عبر الإنترنت، حيث يستطيع
                  الطلاب التعلم والتطور وتحقيق أهدافهم المهنية من خلال دروس
                  تفاعلية عبر برنامج زووم بإشراف مدربين محترفين.
                </p>
              </div>

              {/* الكروت */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-secondary/50 border-none">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <BookOpen className="h-10 w-10 text-primary" />
                    <h3 className="font-bold">منهج احترافي</h3>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/50 border-none mt-8">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <Award className="h-10 w-10 text-primary" />
                    <h3 className="font-bold">مدربون معتمدون</h3>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/50 border-none">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <Heart className="h-10 w-10 text-primary" />
                    <h3 className="font-bold">نهتم بالطالب أولاً</h3>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/50 border-none mt-8">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <Target className="h-10 w-10 text-primary" />
                    <h3 className="font-bold">موجه لسوق العمل</h3>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
