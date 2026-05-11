export type PlayerRecord = {
  slug: string;
  playerName: string;
  characterName: string;
  contactRaw: string;
  characterBio: string;
  playerBio?: string;
  aliases?: string[];
  photoFilename?: string;
};

export type ContactLink = {
  type: 'email' | 'phone' | 'url' | 'other';
  href: string;
  label: string;
  icon: string;
};
