import { Link, useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store';
import { logout } from '@/lib/slices/authSlice';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '../LanguageToggle';
import { Menu, X, BookOpen, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/courses', label: t('nav.courses') },
    { href: '/about', label: t('nav.about') },
    { href: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className='flex items-center gap-11 cursor-pointer'>
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-primary">
                LINGTECH
              </span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`text-md font-medium transition-colors hover:text-primary cursor-pointer ${location === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
                  }`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>


        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 ">
          {/* <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${location === link.href ? 'text-primary font-semibold' : 'text-muted-foreground'
                  }`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div> */}

          <div className="flex items-center gap-4 pl-4 border-l">
            <LanguageToggle />

            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Hi, {user?.name}
                </span>
                <Button variant="outline" size="sm" onClick={() => dispatch(logout())}>
                  {t('nav.logout')}
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/auth">
                  <Button variant="ghost" size="sm">{t('nav.login')}</Button>
                </Link>
                <Link href="/auth?mode=register">
                  <Button size="sm">{t('nav.register')}</Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="block py-2 text-base font-medium text-muted-foreground hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <div className="pt-4 border-t flex flex-col gap-2">
                {isAuthenticated ? (
                  <Button onClick={() => { dispatch(logout()); setIsMobileMenuOpen(false); }}>
                    {t('nav.logout')}
                  </Button>
                ) : (
                  <>
                    <Link href="/auth">
                      <Button variant="ghost" className="w-full justify-start" onClick={() => setIsMobileMenuOpen(false)}>
                        {t('nav.login')}
                      </Button>
                    </Link>
                    <Link href="/auth?mode=register">
                      <Button className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                        {t('nav.register')}
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
