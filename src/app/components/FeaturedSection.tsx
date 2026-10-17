import CourseCard from './CourseCard';
import { Course } from '../lib/gumroad';

export default function FeaturedSection({ courses, loading }: { courses: Course[]; loading: boolean }) {
	return (
		<section id="featured" className="py-20 bg-surface-500/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<span className="text-primary-500 font-bold uppercase tracking-widest text-xs">
						Handpicked Programs
					</span>
					<h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface-100 mt-2">
						Featured Wellness Courses
					</h2>
				</div>

				{loading ? (
					<div className="text-center py-12 text-on-surface-500 font-medium">
						Loading courses...
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{courses.slice(0, 3).map((course) => (
							<CourseCard key={course.id} course={course} />
						))}
					</div>
				)}
			</div>
		</section>
	);
}