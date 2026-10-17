'use client';

import { useRef } from 'react';
import CourseCard from './CourseCard';
import { Course } from '../lib/gumroad';

export default function CourseCarousel({ courses }: { courses: Course[] }) {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: 'left' | 'right') => {
		if (scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			const cardWidth = container.firstElementChild
				? (container.firstElementChild as HTMLElement).offsetWidth + 24
				: 380;
			const scrollAmount = direction === 'left' ? -cardWidth * 3 : cardWidth * 3;
			container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
		}
	};

	return (
		<section id="courses" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			{/* Header with Navigation Controls at Top Right */}
			<div className="flex items-end justify-between mb-10">
				<div>
					<span className="text-primary-500 font-bold uppercase tracking-widest text-xs">
						Explore All
					</span>
					<h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface-100 mt-2">
						Course Catalog
					</h2>
				</div>

				{/* Scroll Control Arrows */}
				<div className="flex items-center gap-3">
					<button
						onClick={() => scroll('left')}
						type="button"
						aria-label="Scroll left"
						className="w-11 h-11 rounded-full border border-surface-500/40 bg-surface-100 text-on-surface-100 flex items-center justify-center shadow-sm hover:bg-primary-500 hover:text-surface-100 hover:border-primary-500 transition-all duration-300 cursor-pointer"
					>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						onClick={() => scroll('right')}
						type="button"
						aria-label="Scroll right"
						className="w-11 h-11 rounded-full border border-surface-500/40 bg-surface-100 text-on-surface-100 flex items-center justify-center shadow-sm hover:bg-primary-500 hover:text-surface-100 hover:border-primary-500 transition-all duration-300 cursor-pointer"
					>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</div>
			</div>

			{/* Track showing 3 cards per view on large screens */}
			<div
				ref={scrollContainerRef}
				className="flex gap-6 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
				style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
			>
				{courses.map((course) => (
					<div
						key={course.id}
						className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-start"
					>
						<CourseCard course={course} />
					</div>
				))}
			</div>
		</section>
	);
}