export interface Course {
	id: string;
	slug: string;
	title: string;
	price: string;
	lessonsCount: number;
	studentsCount: number;
	imageUrl: string;
	category?: string;
	url?: string;
}

interface GumroadProduct {
	id: string;
	name: string;
	price: number; // in cents
	formatted_price?: string;
	preview_url?: string;
	thumbnail_url?: string;
	short_url?: string;
	sales_count?: number;
	published?: boolean;
	tags?: string[];
	custom_fields?: Array<{ name: string; value: string }>;
}

export async function fetchGumroadProducts(): Promise<Course[]> {
	const token = process.env.GUMROAD_ACCESS_TOKEN;

	// Fallback data if API key is missing or invalid
	const fallbackCourses: Course[] = [
		{
			id: '1',
			slug: 'holistic-body-alignment',
			title: 'Holistics Body Alignment & Dynamic Posture Mastery',
			price: '$49',
			lessonsCount: 24,
			studentsCount: 3420,
			imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
			category: 'Physical Mastery',
		},
		{
			id: '2',
			slug: 'pranayama-vital-energy',
			title: 'Pranayama: Cultivating Vital Life Energy & Breathwork',
			price: '$39',
			lessonsCount: 18,
			studentsCount: 2890,
			imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
			category: 'Breath & Mind',
		},
		{
			id: '3',
			slug: 'deep-sleep-restoration',
			title: 'Deep Sleep Restoration & Nervous System Healing',
			price: '$59',
			lessonsCount: 15,
			studentsCount: 4120,
			imageUrl: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?q=80&w=800&auto=format&fit=crop',
			category: 'Recovery',
		},
		{
			id: '4',
			slug: 'mindful-nutrition-vitality',
			title: 'Mindful Cellular Nutrition & Energetic Vitality',
			price: '$69',
			lessonsCount: 32,
			studentsCount: 1980,
			imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop',
			category: 'Nutrition',
		},
	];

	if (!token) {
		console.warn('GUMROAD_ACCESS_TOKEN is missing in environment variables. Returning fallback courses.');
		return fallbackCourses;
	}

	try {
		const res = await fetch(`https://api.gumroad.com/v2/products?access_token=${token}`, {
			next: { revalidate: 3600 }, // Cache response for 1 hour
		});

		if (!res.ok) {
			console.error(`Gumroad API Error: ${res.statusText}`);
			return fallbackCourses;
		}

		const data = await res.json();

		if (!data.success || !Array.isArray(data.products)) {
			return fallbackCourses;
		}

		return data.products.map((prod: GumroadProduct): Course => {
			// Calculate formatted price from Gumroad cents if formatted_price isn't present
			const formattedPrice = prod.formatted_price
				? prod.formatted_price
				: `$${(prod.price / 100).toFixed(0)}`;

			return {
				id: prod.id,
				slug: prod.id, // using Gumroad unique ID as route slug
				title: prod.name,
				price: formattedPrice,
				lessonsCount: 12, // Default or map from custom_fields if configured in Gumroad
				studentsCount: prod.sales_count || 0,
				imageUrl:
					prod.preview_url ||
					prod.thumbnail_url ||
					'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop',
				category: prod.tags?.[0] || 'Wellness',
				url: prod.short_url,
			};
		});
	} catch (error) {
		console.error('Failed to fetch from Gumroad API:', error);
		return fallbackCourses;
	}
}