import { getPhotographers } from "./getData";

export async function getMediaAndName() {
  const url = new URL(window.location);
  const idPhotographer = url.searchParams.get("id");
  const data = await getPhotographers();
  const photographer = data.photographers.filter(
    (p) => p.id == idPhotographer,
  )[0];

  const medias = data.media.filter((m) => m.photographerId == idPhotographer);
  return { medias, photographer };
}
