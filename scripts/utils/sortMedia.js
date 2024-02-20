import { displayMedias} from '../../pages/photographer/photographerPage.js'
import { getPhotographers} from '../utils/getData.js'

function clearHTMLMedia (htmlMedia) {

    while (htmlMedia.firstChild) {
        htmlMedia.removeChild(htmlMedia.lastChild)
    }

}

export async function sortMedia(value){
    const sectionMedia = document.querySelector(".photograph__gallery");
    clearHTMLMedia(sectionMedia)

    const { media }  = await getPhotographers()
    switch(value){
        case 'popularity':
            media.sort((a, b) => b.likes - a.likes);
            break

        case 'date':
            media.sort((a, b) => new Date(b.date) - new Date(a.date));
            break

        case 'title':
            media.sort((a, b) => a.title.localeCompare(b.title));
            break
    }

displayMedias(medias)
}
