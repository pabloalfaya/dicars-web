export type VideoYoutube = {
  id: string;
  titulo: string;
  url: string;
};

/** Miniatura oficial de YouTube (hqdefault suele existir en todos los vídeos). */
export function miniaturaYoutube(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export function urlYoutube(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}
