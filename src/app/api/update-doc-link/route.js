import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  const body = await request.json();
  const filePath = path.join(process.cwd(), 'public', 'latest-doc.json');

  fs.writeFileSync(filePath, JSON.stringify({ link: body.link }));

  return NextResponse.json({ success: true });
}
