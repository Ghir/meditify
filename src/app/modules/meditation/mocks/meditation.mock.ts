import { Meditation } from '@meditation/models/meditation.model';

export const meditationMock: Meditation = {
  id: 'id',
  categoryId: 'focus',
  title: 'Meditation title',
  text: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo
  r incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, s
  unt in culpa qui officia deserunt mollit anim id est laborum.
  `,
  media: 'https://domain.com',
  imageUrl: 'https://picsum.photos/seed/picsum/400/600',
};
