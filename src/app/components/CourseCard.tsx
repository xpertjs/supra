'use client';

import Link from 'next/link';

export interface Course {
	id: string;
	slug: string;
	title: string;
	price: string;
	lessonsCount: number;
	studentsCount: number;
	imageUrl: string;
	category?: string;
}

export default function CourseCard({ course }: { course: Course }) {
	return (
		<div className="group relative flex flex-col rounded-2xl bg-surface-100 border border-surface-500/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
			{/* Square image with top rounded corners */}
			<div className="relative w-full aspect-square overflow-hidden rounded-t-2xl bg-surface-500/20">
				<img
					src={course.imageUrl}
					alt={course.title}
					className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
					loading="lazy"
				/>
				{course.category && (
					<span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-surface-100/90 text-primary-500 backdrop-blur-md shadow-sm">
						{course.category}
					</span>
				)}
			</div>

			{/* Content section below image */}
			<div className="p-5 flex flex-col justify-between flex-grow">
				<div>
					<h3 className="text-xl font-bold text-on-surface-100 line-clamp-2 group-hover:text-primary-500 transition-colors">
						{course.title}
					</h3>
				</div>

				<div className="mt-4 pt-4 border-t border-surface-500/30 flex items-center justify-between">
					<div className="space-y-1">
						<div className="text-2xl font-black text-primary-500">
							{course.price}
						</div>
						<div className="flex items-center gap-3 text-xs font-medium text-on-surface-500">
							<span>📚 {course.lessonsCount} Lessons</span>
							<span>•</span>
							<span>👥 {course.studentsCount.toLocaleString()} Students</span>
						</div>
					</div>

					{/* Animated round button with arrow linking to corresponding page */}
					<Link
						href={`/courses/${course.slug}`}
						className="w-12 h-12 rounded-full bg-primary-500 text-surface-100 flex items-center justify-center shadow-md group-hover:bg-primary-900 group-hover:scale-110 transition-all duration-300 transform"
						aria-label={`View ${course.title}`}
					>
						<svg
							className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2.5}
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
}