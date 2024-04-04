// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { googleAuthUrlParams } from '@/utils/constants';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  response: NextApiResponse<string | any>
) {
  // creating a dynamic auth url for youtube based on credentials from constants
  try {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams(
      googleAuthUrlParams
    )}`;
    response.status(200).json(authUrl);
  } catch (error) {
    response.status(500).json({ error: 'something went wrong' });
  }
}
