import { Song, ListeningStats, Notice, User } from './types';

// Spotify Credentials provided by user
export const SPOTIFY_CLIENT_ID = '3e66A42a7cc745408da6194cec098d55';
export const SPOTIFY_CLIENT_SECRET = '9989901cbbe9462f82e0df79fb9878f5';

// Fixed property names to match User interface (user_no, nickname, profile_url)
export const MOCK_USER: User = {
  user_no: 1,
  role_no: 1,
  email: 'user@example.com',
  nickname: '음악 애호가',
  profile_url: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  created_at: '2025-01-01'
};

// Fixed property names to match Notice interface (notice_no, created_at, updated_at)
export const MOCK_NOTICES: Notice[] = [
  {
    notice_no: 1,
    user_no: 1,
    title: '정기 점검 안내',
    content: '12월 25일 오전 2시부터 4시까지 서버 정기 점검이 진행될 예정입니다. 이용에 참고 부탁드립니다.',
    created_at: '2025-12-15',
    updated_at: '2025-12-15'
  },
  {
    notice_no: 2,
    user_no: 1,
    title: '신규 기능: 스포티파이 연동',
    content: '이제 설정 메뉴에서 스포티파이 API를 연동하여 실제 음원을 검색하고 미리듣기 할 수 있습니다.',
    created_at: '2025-12-10',
    updated_at: '2025-12-10'
  },
  {
    notice_no: 3,
    user_no: 1,
    title: 'Muze 베타 오픈',
    content: 'Muze 베타 서비스에 오신 것을 환영합니다. 버그 제보는 고객센터를 이용해 주세요.',
    created_at: '2025-12-01',
    updated_at: '2025-12-01'
  }
];

export const MOCK_SONGS: Song[] = [
  {
    id: '1',
    title: 'Midnight City',
    artist: 'M83',
    album: 'Hurry Up, We\'re Dreaming',
    coverUrl: 'https://picsum.photos/300/300?random=1',
    duration: '4:03',
    genre: '일렉트로닉',
    year: 2011,
    mood: '활기찬',
    previewUrl: null,
    spotifyUrl: 'https://open.spotify.com/track/1',
    popularity: 80
  },
  {
    id: '2',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    coverUrl: 'https://picsum.photos/300/300?random=2',
    duration: '3:20',
    genre: '팝',
    year: 2020,
    mood: '신나는',
    previewUrl: null,
    spotifyUrl: 'https://open.spotify.com/track/2',
    popularity: 95
  },
  {
    id: '3',
    title: 'Bohemian Rhapsody',
    artist: 'Queen',
    album: 'A Night at the Opera',
    coverUrl: 'https://picsum.photos/300/300?random=3',
    duration: '5:55',
    genre: '록',
    year: 1975,
    mood: '웅장한',
    previewUrl: null,
    spotifyUrl: 'https://open.spotify.com/track/3',
    popularity: 90
  },
  {
    id: '4',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    coverUrl: 'https://picsum.photos/300/300?random=4',
    duration: '3:23',
    genre: '팝',
    year: 2020,
    mood: '신나는',
    previewUrl: null,
    spotifyUrl: 'https://open.spotify.com/track/4',
    popularity: 88
  },
  {
    id: '5',
    title: 'Hotel California',
    artist: 'Eagles',
    album: 'Hotel California',
    coverUrl: 'https://picsum.photos/300/300?random=5',
    duration: '6:30',
    genre: '록',
    year: 1976,
    mood: '차분한',
    previewUrl: null,
    spotifyUrl: 'https://open.spotify.com/track/5',
    popularity: 85
  },
  {
    id: '6',
    title: 'Bad Guy',
    artist: 'Billie Eilish',
    album: 'When We All Fall Asleep',
    coverUrl: 'https://picsum.photos/300/300?random=6',
    duration: '3:14',
    genre: '팝',
    year: 2019,
    mood: '어두운',
    previewUrl: null,
    spotifyUrl: 'https://open.spotify.com/track/6',
    popularity: 92
  },
    {
    id: '7',
    title: 'Take Five',
    artist: 'Dave Brubeck',
    album: 'Time Out',
    coverUrl: 'https://picsum.photos/300/300?random=7',
    duration: '5:24',
    genre: '재즈',
    year: 1959,
    mood: '편안한',
    previewUrl: null,
    spotifyUrl: 'https://open.spotify.com/track/7',
    popularity: 75
  },
  {
    id: '8',
    title: 'SICKO MODE',
    artist: 'Travis Scott',
    album: 'ASTROWORLD',
    coverUrl: 'https://picsum.photos/300/300?random=8',
    duration: '5:12',
    genre: '힙합',
    year: 2018,
    mood: '강렬한',
    previewUrl: null,
    spotifyUrl: 'https://open.spotify.com/track/8',
    popularity: 89
  }
];

export const MOCK_STATS: ListeningStats = {
  totalMinutes: 12450,
  topGenres: [
    { name: '팝', value: 45 },
    { name: '록', value: 25 },
    { name: '일렉트로닉', value: 15 },
    { name: '재즈', value: 10 },
    { name: '클래식', value: 5 },
  ],
  weeklyActivity: [
    { day: '월', hours: 2.5 },
    { day: '화', hours: 3.8 },
    { day: '수', hours: 1.5 },
    { day: '목', hours: 4.2 },
    { day: '금', hours: 5.5 },
    { day: '토', hours: 6.8 },
    { day: '일', hours: 4.0 },
  ],
  audioFeatures: [
    { subject: '에너지', A: 120, fullMark: 150 },
    { subject: '댄스', A: 98, fullMark: 150 },
    { subject: '어쿠스틱', A: 86, fullMark: 150 },
    { subject: '연주곡', A: 99, fullMark: 150 },
    { subject: '분위기', A: 85, fullMark: 150 },
    { subject: '템포', A: 65, fullMark: 150 },
  ]
};

export const GENRES = ['전체', '팝', '록', '힙합', '일렉트로닉', '재즈', '클래식', 'R&B'];
export const MOODS = ['전체', '행복함', '슬픔', '활기찬', '차분한', '집중'];
