import StickyNavbar from '@/components/StickyNavbar';
import InstagramLogin from '@/components/instagramLogin';
import YoutubeLogin from '@/components/youtubeLogin';
import TikTokLogin from '@/components/tiktokLogin';

export default function Home() {
  return (
    <div className="min-h-screen">
      <StickyNavbar />
      <div className="mt-40 flex justify-center items-center">
        <InstagramLogin />
        <TikTokLogin />
        <YoutubeLogin />
      </div>
    </div>
  );
}
