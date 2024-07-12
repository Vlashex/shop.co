import { uploadFile } from '@/lib/yandexDisk'
import { NextApiRequest, NextApiResponse } from 'next';

export default async function POST(req:NextApiRequest, res:NextApiResponse) {

    const { imagePath, imageContent } = req.body;   
    try {
      const uploadUrl = await uploadFile(imagePath, imageContent);
      res.status(200).json({ uploadUrl });
    } catch (error) {
      res.status(500).json({ error: 'Error uploading file' });
    }
}
