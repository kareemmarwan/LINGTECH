import { SuccessStory } from '@/lib/slices/storiesSlice';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface SuccessStoryCardProps {
  story: SuccessStory;
}

export function SuccessStoryCard({ story }: SuccessStoryCardProps) {
  return (
    <Card className="h-full border-none shadow-sm bg-muted/30 relative overflow-hidden">
      <div className="absolute top-4 right-4 text-primary/10">
        <Quote className="h-24 w-24" />
      </div>
      
      <CardContent className="p-8 flex flex-col h-full relative z-10">
        <p className="text-lg italic text-muted-foreground mb-6 flex-grow">
          "{story.quote}"
        </p>
        
        <div className="flex items-center gap-4 mt-auto">
          <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
            <AvatarImage src={story.image} alt={story.name} />
            <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold text-primary">{story.name}</h4>
            <p className="text-xs text-muted-foreground font-medium">{story.course}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
