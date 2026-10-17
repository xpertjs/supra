export default function CtaSection() {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
			<div className="relative rounded-3xl bg-gradient-to-r from-primary-900 via-primary-500 to-tertiary-500 p-10 sm:p-16 text-center text-white overflow-hidden shadow-2xl">
				<div className="relative z-10 max-w-2xl mx-auto space-y-6">
					<h2 className="text-3xl sm:text-5xl font-black">
						Ready to Begin Your Wellness Journey?
					</h2>
					<p className="text-primary-100 font-light text-base sm:text-lg">
						Join thousands of students awakening higher consciousness and body vitality today.
					</p>
					<a
						href="#courses"
						className="inline-block px-8 py-4 rounded-full font-bold bg-surface-100 text-primary-900 shadow-lg hover:scale-105 transition-all"
					>
						Browse All Courses
					</a>
				</div>
			</div>
		</section>
	);
}