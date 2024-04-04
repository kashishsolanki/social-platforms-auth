export const DOMAIN_URL = ''; // http://localhost:3000

// Instagram Credentails
export const instaAuthUrlParams = {
  client_id: '',
  client_secret: '',
  scope: 'user_profile',
  redirect_uri: `${DOMAIN_URL}/redirect/insta`,
  response_type: 'code',
};

// Youtube Credentials
export const GOOGLE_API_KEY = '';
export const GOOOGLE_API_CLIENT_ID = '';
export const googleAuthUrlParams = {
  scope: 'https://www.googleapis.com/auth/youtube.readonly',
  include_granted_scopes: 'true',
  state: 'youtube_creator_auth',
  redirect_uri: `${DOMAIN_URL}/redirect/youtube`,
  response_type: 'token',
  client_id: GOOOGLE_API_CLIENT_ID,
};

// Tiktok Credentials
export const TIKTOK_APP_ID = '';
export const TIKTOK_CLIENT_KEY = '';
export const TIKTOK_CLIENT_SECRET = '';
export const TIKTOK_AUTH_DOMAIN = 'https://www.tiktok.com/v2/auth/authorize';
export const TIKTOK_ACCESS_API_DOMAIN = 'https://open.tiktokapis.com/v2/';
export const tiktokAuthUrlParams = {
  client_key: TIKTOK_CLIENT_KEY,
  client_secret: TIKTOK_CLIENT_SECRET,
  response_type: 'code',
  scope: 'user.info.basic,video.list', //,user.info.profile
  redirect_uri: `${DOMAIN_URL}/redirect/tiktok/`,
  state: 'tiktok_creator_auth',
};
