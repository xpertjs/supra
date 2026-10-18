'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light');
	const [mounted, setMounted] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		setMounted(true);
		const existingTheme = document.body.getAttribute('data-theme') as 'light' | 'dark';
		if (existingTheme) {
			setTheme(existingTheme);
		} else {
			document.body.setAttribute('data-theme', 'light');
		}

		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleTheme = () => {
		const nextTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(nextTheme);
		document.body.setAttribute('data-theme', nextTheme);
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
				? 'backdrop-blur-md bg-surface-100/80 border-b border-surface-500/30 shadow-sm'
				: 'bg-transparent border-b border-transparent'
				}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

				{/* Left Side Logo */}
				<Link href="/" className="flex items-center gap-3 group">
					<div>
						<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.97 76.64" fill="currentColor" className="w-10 h-10 text-primary-500 transition-colors group-hover:text-primary-900">

							<g id="OBJECTS">
								<g>
									<path className="cls-1" d="m37.48,33.34c-4.49,0-8.14-3.65-8.14-8.14s3.65-8.14,8.14-8.14,8.14,3.65,8.14,8.14-3.65,8.14-8.14,8.14Zm0-14.57c-3.54,0-6.42,2.88-6.42,6.42s2.88,6.42,6.42,6.42,6.42-2.88,6.42-6.42-2.88-6.42-6.42-6.42Z" />
									<path className="cls-1" d="m14.51,76.64c-1.93,0-3.73-.51-5.28-1.51-2.46-1.6-3.98-4.31-4.17-7.45-.62-10.42,12.98-12.82,24.99-14.94,1.23-.22,2.45-.43,3.64-.65-2.98-.87-5.41-1.96-6.86-3.5-1.59-1.69-2.17-3.46-1.71-5.26,1.34-5.29,11.53-8.73,11.96-8.87l.41-.14.41.14c.43.14,10.62,3.57,11.96,8.87.46,1.8-.12,3.57-1.71,5.26-1.45,1.54-3.88,2.63-6.87,3.5,1.18.22,2.4.44,3.63.65,11.98,2.12,25.57,4.52,25.01,14.94-.15,2.78-1.83,5.33-4.62,6.98-4.14,2.45-9.71,2.53-14.54.21-3.05-1.47-5.31-2.72-7.31-3.82-3.79-2.09-6.33-3.49-10.92-4.57-.91.74-1.76,1.48-2.59,2.21-3.12,2.73-6.08,5.3-10.83,7.08-1.57.59-3.12.88-4.59.88Zm22.97-23.61c-2.25.49-4.67.92-7.14,1.35-11.87,2.1-24.14,4.27-23.61,13.2.16,2.6,1.4,4.84,3.41,6.15,2.27,1.47,5.24,1.64,8.38.47,4.47-1.68,7.31-4.15,10.32-6.78,4.82-4.2,10.22-8.92,23.46-11.59-2.49-.53-5.1-1-7.69-1.45-2.46-.44-4.88-.86-7.13-1.35Zm-3.3,12.14c4.05,1.1,6.64,2.52,10.07,4.41,1.98,1.09,4.22,2.33,7.23,3.78,4.33,2.08,9.3,2.03,12.96-.14,2.33-1.38,3.68-3.38,3.8-5.63.32-5.9-4.91-8.85-11.9-10.77-11.54,1.78-17.68,5-22.16,8.36Zm3.31-29.09c-2.79.95-9.84,4.05-10.75,7.66-.31,1.23.12,2.44,1.31,3.71,1.7,1.8,5.2,2.94,9.44,3.88,4.25-.94,7.75-2.08,9.45-3.88,1.19-1.26,1.62-2.48,1.31-3.71-.91-3.61-7.96-6.71-10.75-7.65Z" />
									<g>
										<path className="cls-1" d="m8.13,57.97c-4.07-5.81-6.46-12.87-6.46-20.48C1.67,17.74,17.74,1.67,37.48,1.67s35.81,16.07,35.81,35.81c0,7.62-2.4,14.68-6.47,20.5.46.34.89.69,1.28,1.07,4.31-6.1,6.85-13.54,6.85-21.57C74.97,16.81,58.15,0,37.48,0S0,16.81,0,37.48c0,8.02,2.54,15.45,6.85,21.55.4-.38.83-.73,1.29-1.07Z" />
										<path className="cls-1" d="m37.48,8.14c-16.18,0-29.34,13.16-29.34,29.34,0,6.56,2.16,12.62,5.81,17.51.54-.2,1.1-.39,1.67-.57-3.64-4.69-5.81-10.56-5.81-16.94,0-15.26,12.42-27.68,27.68-27.68s27.68,12.42,27.68,27.68c0,6.38-2.18,12.26-5.82,16.95.57.18,1.13.37,1.67.57,3.65-4.89,5.82-10.96,5.82-17.52,0-16.18-13.16-29.34-29.34-29.34Z" />
									</g>
								</g>
							</g>
						</svg>
					</div>

					<span className={`text-2xl font-black tracking-tight transition-colors ${scrolled ? 'text-on-surface-100' : 'text-white'
						}`}>
						Supra<span className="text-primary-500">Chetana</span>
					</span>
				</Link>

				{/* Right Side Links & Dashboard Button */}
				<div className="flex items-center gap-6">
					<nav className={`hidden md:flex items-center gap-6 text-sm font-semibold transition-colors ${scrolled ? 'text-on-surface-500' : 'text-gray-200'
						}`}>
						<Link href="#about" className="hover:text-primary-500 transition-colors">
							About Us
						</Link>
						<Link href="#featured" className="hover:text-primary-500 transition-colors">
							Featured
						</Link>
						<Link href="#courses" className="hover:text-primary-500 transition-colors">
							All Courses
						</Link>
						<Link href="#reviews" className="hover:text-primary-500 transition-colors">
							Reviews
						</Link>
						<Link href="#contact" className="hover:text-primary-500 transition-colors">
							Contact
						</Link>
					</nav>

					{/* Light / Dark Mode Switcher */}
					<button
						onClick={toggleTheme}
						type="button"
						className={`p-2 rounded-full border transition-colors cursor-pointer ${scrolled
							? 'border-surface-500/50 bg-surface-100 text-on-surface-100 hover:border-primary-500'
							: 'border-white/30 bg-white/10 text-white backdrop-blur-md hover:border-white'
							}`}
						aria-label="Toggle dark mode"
					>
						{mounted ? (theme === 'light' ? '🌙' : '☀️') : '🌙'}
					</button>

					{/* Dashboard Button */}
					<Link
						href="/dashboard"
						className="px-5 py-2.5 rounded-full font-semibold text-sm bg-primary-500 text-surface-100 hover:bg-primary-900 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
					>
						Dashboard
					</Link>
				</div>
			</div>
		</header>
	);
}