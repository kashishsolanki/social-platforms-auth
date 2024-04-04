import { tiktokAuthUrlParams, TIKTOK_AUTH_DOMAIN } from '@/utils/constants';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  response: NextApiResponse<string | any>
) {
  // creating a dynamic auth url for tiktok based on credentials from constants
  try {
    const authUrl = `${TIKTOK_AUTH_DOMAIN}?${new URLSearchParams(
      tiktokAuthUrlParams
    )}`;
    response.status(200).json(authUrl);
  } catch (error) {
    response.status(500).json({ error: error });
  }
}
