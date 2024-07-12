import { uploadImage } from '@/lib/yandexDisk';

export async function POST(request: Request) {

  try {
    const req = await request.json()

    const imageBuffer = req.fileContent.data
    const name = req.name

    const uploadUrl = await uploadImage(imageBuffer, name);
    
    return new Response(JSON.stringify({ name: 'Image uploaded' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 201 // Created
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create sneakers card' }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500 // Internal Server Error
      }
    );
  }
}
