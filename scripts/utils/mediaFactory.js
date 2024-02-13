import {imageTemplate} from '../../scripts/templates/imageTemplate.js'
import {videoTemplate} from '../../scripts/templates/videoTemplate.js'

export function mediaFactory(media,photographerName) {
    if(media.image){
        return new imageTemplate(media,photographerName);
    }
    else {
        return new videoTemplate(media,photographerName);
    }
}