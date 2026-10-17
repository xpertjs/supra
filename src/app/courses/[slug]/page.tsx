import Link from 'next/link';

export default async function CoursePage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	return (
		<div className="min-h-screen bg-surface-100 text-on-surface-100 flex flex-col items-center justify-center p-8">
			<div className="max-w-md text-center space-y-6">
				<span className="px-3 py-1 rounded-full text-xs font-bold bg-primary-100 text-primary-500">
					Course Preview
				</span>
				<h1 className="text-3xl font-extrabold capitalize">
					{slug.replace(/-/g, ' ')}
				</h1>
				<p className="text-on-surface-500 text-sm">
					Course details and Gumroad checkout integration will render here.
				</p>
				<Link
					href="/"
					className="inline-block px-6 py-2.5 rounded-full bg-primary-500 text-surface-100 font-semibold hover:bg-primary-900 transition-colors"
				>
					← Back to Home
				</Link>
			</div>
		</div>
	);
}