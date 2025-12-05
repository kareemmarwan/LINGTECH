import { SuccessStory } from '@/lib/slices/storiesSlice';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

interface SuccessStoryCardProps {
  story: SuccessStory;
}

export function SuccessStoryCard({ story }: SuccessStoryCardProps) {
  return (
    <Card className="h-full border-none shadow-lg bg-white relative overflow-hidden rounded-xl">
      {/* أيقونة الاقتباس */}
      <div className="absolute top-4 right-4 text-primary/10">
        <Quote className="h-20 w-20" />
      </div>

      <CardContent className="p-8 flex flex-col h-full relative z-10">
        {/* الاقتباس */}
        <p className="text-lg  mb-6 flex-grow text-gray-800 leading-relaxed">
          "{story.quote}"
        </p>

        {/* بيانات الطالب */}
        <div className="flex items-center gap-4 mt-auto">
          <Avatar className="h-14 w-14 border-2 border-white shadow-md">
            <AvatarImage src={story.image} alt={story.name} />
            <AvatarFallback className="text-white bg-primary">
              {story.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold text-gray-900">{story.name}</h4>
            <p className="text-sm font-medium text-gray-600">{story.course}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}


// import { SuccessStory } from '@/lib/slices/storiesSlice';
// import { Card, CardContent } from '@/components/ui/card';
// import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
// import { Quote } from 'lucide-react';

// interface SuccessStoryCardProps {
//   story: SuccessStory;
// }

// export function SuccessStoryCard({ story }: SuccessStoryCardProps) {
//   return (
//     <Card className="h-full border-none shadow-sm bg-muted/30 relative overflow-hidden">
//       <div className="absolute top-4 right-4 text-primary/10">
//         <Quote className="h-24 w-24" />
//       </div>

//       <CardContent className="p-8 flex flex-col h-full relative z-10">
//         <p className="text-lg italic  mb-6 flex-grow">
//           "{story.quote}"
//         </p>

//         <div className="flex items-center gap-4 mt-auto">
//           <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
//             <AvatarImage src={story.image} alt={story.name} />
//             <AvatarFallback>{story.name.charAt(0)}</AvatarFallback>
//           </Avatar>
//           <div>
//             <h4 className="font-bold text-primary">{story.name}</h4>
//             <p className="text-xs  font-medium">{story.course}</p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }
