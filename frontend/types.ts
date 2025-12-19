
export interface User {
  user_no: number;
  role_no: number;
  email: string;
  nickname: string;
  profile_url: string | null;
  created_at?: string;
}

export interface Notice {
  notice_no: number;
  user_no: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

// Added Song interface to fix export errors in constants.ts and services/geminiService.ts
export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  coverUrl: string;
  duration: string;
  genre: string;
  year: number;
  mood: string;
  previewUrl: string | null;
  spotifyUrl: string;
  popularity: number;
}

export interface Music {
  music_no?: number;
  track_name: string;
  artist_name: string;
  album_name: string;
  album_image_url: string;
  duration_ms: number;
  popularity: number;
  spotify_url: string;
}

export interface Playlist {
  playlist_no: number;
  user_no: number;
  title: string;
  content: string | null;
  created_at: string;
  updated_at: string;
  music_items?: Music[];
}

// Added ListeningStats interface to fix export errors in constants.ts and components/Charts.tsx
export interface ListeningStats {
  totalMinutes: number;
  topGenres: { name: string; value: number }[];
  weeklyActivity: { day: string; hours: number }[];
  audioFeatures: { subject: string; A: number; fullMark: number }[];
}

export type AppView = 'home' | 'search' | 'library' | 'profile' | 'notices';
export type AuthState = 'login' | 'signup' | 'forgot-password';

export interface CartItem extends Music {
  addedAt: number;
}
