import { Course } from '@/lib/slices/coursesSlice';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Video, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full flex flex-col overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
        <div className={`h-2 w-full ${
          course.category === 'Programming' ? 'bg-blue-500' : 
          course.category === 'Language' ? 'bg-emerald-500' : 'bg-orange-500'
        }`} />
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary" className="font-medium">
              {course.category}
            </Badge>
            <span className="text-lg font-bold text-primary">{course.price}</span>
          </div>
          <CardTitle className="text-xl font-bold line-clamp-2">{course.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow space-y-4">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {course.description}
          </p>
          
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Video className="h-4 w-4 text-primary/70" />
              <span>Live via Zoom</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary/70" />
              <span>{course.schedule}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary/70" />
              <span>{course.level}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-4 border-t bg-gray-50/50">
          <Button className="w-full group" size="lg">
            {t('course.register')}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
