export type LoreEntry = {
  id: string;
  title: string;
  category: 'pantheon' | 'history' | 'culture' | 'rules' | 'place';
  body: string;
};
