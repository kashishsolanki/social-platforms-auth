// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
  tiktokAuthUrlParams,
  TIKTOK_ACCESS_API_DOMAIN,
  TIKTOK_CLIENT_SECRET,
  TIKTOK_CLIENT_KEY,
  DOMAIN_URL,
} from '@/utils/constants';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  response: NextApiResponse<Data | any>
) {
  const code = req.body.code;
  const authParams = {
    ...{
      client_key: TIKTOK_CLIENT_KEY,
      client_secret: TIKTOK_CLIENT_SECRET,
      redirect_uri: `${DOMAIN_URL}/redirect/tiktok/`,
    },
    ...{ code: code, grant_type: 'authorization_code' },
  };

  fetch(`${TIKTOK_ACCESS_API_DOMAIN}oauth/token/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache',
    },
    body: new URLSearchParams(authParams),
  })
    .then((res) => res.json())
    .then(async (data) => {
      if (data && data?.access_token) {
        await fetch(
            `${TIKTOK_ACCESS_API_DOMAIN}user/info/?fields=open_id,union_id,avatar_url,display_name,is_verified,bio_description,follower_count,following_count,likes_count,video_count`,
            {
              method: 'GET',
              headers: { Authorization: `Bearer ${data.access_token}` },
            }
          )
            .then((res) => res.json())
            .then(async (data) => {
              console.info('data : ', data);
              response.status(200).json(data);
            })
            .catch((err) => {
              console.error('fields error : ', err);
              response.status(500).json({ error: err });
            });
      }
    })
    .catch((err) => {
      console.error('access token error : ', err);
      response.status(500).json({ error: err });
    });
}
