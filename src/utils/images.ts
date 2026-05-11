/**
 * Returns the public URL for a character portrait image.
 * Images should be placed in public/characters/.
 */
export function getCharacterPhotoSrc(filename: string): string {
  return `/characters/${encodeURIComponent(filename)}`;
}
