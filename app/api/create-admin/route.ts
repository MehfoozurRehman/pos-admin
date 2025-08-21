import { NextResponse } from 'next/server';

// import { api } from '@/convex/_generated/api';
// import bcrypt from 'bcrypt';
// import { fetchMutation } from 'convex/nextjs';

export async function POST(request: Request) {
  // const { name, email, password } = await request.json();

  // const hashedPassword = await bcrypt.hash(password, 12);

  // const adminId = await fetchMutation(api.auth.createAdmin, { name, email, password: hashedPassword });

  return NextResponse.json({});
}
