import { useTranslation } from 'react-i18next';
import { useLocation } from 'wouter';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/lib/slices/authSlice';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GraduationCap, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'wouter';

export default function Auth() {
  const { t, i18n } = useTranslation();
  const [location, setLocation] = useLocation();
  const dispatch = useDispatch();
  const { toast } = useToast();
  
  // Check URL params for mode
  const searchParams = new URLSearchParams(window.location.search);
  const defaultTab = searchParams.get('mode') === 'register' ? 'register' : 'login';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    dispatch(login({ name: 'Demo Student', email: 'demo@student.com' }));
    toast({
      title: "Welcome back!",
      description: "You have successfully logged in.",
    });
    setLocation('/');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock register
    dispatch(login({ name: 'New Student', email: 'new@student.com' }));
    toast({
      title: "Account Created!",
      description: "Welcome to EduPlatform. Your journey starts now.",
    });
    setLocation('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-md space-y-8">
        <div className="text-center space-y-2">
          <Link href="/">
            <div className="inline-flex items-center justify-center bg-primary p-3 rounded-xl mb-4 cursor-pointer hover:bg-primary/90 transition-colors">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
          </Link>
          <h1 className="text-3xl font-bold text-primary font-serif">EduPlatform</h1>
          <p className="text-muted-foreground">Your gateway to global learning</p>
        </div>

        <Card className="border-none shadow-lg">
          <Tabs defaultValue={defaultTab} className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">{t('nav.login')}</TabsTrigger>
                <TabsTrigger value="register">{t('nav.register')}</TabsTrigger>
              </TabsList>
            </CardHeader>
            
            <CardContent>
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('auth.email')}</Label>
                    <Input id="email" type="email" placeholder="student@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">{t('auth.password')}</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full mt-4">
                    {t('nav.login')}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('auth.name')}</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-email">{t('auth.email')}</Label>
                    <Input id="reg-email" type="email" placeholder="student@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('auth.phone')}</Label>
                    <Input id="phone" type="tel" placeholder="+123456789" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-password">{t('auth.password')}</Label>
                    <Input id="reg-password" type="password" required />
                  </div>
                  <Button type="submit" className="w-full mt-4">
                    {t('auth.create_account')}
                  </Button>
                </form>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>

        <div className="text-center">
          <Link href="/">
            <Button variant="link" className="text-muted-foreground gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
