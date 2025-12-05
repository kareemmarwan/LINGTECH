import { Course } from '@/lib/slices/coursesSlice';
import { CourseCard } from './CourseCard';

interface CoursesRowSliderProps {
    courses: Course[];
}

export function CoursesRowSlider({ courses }: CoursesRowSliderProps) {
    return (
        <div className="w-full overflow-x-auto scroll-smooth">
            <div className="grid grid-flow-col auto-cols-[300px] sm:auto-cols-[330px] gap-6 pb-4">
                {courses.map((course) => (
                    <div key={course.id}>
                        <CourseCard course={course} />
                    </div>
                ))}
            </div>
        </div>
    );
}
