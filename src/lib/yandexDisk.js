import axios from 'axios';

const YANDEX_DISK_API_BASE = 'https://cloud-api.yandex.net/v1/disk';
const ACCESS_TOKEN = process.env.YANDEX_DISK_ACCESS_TOKEN;

const yandexDiskApi = axios.create({
  baseURL: YANDEX_DISK_API_BASE,
  headers: {
    Authorization: `OAuth ${ACCESS_TOKEN}`,
  },
});

export const uploadFile = async (path, fileContent) => {
  const uploadLinkResponse = await yandexDiskApi.get('/resources/upload', {
    params: { path },
  });

  const uploadLink = uploadLinkResponse.data.href;

  await axios.put(uploadLink, fileContent, {
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  });

  return `${YANDEX_DISK_API_BASE}/resources?path=${encodeURIComponent(path)}`;
};
