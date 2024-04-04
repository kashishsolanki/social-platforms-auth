// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { instaAuthUrlParams } from '@/utils/constants';
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
    ...instaAuthUrlParams,
    ...{ code: code, grant_type: 'authorization_code' },
  };

  fetch(`https://api.instagram.com/oauth/access_token`, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(authParams),
  })
    .then((res) => res.json())
    .then(async (data) => {
      console.info('access token data from API : ', data);
      await fetch(
        `https://graph.instagram.com/me?fields=id,username&access_token=${data.access_token}`
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
    })
    .catch((err) => {
      console.error('access token error : ', err);
      response.status(500).json({ error: err });
    });
}
