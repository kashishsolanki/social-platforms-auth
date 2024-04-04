import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';

export default function TikTokLogin() {
  const [tiktokAuthUrl, setTiktokAuthUrl] = useState<string>('');

  // call TK Auth API through next API to get the authUrl
  useEffect(() => {
    fetch('/api/tiktok/auth-url', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((tiktokAuthData) => setTiktokAuthUrl(tiktokAuthData));
  }, []);

  return (
    <a href={tiktokAuthUrl}>
      <Button
        variant="gradient"
        size="md"
        color="blue-gray"
        className="ml-4 flex items-center gap-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2859 3333"
          className="w-5 h-5"
          fill="white"
        >
          <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z" />
        </svg>
        Verify TikTok
      </Button>
    </a>
  );
}
