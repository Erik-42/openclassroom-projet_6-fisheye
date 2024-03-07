import {imageTemplate} from '../../scripts/templates/imageTemplate.js'
import {videoTemplate} from '../../scripts/templates/videoTemplate.js'

export function mediaFactory(media, photographerName, photographerId,likes) {
  if (media.image) {
    return new imageTemplate(media, photographerName,photographerId, likes);
  } else {
    return new videoTemplate(media, photographerName,photographerId, likes);
  }
}