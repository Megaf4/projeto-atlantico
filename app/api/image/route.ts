import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    // Obter o caminho da imagem do query parameter
    const searchParams = request.nextUrl.searchParams;
    const imagePath = searchParams.get('path');
    
    if (!imagePath) {
      return NextResponse.json({ error: 'Path parameter is required' }, { status: 400 });
    }
    
    // Construir o caminho completo
    const fullPath = path.join(process.cwd(), 'public', imagePath.startsWith('/') ? imagePath.substring(1) : imagePath);
    
    // Verificar se o arquivo existe
    if (!fs.existsSync(fullPath)) {
      return NextResponse.json({ error: 'Image not found', path: fullPath }, { status: 404 });
    }
    
    // Ler o arquivo
    const imageBuffer = fs.readFileSync(fullPath);
    
    // Determinar o tipo MIME baseado na extensão
    const ext = path.extname(fullPath).toLowerCase();
    const mimeTypes: Record<string, string> = {
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.png': 'image/png',
      '.gif': 'image/gif',
      '.webp': 'image/webp',
      '.bmp': 'image/bmp',
      '.svg': 'image/svg+xml',
    };
    
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    
    // Retornar a imagem com os headers corretos
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
    
  } catch (error) {
    console.error('Erro ao servir imagem:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
