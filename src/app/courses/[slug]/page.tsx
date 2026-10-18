import { Suspense } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import CourseFaq from '@/app/components/CourseFaq';
import { fetchGumroadProducts, fetchGumroadProductById } from '@/app/lib/gumroad';

export async function generateStaticParams() {
	const products = await fetchGumroadProducts();
	return products.map((product) => ({
		slug: product.slug,
	}));
}

async function CourseDetailsContent({ paramsPromise }: { paramsPromise: Promise<{ slug: string }> }) {
	const { slug } = await paramsPromise;
	const course = await fetchGumroadProductById(slug);

	if (!course) {
		return (
			<div className="min-h-screen bg-surface-100 text-on-surface-100 flex flex-col items-center justify-center p-8">
				<h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
				<p className="text-on-surface-500 mb-6 text-sm">
					No course matched the identifier: <code className="text-primary-500">{slug}</code>
				</p>
				<Link href="/" className="px-6 py-2.5 rounded-full bg-primary-500 text-surface-100 font-semibold">
					← Back to Home
				</Link>
			</div>
		);
	}

	return (
		// <div className="min-h-screen flex flex-col bg-surface-100 text-on-surface-100">
		// 	<Navbar />

		// 	<main className="flex-grow">
		// 		{/* HERO SECTION WITH BACKGROUND IMAGE FROM GUMROAD */}
		// 		<section className="relative w-full h-[60vh] sm:h-[70vh] flex items-end overflow-hidden">
		// 			<img
		// 				src={course.imageUrl}
		// 				alt={course.title}
		// 				className="absolute inset-0 w-full h-full object-cover object-center"
		// 			/>
		// 			<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

		// 			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full text-white">
		// 				<div className="space-y-4 max-w-3xl">
		// 					<span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-500/80 backdrop-blur-md">
		// 						{course.category || 'Wellness Course'}
		// 					</span>
		// 					<h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
		// 						{course.title}
		// 					</h1>
		// 					<div className="flex flex-wrap items-center gap-6 text-sm text-gray-200 font-medium">
		// 						<span className="text-2xl font-black text-primary-100">{course.price}</span>
		// 						<span>📚 {course.lessonsCount} Video Lessons</span>
		// 						<span>👥 {course.studentsCount.toLocaleString()} Enrolled</span>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</section>

		// 		{/* DETAILS SECTION */}
		// 		<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
		// 			<div className="lg:col-span-2 space-y-16">
		// 				{/* ABOUT */}
		// 				<div className="space-y-4">
		// 					<span className="text-primary-500 font-bold uppercase tracking-widest text-xs">
		// 						Overview
		// 					</span>
		// 					<h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface-100">
		// 						About the Course
		// 					</h2>
		// 					<div
		// 						className="prose text-on-surface-500 text-base leading-relaxed bg-surface-500/10 p-6 sm:p-8 rounded-2xl border border-surface-500/30"
		// 						dangerouslySetInnerHTML={{ __html: course.description || '' }}
		// 					/>
		// 				</div>

		// 				{/* CURRICULUM */}
		// 				<div className="space-y-6">
		// 					<span className="text-primary-500 font-bold uppercase tracking-widest text-xs">
		// 						Curriculum
		// 					</span>
		// 					<h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface-100">
		// 						Course Content & Modules
		// 					</h2>

		// 					<div className="space-y-4">
		// 						{[
		// 							{
		// 								title: 'Module 1: Foundations & Body Alignment',
		// 								lessons: '4 Lessons • 45 mins',
		// 								desc: 'Key somatic practices to release chronic tension and realign posture.',
		// 							},
		// 							{
		// 								title: 'Module 2: Guided Movement & Practice Routines',
		// 								lessons: '5 Lessons • 60 mins',
		// 								desc: 'Step-by-step video instructions designed for daily vitality.',
		// 							},
		// 						].map((mod, i) => (
		// 							<div
		// 								key={i}
		// 								className="p-6 rounded-2xl bg-surface-100 border border-surface-500/30 space-y-2 shadow-sm"
		// 							>
		// 								<div className="flex justify-between items-center">
		// 									<h4 className="font-bold text-on-surface-100 text-base sm:text-lg">{mod.title}</h4>
		// 									<span className="text-xs font-semibold text-primary-500 bg-primary-100/50 px-3 py-1 rounded-full">{mod.lessons}</span>
		// 								</div>
		// 								<p className="text-sm text-on-surface-500">{mod.desc}</p>
		// 							</div>
		// 						))}
		// 					</div>
		// 				</div>

		// 				{/* FAQ */}
		// 				<div className="space-y-6">
		// 					<span className="text-primary-500 font-bold uppercase tracking-widest text-xs">
		// 						Help & Information
		// 					</span>
		// 					<h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface-100">
		// 						Frequently Asked Questions
		// 					</h2>
		// 					<CourseFaq />
		// 				</div>
		// 			</div>

		// 			{/* SIDEBAR */}
		// 			<div className="lg:col-span-1">
		// 				<div className="sticky top-28 p-8 rounded-3xl bg-surface-100 border border-surface-500/40 shadow-xl space-y-6">
		// 					<div className="space-y-2">
		// 						<span className="text-xs font-bold text-on-surface-500 uppercase tracking-wider">Course Fee</span>
		// 						<div className="text-4xl font-black text-primary-500">{course.price}</div>
		// 					</div>

		// 					<a
		// 						href={course.url || '#'}
		// 						target="_blank"
		// 						rel="noopener noreferrer"
		// 						className="block w-full py-4 text-center rounded-xl font-bold bg-primary-500 text-surface-100 hover:bg-primary-900 transition-all shadow-md"
		// 					>
		// 						Enroll Now on Gumroad
		// 					</a>

		// 					<div className="space-y-3 pt-4 border-t border-surface-500/30 text-xs text-on-surface-500">
		// 						<div>✅ Lifetime Access</div>
		// 						<div>✅ Self-Paced Guided Modules</div>
		// 						<div>✅ Mobile & Desktop Friendly</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</section>
		// 	</main>

		// 	<footer className="bg-surface-100 border-t border-surface-500/30 py-10 text-center text-sm text-on-surface-500">
		// 		<p>© Supra Chetana. All rights reserved.</p>
		// 	</footer>
		// </div>
		<div className="min-h-screen bg-surface-100 flex items-center justify-center text-on-surface-500 font-medium">
			Loading course details...
		</div>
	);
}

export default function SingleCoursePage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	return (
		<Suspense fallback={
			<div className="min-h-screen bg-surface-100 flex items-center justify-center text-on-surface-500 font-medium">
				Loading course details...
			</div>
		}>
			<CourseDetailsContent paramsPromise={params} />
		</Suspense>
	);
}