import { instaAuthUrlParams } from '@/utils/constants';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  response: NextApiResponse<string | any>
) {
  // creating a dynamic auth url for instagram based on credentials from constants
  try {
    const authUrl = `https://api.instagram.com/oauth/authorize?${new URLSearchParams(
      instaAuthUrlParams
    )}`;
    response.status(200).json(authUrl);
  } catch (error) {
    response.status(500).json({ error: 'something went wrong' });
  }
}
