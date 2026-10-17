export default function ContactSection() {
	return (
		<section id="contact" className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="text-center mb-12">
				<span className="text-primary-500 font-bold uppercase tracking-widest text-xs">
					Get In Touch
				</span>
				<h2 className="text-3xl sm:text-4xl font-extrabold text-on-surface-100 mt-2">
					Have Questions? Contact Us
				</h2>
			</div>

			<form onSubmit={(e) => e.preventDefault()} className="space-y-6 bg-surface-100 p-8 rounded-3xl border border-surface-500/30 shadow-sm">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<div>
						<label className="block text-xs font-bold text-on-surface-500 uppercase mb-2">Name</label>
						<input
							type="text"
							placeholder="Your Name"
							className="w-full px-4 py-3 rounded-xl bg-surface-500/10 border border-surface-500/30 text-on-surface-100 focus:outline-none focus:border-primary-500"
						/>
					</div>
					<div>
						<label className="block text-xs font-bold text-on-surface-500 uppercase mb-2">Email</label>
						<input
							type="email"
							placeholder="you@example.com"
							className="w-full px-4 py-3 rounded-xl bg-surface-500/10 border border-surface-500/30 text-on-surface-100 focus:outline-none focus:border-primary-500"
						/>
					</div>
				</div>
				<div>
					<label className="block text-xs font-bold text-on-surface-500 uppercase mb-2">Message</label>
					<textarea
						rows={4}
						placeholder="How can we assist your wellness journey?"
						className="w-full px-4 py-3 rounded-xl bg-surface-500/10 border border-surface-500/30 text-on-surface-100 focus:outline-none focus:border-primary-500"
					/>
				</div>
				<button
					type="submit"
					className="w-full py-3.5 rounded-xl font-bold bg-primary-500 text-surface-100 hover:bg-primary-900 transition-colors shadow-md cursor-pointer"
				>
					Send Message
				</button>
			</form>
		</section>
	);
}