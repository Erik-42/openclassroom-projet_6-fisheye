import { imageTemplate } from "../templates/imageTemplate";
import { videoTemplate } from "../templates/videoTemplate";

export function mediaFactory(media, photographerName, tabindex) {
  if (media.image) {
    return new imageTemplate(media, photographerName, tabindex);
  }
  return new videoTemplate(media, photographerName, tabindex);
}
