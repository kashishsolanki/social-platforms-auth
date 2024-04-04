import { PlayIcon } from '@heroicons/react/24/solid';
import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

export default function YoutubeLogin() {
  const [youtubeAuthUrl, setYoutubeAuthUrl] = useState<string>('');

  // call Youtube Auth API through next API to get the authUrl
  useEffect(() => {
    fetch('/api/youtube/auth-url', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((authUrl) => setYoutubeAuthUrl(authUrl));
  }, []);

  return (
    <a href={youtubeAuthUrl}>
      <Button
        variant="gradient"
        size="md"
        color="red"
        className="ml-4  flex items-center gap-3"
      >
        <PlayIcon className="h-5 w-5" />
        Verify Youtube
      </Button>
    </a>
  );
}
