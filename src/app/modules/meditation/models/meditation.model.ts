export interface Meditation {
  id: string;
  categoryId: string;
  title: string;
  text: string | null;
  media: string | null;
  imageUrl: string | null;
}

export const content = {
  media: 'media',
  text: 'text',
} as const;

export type ContentTypes = typeof content[keyof typeof content];
