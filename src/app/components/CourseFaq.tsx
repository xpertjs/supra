'use client';

import { useState } from 'react';

const faqs = [
	{
		question: 'How long do I have access to this course?',
		answer: 'You get lifetime access to all lessons, future video updates, and downloadable exercise guides upon enrollment.',
	},
	{
		question: 'Are there any prerequisites required?',
		answer: 'No prior experience is necessary. All movements and routines are designed with step-by-step guidance suitable for beginners to advanced practitioners.',
	},
	{
		question: 'How do I access the animated videos and practice modules?',
		answer: 'After completing your purchase through Gumroad, you will receive instant access to your course dashboard and video stream links.',
	},
	{
		question: 'Can I practice these exercises at my own pace?',
		answer: 'Yes! All modules are self-paced, allowing you to rewatch animated routines and practice whenever it fits your daily schedule.',
	},
];

export default function CourseFaq() {
	const [openIdx, setOpenIdx] = useState<number | null>(0);

	const toggle = (idx: number) => {
		setOpenIdx(openIdx === idx ? null : idx);
	};

	return (
		<div className="space-y-4" >
			{
				faqs.map((faq, idx) => {
					const isOpen = openIdx === idx;
					return (
						<div
							key={idx}
							className="rounded-2xl bg-surface-100 border border-surface-500/30 overflow-hidden transition-colors"
						>
							<button
								onClick={() => toggle(idx)}
								className="w-full text-left p-6 font-bold text-on-surface-100 flex justify-between items-center gap-4 cursor-pointer"
							>
								<span className="text-base sm:text-lg" > {faq.question} </span>
								< span className="text-xl text-primary-500" > {isOpen ? '−' : '+'} </span>
							</button>
							{
								isOpen && (
									<div className="px-6 pb-6 text-on-surface-500 text-sm leading-relaxed border-t border-surface-500/20 pt-4" >
										{faq.answer}
									</div>
								)
							}
						</div>
					);
				})}
		</div>
	);
}