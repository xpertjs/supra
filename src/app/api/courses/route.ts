import { NextResponse } from 'next/server';
import { fetchGumroadProducts } from '@/app/lib/gumroad';

export async function GET() {
	const courses = await fetchGumroadProducts();
	return NextResponse.json(courses);
}