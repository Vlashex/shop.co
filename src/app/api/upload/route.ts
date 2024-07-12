import { NextApiRequest, NextApiResponse } from 'next';
import { uploadFile } from '@/lib/yandexDisk';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { imagePath, imageContent } = req.body;

    try {
      const uploadUrl = await uploadFile(imagePath, Buffer.from(imageContent, 'base64'));
      res.status(200).json({ uploadUrl });
    } catch (error) {
      res.status(500).json({ error: 'Error uploading file' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
