import type { Photo } from "vue-photo-album";

export type PhotoWithArtistData = Photo & {
  artist?: string,
  href?: string,
};