import { useTranslation } from 'react-i18next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-background" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <main className="flex-grow py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-primary">{t('contact.title')}</h1>
            <p className="text-muted-foreground">We'd love to hear from you. Send us a message or reach out via WhatsApp/Email.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-6">
              <Card className="border-none shadow-md h-full">
                <CardContent className="p-8 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-sm text-muted-foreground">info@eduplatform.com</p>
                      <p className="text-sm text-muted-foreground">support@eduplatform.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">WhatsApp / Phone</h3>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-sm text-muted-foreground text-green-600 font-medium">Available 9am - 5pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Location</h3>
                      <p className="text-sm text-muted-foreground">
                        Remote Platform<br/>
                        Serving Students Worldwide
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <Card className="border-none shadow-md">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input {...register("name")} placeholder="Your Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input {...register("email")} type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input {...register("subject")} placeholder="How can we help?" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Message</label>
                      <Textarea {...register("message")} placeholder="Type your message here..." className="min-h-[150px]" />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full md:w-auto">
                      <Send className="mr-2 h-4 w-4" />
                      {t('contact.send')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
