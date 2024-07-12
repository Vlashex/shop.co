import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const YANDEX_DISK_API_BASE = 'https://cloud-api.yandex.net/v1/disk';
const YANDEX_TOKEN_URL = 'https://oauth.yandex.com/token';

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

const yandexDiskApi = axios.create({
  baseURL: YANDEX_DISK_API_BASE,
});

const getStoredTokens = async () => {
  const token = await prisma.token.findFirst({
    orderBy: { createdAt: 'desc' },
  });
  if (!token) throw new Error('No token found');
  return token;
};

const saveTokens = async (accessToken: string, refreshToken: string, expiresIn: number) => {
  const expiresAt = new Date(Date.now() + expiresIn * 1000);
  await prisma.token.create({
    data: {
      accessToken,
      refreshToken,
      expiresAt,
    },
  });
};

const refreshAccessToken = async (): Promise<string> => {
  const { refreshToken } = await getStoredTokens();

  const response = await axios.post<TokenResponse>(YANDEX_TOKEN_URL, null, {
    params: {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: process.env.YANDEX_CLIENT_ID,
      client_secret: process.env.YANDEX_CLIENT_SECRET,
    },
  });

  const { access_token, refresh_token, expires_in } = response.data;
  await saveTokens(access_token, refresh_token, expires_in);
  return access_token;
};

const getAccessTokenWithRefresh = async (): Promise<string> => {
  const token = await getStoredTokens();
  if (new Date() > token.expiresAt) {
    return await refreshAccessToken();
  }
  return token.accessToken;
};

export const uploadFile = async (path: string, fileContent: Buffer): Promise<string> => {
  const accessToken = await getAccessTokenWithRefresh();

  const uploadLinkResponse = await yandexDiskApi.get('/resources/upload', {
    params: { path },
    headers: {
      Authorization: `OAuth ${accessToken}`,
    },
  });

  const uploadLink = uploadLinkResponse.data.href;

  await axios.put(uploadLink, fileContent, {
    headers: {
      'Content-Type': 'application/octet-stream',
    },
  });

  return `${YANDEX_DISK_API_BASE}/resources?path=${encodeURIComponent(path)}`;
};
