import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "nav.home": "Home",
      "nav.courses": "Courses",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.login": "Login",
      "nav.register": "Register",
      "nav.logout": "Logout",
      "hero.title": "Unlock Your Potential",
      "hero.subtitle": "Master English, Programming, and Computer Skills from the comfort of your home via Zoom.",
      "hero.cta": "Explore Courses",
      "section.success_stories": "Success Stories",
      "section.our_team": "Our Expert Instructors",
      "section.about": "Why Choose Us?",
      "footer.rights": "All rights reserved.",
      "course.schedule": "Schedule",
      "course.register": "Register Now",
      "contact.title": "Get in Touch",
      "contact.send": "Send Message",
      "auth.welcome_back": "Welcome Back",
      "auth.create_account": "Create Account",
      "auth.name": "Full Name",
      "auth.email": "Email Address",
      "auth.password": "Password",
      "auth.phone": "Phone Number",
      "auth.submit": "Submit",
      "auth.switch_to_login": "Already have an account? Login",
      "auth.switch_to_register": "Don't have an account? Register",
    }
  },
  ar: {
    translation: {
      "nav.home": "الرئيسية",
      "nav.courses": "الدورات",
      "nav.about": "من نحن",
      "nav.contact": "اتصل بنا",
      "nav.login": "دخول",
      "nav.register": "تسجيل",
      "nav.logout": "خروج",
      "hero.title": "ابدأ رحلتك التعليمية !",
      "hero.subtitle": "ابدأ رحلتك نحو سوق العمل مع أكاديمية Lingtech.\nدورات عملية أونلاين عبر Zoom في البرمجة، التصميم والتسويق، بإشراف مدربين محترفين وخبرة حقيقية.",


      "hero.cta": "تصفح الدورات",
      "section.success_stories": "قصص نجاح",
      "section.our_team": "فريق المدربين",
      "section.about": "لماذا تختارنا؟",
      "footer.rights": "جميع الحقوق محفوظة.",
      "course.schedule": "الموعد",
      "course.register": "سجل الآن",
      "contact.title": "تواصل معنا",
      "contact.send": "أرسل رسالة",
      "auth.welcome_back": "مرحباً بعودتك",
      "auth.create_account": "إنشاء حساب",
      "auth.name": "الاسم الكامل",
      "auth.email": "البريد الإلكتروني",
      "auth.password": "كلمة المرور",
      "auth.phone": "رقم الهاتف",
      "auth.submit": "إرسال",
      "auth.switch_to_login": "لديك حساب بالفعل؟ تسجيل الدخول",
      "auth.switch_to_register": "ليس لديك حساب؟ سجل الآن",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ar",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
