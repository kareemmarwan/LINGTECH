import { useTranslation } from 'react-i18next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, BookOpen, Award, Heart } from 'lucide-react';

export default function About() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-background" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('nav.about')}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              We are dedicated to democratizing education and providing high-quality learning opportunities for everyone, everywhere.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-semibold bg-primary/10 px-4 py-1.5 rounded-full">
                  <Target className="h-4 w-4" />
                  <span>Our Mission</span>
                </div>
                <h2 className="text-3xl font-bold">Bridging the Digital Skills Gap</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At EduPlatform, we believe that quality education should be accessible to all. Our mission is to empower individuals with the English language proficiency, computer literacy, and programming skills needed to thrive in today's global economy.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to create a supportive online community where students can learn, grow, and achieve their professional goals through interactive Zoom-based lessons led by industry experts.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-secondary/50 border-none">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <BookOpen className="h-10 w-10 text-primary" />
                    <h3 className="font-bold">Expert Curriculum</h3>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/50 border-none mt-8">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <Award className="h-10 w-10 text-primary" />
                    <h3 className="font-bold">Certified Instructors</h3>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/50 border-none">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <Heart className="h-10 w-10 text-primary" />
                    <h3 className="font-bold">Student Focused</h3>
                  </CardContent>
                </Card>
                <Card className="bg-secondary/50 border-none mt-8">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                    <Target className="h-10 w-10 text-primary" />
                    <h3 className="font-bold">Career Oriented</h3>
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
