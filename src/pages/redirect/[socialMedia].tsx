import { InstagramDetails } from '@/components/instagramDetails';
import { TiktokDetails } from '@/components/tiktokDetails';
import { YoutubeDetails } from '@/components/youtubeDetails';
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Redirect = () => {
  const [youtubeData, setYoutubeData] = useState<any>();
  const [instaInfo, setInstaInfo] = useState<any>();
  const [tiktokInfo, setTiktokInfo] = useState<any>();
  const { asPath, query, replace } = useRouter();

  useEffect(() => {
    const path = new URLSearchParams(asPath);

    if (query.socialMedia === 'youtube') {
      // get channel information based on youtube access token
      const accessToken = path.get('access_token');
      if (accessToken) {
        fetch('/api/youtube/access-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ accessToken: accessToken }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.info(data);
            setYoutubeData(data && data.items ? data.items : []);
          })
          .catch((err) => console.log(err));
      }
    } else if (query.socialMedia === 'tiktok') {
      // get tiktok information, based on instagram access token
      console.log('tiktok : ', path, query);
      const accessToken: string | string[] | undefined = query.code;
      console.log('access token : ', accessToken);
      if (accessToken) {
        fetch('/api/tiktok/access-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: accessToken }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.info('data from tiktok API : ', data);
            if (data && data.data && data.data.user) {
              setTiktokInfo(data.data.user);
            }
          })
          .catch((err) => console.log('access token API client error : ', err));
      }
    } else if (query.socialMedia === 'insta') {
      // get accout information based on instagram access token
      const accessToken: string | string[] | undefined = query.code;
      if (accessToken) {
        fetch('/api/instagram/access-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: accessToken }),
        })
          .then((res) => res.json())
          .then((data) => setInstaInfo(data))
          .catch((err) => console.log(err));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath, query.socialMedia]);

  return (
    <div className="w-full">
      <h1 className="m-4 text-xl font-bold flex items-center">
        <ArrowSmallLeftIcon
          className="mr-2 h-6 w-6 cursor-pointer"
          onClick={() => replace('/')}
        />
        {query.socialMedia} info:
      </h1>
      <br />
      <section className="m-4">
        <YoutubeDetails youtubeData={youtubeData} />
        <InstagramDetails instaInfo={instaInfo} />
        <TiktokDetails tiktokInfo={tiktokInfo} />
      </section>
    </div>
  );
};

export default Redirect;
