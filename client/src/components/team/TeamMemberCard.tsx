import { TeamMember } from '@/lib/slices/teamSlice';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow bg-white text-center h-full">
      <CardContent className="pt-8 pb-6 px-6">
        <div className="mb-6 relative mx-auto w-32 h-32">
          <div className="absolute inset-0 bg-primary/10 rounded-full transform rotate-6 scale-105"></div>
          <Avatar className="w-32 h-32 border-4 border-white shadow-lg relative z-10">
            <AvatarImage src={member.image} alt={member.name} className="object-cover" />
            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>
        
        <h3 className="text-xl font-bold mb-1 font-serif text-primary">{member.name}</h3>
        <p className="text-sm font-medium text-accent-foreground uppercase tracking-wider text-xs mb-4">
          {member.role}
        </p>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {member.bio}
        </p>
      </CardContent>
    </Card>
  );
}
