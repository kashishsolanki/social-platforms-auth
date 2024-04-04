import { GOOGLE_API_KEY, instaAuthUrlParams } from '@/utils/constants';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  response: NextApiResponse<Data | any>
) {
  const accessToken = req.body.accessToken;
  const params = {
    access_token: accessToken,
    key: GOOGLE_API_KEY,
  };
  fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,brandingSettings&mine=true&${new URLSearchParams(
      params
    )}`
  )
    .then((res) => res.json())
    .then(async (data) => {
      response.status(200).json(data);
    })
    .catch((err) => response.status(500).json({ error: err }));
}
