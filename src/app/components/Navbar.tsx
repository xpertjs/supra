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
					<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary-500 to-tertiary-500 flex items-center justify-center text-surface-100 font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
						SC
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