export default function AboutSection() {
	return (
		<section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
				<div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3">
					<img
						src="/about.jpg"
						alt="About Supra Chetana"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-primary-900/10" />
				</div>

				<div className="space-y-6">
					<span className="text-primary-500 font-bold uppercase tracking-widest text-xs">
						About Supra Chetana
					</span>
					<h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface-100 leading-tight">
						Nurturing the Synergy Between Mindful Awareness & Physical Strength
					</h2>
					<p className="text-on-surface-500 leading-relaxed">
						At <strong className="text-on-surface-100">Supra Chetana</strong>, we believe true wellness is not just the absence of illness, but the full realization of high vitality and inner clarity. Our self-paced guided courses empower individuals to reconnect with their innate intelligence.
					</p>
					<div className="grid grid-cols-2 gap-4 pt-4">
						<div className="p-4 rounded-xl bg-surface-500/20 border border-surface-500/30">
							<h4 className="font-bold text-on-surface-100 mb-1">Holistic Practices</h4>
							<p className="text-xs text-on-surface-500">Combining breathwork, biomechanics, and nutrition.</p>
						</div>
						<div className="p-4 rounded-xl bg-surface-500/20 border border-surface-500/30">
							<h4 className="font-bold text-on-surface-100 mb-1">Expert Led</h4>
							<p className="text-xs text-on-surface-500">Designed by certified somatic movement coaches.</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}