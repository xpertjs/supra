'use client';

const stats = [
	{ label: 'Active Learners', value: '15,000+' },
	{ label: 'Wellness Courses', value: '45+' },
	{ label: 'Expert Mentors', value: '28' },
	{ label: 'Satisfaction Rate', value: '99.4%' },
];

export default function Stats() {
	return (
		<section className="py-16 bg-primary-100/50 border-y border-surface-500/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
					{stats.map((stat, idx) => (
						<div key={idx} className="p-6 rounded-2xl bg-surface-100/60 backdrop-blur-sm border border-surface-500/20 shadow-sm hover:scale-105 transition-transform duration-300">
							<div className="text-3xl sm:text-4xl font-extrabold text-primary-500 mb-2">
								{stat.value}
							</div>
							<div className="text-sm font-semibold text-on-surface-500">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}