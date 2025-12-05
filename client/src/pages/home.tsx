import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CourseCard } from '@/components/courses/CourseCard';
import { TeamMemberCard } from '@/components/team/TeamMemberCard';
import { SuccessStoryCard } from '@/components/home/SuccessStories';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle2, Globe, Laptop, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImage from '@assets/stock_images/student_learning_onl_476b537c.jpg';
import { useEffect, useState } from 'react';


import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
export default function Home() {
  const { t, i18n } = useTranslation();
  const { courses } = useSelector((state: RootState) => state.courses);
  const { members } = useSelector((state: RootState) => state.team);
  const { stories } = useSelector((state: RootState) => state.stories);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  // Get top 3 courses
  // const featuredCourses = courses.slice(0, 5);
  const featuredCourses = courses



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // يبدأ الظهور بعد النزول 300px
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className="min-h-screen flex flex-col bg-background" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-primary/5 py-20 md:py-32 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-primary">
                  {t('hero.title')}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                  {t('hero.subtitle')}
                </p>
                <div className="flex gap-4 pt-4">
                  <Link href="/courses">
                    <Button size="lg" className="text-lg h-12 px-8 shadow-lg shadow-primary/20">
                      {t('hero.cta')}
                      <ArrowRight className={`ml-2 h-5 w-5 ${i18n.language === 'ar' ? 'rotate-180' : ''}`} />
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
                  <img
                    src={heroImage}
                    alt="Student learning online"
                    className="w-full h-auto object-cover aspect-video md:aspect-[4/3]"
                  />
                </div>
                {/* Decor */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle2 className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      {/* <p className="font-bold text-lg">100% Online</p> */}
                      <p className="font-bold text-lg">100% عبر الإنترنت</p>
                      {/* <p className="text-sm text-muted-foreground">Learn from anywhere</p> */}
                      <p className="text-sm text-muted-foreground">تعلم من أي مكان</p>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>

          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10"></div>
        </section>

        {/* About / Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{t('section.about')}</h2>
              <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
            </div>

            {/* <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Laptop, title: 'Live Zoom Classes', desc: 'Interactive real-time learning with expert instructors.' },
                { icon: Globe, title: 'Global Curriculum', desc: 'Standards-aligned content for international success.' },
                { icon: Users, title: 'Small Groups', desc: 'Personalized attention in small, focused class sizes.' }
              ].map((feature, idx) => (
                <div key={idx} className="bg-muted/30 p-8 rounded-2xl hover:bg-secondary/30 transition-colors text-center group">
                  <div className="bg-white w-16 h-16 mx-auto rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div> */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Laptop,
                  title: 'حصص مباشرة عبر زوم',
                  desc: 'جلسات تعليمية مباشرة وتفاعلية بإشراف مدرّبين محترفين.'
                },
                {
                  icon: Globe,
                  title: 'منهج عالمي',
                  desc: 'محتوى تعليمي معتمد وفق المعايير الدولية لضمان تحقيق نجاح عالمي.'
                },
                {
                  icon: Users,
                  title: 'مجموعات صغيرة',
                  desc: 'متابعة شخصية لكل طالب ضمن مجموعات تعليمية محدودة العدد.'
                }
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-muted/30 p-8 rounded-2xl hover:bg-secondary/30 transition-colors text-center group"
                >
                  <div className="bg-white w-16 h-16 mx-auto rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Featured Courses */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2 text-primary">{t('nav.courses')}</h2>
                <div className="h-1 w-20 bg-secondary rounded-full"></div>
              </div>
              <Link href="/courses">
                <Button variant="link" className="text-primary">عرض الكل &rarr;</Button>
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8 ">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}


            </div>
          </div>
        </section>


        {/* Success Stories */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">{t('section.success_stories')}</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {stories.map((story) => (
                <SuccessStoryCard key={story.id} story={story} />
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{t('section.our_team')}</h2>
              <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {members.map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section> */}
        {/* Team Section as Slider */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">{t('section.our_team')}</h2>
              <div className="h-1 w-20 bg-secondary mx-auto rounded-full"></div>
            </div>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
            >
              {members.map((member) => (
                <SwiperSlide key={member.id}>
                  <TeamMemberCard member={member} />
                </SwiperSlide>
              ))}
            </Swiper>


          </div>
        </section>


        {showWhatsApp && (
          <div className="fixed bottom-6 left-6 md:left-auto md:right-6 z-50 animate-fade-in">
            <a
              href="https://wa.me/970567747121"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300 scale-105 hover:scale-110 animate-pulse p-1"
            >
              <img src="pngegg.png" alt="WhatsApp" />
            </a>
          </div>
        )}


      </main>
      <Footer />
    </div>
  );
}
