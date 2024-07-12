import axios from 'axios';
import { Buffer } from 'buffer';

const YANDEX_DISK_API_BASE = 'https://cloud-api.yandex.net/v1/disk';





const getUploadLink = async (path: string, accessToken: string): Promise<string> => {
  const response = await axios.get('https://cloud-api.yandex.net/v1/disk/resources/upload', {
    params: { path },
    headers: {
      Authorization: `OAuth ${accessToken}`,
    },
  });

  return response.data.href;
};

const uploadFileToYandexDisk = async (uploadLink: string, fileContent: Buffer): Promise<void> => {
  await axios.put(uploadLink, fileContent, {
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  });
};



export const uploadImage = async (image: Buffer, name: string) => {
  const accessToken = process.env.YANDEX_DISK_ACCESS_TOKEN as string

  try {
    
    const uploadLink = await getUploadLink(`product-images/${name}`, accessToken);
    await uploadFileToYandexDisk(uploadLink, image);
    const uploadedUrl = `https://cloud-api.yandex.net/v1/disk/resources?path=${encodeURIComponent(`product-images/${name}`)}`;
    
    return uploadedUrl

  } catch (error) {
    console.error(`Error uploading file ${name}:`, error);
  }
};
