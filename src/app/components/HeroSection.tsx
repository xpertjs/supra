export default function HeroSection() {
	return (
		<section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden">
			<img
				src="/hero2.jpg"
				alt="Wellness Hero Background"
				className="absolute inset-0 w-full h-full object-cover object-center"
			/>
			<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
				<div className="max-w-2xl space-y-6">
					<span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-primary-500/80 backdrop-blur-md">
						Higher Consciousness & Physical Vitality
					</span>
					<h1 className="font-serif text-4xl sm:text-6xl font-medium leading-tight tracking-tight">
						Awaken Your Body. <br />
						Elevate Your <span className="text-primary-100 underline decoration-primary-500">Chetana.</span>
					</h1>
					<p className="font-sans text-lg text-gray-200 leading-relaxed font-light">
						Discover transformational courses combining ancient wisdom and modern movement science. Elevate your energy, align your body, and deepen your mindfulness.
					</p>
					<div className="flex flex-wrap gap-4 pt-4">
						<a
							href="#courses"
							className="px-8 py-3.5 rounded-full font-bold bg-primary-500 hover:bg-primary-900 text-surface-100 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
						>
							Explore Courses
						</a>
						<a
							href="#about"
							className="px-8 py-3.5 rounded-full font-bold bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/20 transition-all"
						>
							Our Philosophy
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}