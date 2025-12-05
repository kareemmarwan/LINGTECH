import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-muted/50 border-t pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          <div className="space-y-4">
            <h3 className="text-lg font-bold font-serif text-primary">LINGTECH</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              نعمل على تمكين الطلاب حول العالم من خلال تقديم تعليم عالي الجودة في اللغة الإنجليزية، البرمجة، ومهارات الحاسوب.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">الرئيسية</a></li>
              <li><a href="/courses" className="hover:text-primary transition-colors">الدورات</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">من نحن</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">معلومات التواصل</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                info@eduplatform.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                عن بُعد / عبر زووم
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">تابعنا على</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} EduPlatform. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
