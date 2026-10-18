export interface Course {
	id: string;
	slug: string;
	title: string;
	price: string;
	lessonsCount: number;
	studentsCount: number;
	imageUrl: string;
	category?: string;
	description?: string;
	url?: string;
}

interface GumroadProduct {
	id: string;
	name: string;
	price: number;
	formatted_price?: string;
	preview_url?: string;
	thumbnail_url?: string;
	description?: string;
	short_url?: string;
	sales_count?: number;
	tags?: string[];
}

export async function fetchGumroadProducts(): Promise<Course[]> {
	const token = process.env.GUMROAD_ACCESS_TOKEN;

	const fallbackCourses: Course[] = [
		{
			id: 'holistic-body-alignment',
			slug: 'holistic-body-alignment',
			title: 'Holistic Body Alignment & Dynamic Posture Mastery',
			price: '₹3,999',
			lessonsCount: 24,
			studentsCount: 3420,
			imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
			category: 'Physical Mastery',
			description: '<p>Remove your pain and disease easily and effectively by practicing by looking at the animated video and practicing it.</p>',
		},
		{
			id: 'pranayama-vital-energy',
			slug: 'pranayama-vital-energy',
			title: 'Pranayama: Cultivating Vital Life Energy & Breathwork',
			price: '₹2,999',
			lessonsCount: 18,
			studentsCount: 2890,
			imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
			category: 'Breath & Mind',
			description: '<p>Master deep rhythmic breathing to balance your nervous system and cultivate vitality.</p>',
		},
		{
			id: 'deep-sleep-restoration',
			slug: 'deep-sleep-restoration',
			title: 'Deep Sleep Restoration & Nervous System Healing',
			price: '₹4,499',
			lessonsCount: 15,
			studentsCount: 4120,
			imageUrl: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?q=80&w=1200&auto=format&fit=crop',
			category: 'Recovery',
			description: '<p>Somatic release techniques for restorative sleep and deep physical relaxation.</p>',
		},
	];

	if (!token) return fallbackCourses;

	try {
		const res = await fetch(`https://api.gumroad.com/v2/products?access_token=${token}`, {
			next: { revalidate: 3600 },
		});

		if (!res.ok) return fallbackCourses;
		const data = await res.json();
		if (!data.success || !Array.isArray(data.products)) return fallbackCourses;

		return data.products.map((prod: GumroadProduct): Course => ({
			id: prod.id,
			slug: prod.id,
			title: prod.name,
			price: prod.formatted_price || `₹${(prod.price / 100).toFixed(0)}`,
			lessonsCount: 12,
			studentsCount: prod.sales_count || 0,
			imageUrl: prod.preview_url || prod.thumbnail_url || 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
			category: prod.tags?.[0] || 'Wellness',
			description: prod.description || '<p>Guided holistic practices for mind, body, and consciousness.</p>',
			url: prod.short_url,
		}));
	} catch {
		return fallbackCourses;
	}
}

export async function fetchGumroadProductById(slug: string): Promise<Course | null> {
	const products = await fetchGumroadProducts();
	const decodedSlug = decodeURIComponent(slug).toLowerCase();

	const match = products.find(
		(p) => p.slug.toLowerCase() === decodedSlug || p.id.toLowerCase() === decodedSlug
	);

	return match || null;
}