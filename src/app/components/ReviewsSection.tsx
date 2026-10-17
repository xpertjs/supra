const reviews = [
	{
		quote: 'The breathwork and body alignment course completely changed my chronic neck pain and daily energy levels.',
		author: 'Anya R.',
		role: 'Yoga Practitioner',
	},
	{
		quote: 'Supra Chetana provided me with clear, actionable steps to integrate holistic movement into my busy desk routine.',
		author: 'Devon M.',
		role: 'Software Engineer',
	},
	{
		quote: 'Mindful sleep restoration helped me sleep uninterrupted for the first time in 5 years.',
		author: 'Priya K.',
		role: 'Wellness Enthusiast',
	},
];

export default function ReviewsSection() {
	return (
		<section id="reviews" className="py-20 bg-primary-100/30 border-y border-surface-500/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto mb-16">
					<span className="text-primary-500 font-bold uppercase tracking-widest text-xs">
						Community Feedback
					</span>
					<h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface-100 mt-2">
						Transformation Stories
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{reviews.map((review, i) => (
						<div key={i} className="p-8 rounded-2xl bg-surface-100 border border-surface-500/30 shadow-sm space-y-4">
							<div className="text-primary-500 text-lg">★★★★★</div>
							<p className="text-on-surface-500 italic text-sm leading-relaxed">
								"{review.quote}"
							</p>
							<div>
								<h5 className="font-bold text-on-surface-100 text-sm">{review.author}</h5>
								<span className="text-xs text-on-surface-900">{review.role}</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}