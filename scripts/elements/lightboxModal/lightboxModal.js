// ===========LightboxModal3===============

/**
 * @property {HTMLElement} element
 * @property {string[]} images Chemin des images de la lightbox
 * @property {string} url image actuellement affiché

 */
class LightboxModal {
    static init (){
const links = Array.from (document.querySelectorAll('a[href$=".png"], a[href$=".jpg"],a[href$=".jpeg"],a[href$=".mp4"]'))
const gallery = links.map(link=> link.getAttribute('href'))
debugger
links.forEach(link => link.addEventListener('click', e=>{
    e.preventDefault()
    new LightboxModal(e.currentTarget.getAttribute('href'),gallery)
}))
    }
    /**
     * @param {string} url URL de l'image
     * @param {string[]} images Chemin des images de la lightbox
     */
    constructor (url, images){
        this.element = this.buildDOM(url)
        this.images = images
        this.loadImage(url)
        this.onKeyUp = this.onKeyUp.bind(this)
        document.body.appendChild(this.element)
        document.addEventListener('keyup', this.onKeyUp)
    }

    /**
   * @param {string} url URL de l'image
   */
    loadImage (url) {
        this.url = null
        const image = new Image();
        const container = this.element.querySelector('lightboxModal__container')
        const loader = document.createElement('div')
        loader.classList.add('lightboxModal__loader')
        container.innerHTML = ""
        container.appendChild(loader)
        image.onload = () => {
            console.log('Image Chargée')
            container.removeChild(loader)
            container.appendChild(image)
            this.url = url
    }
        image.src=url


    /**
     * @param {KeyboardEvent} e
    */
    onKeyUp (e) {
        if(e.key == 'Escape') { 
            this.close(e)
        } else if(e.key == 'ArrowLeft') { 
            this.prev(e)
        } else if(e.key == 'ArrowRight') { 
            this.next(e)
        }
    }


    /**
    * ferme la lightboxModal
    * @param {MouseEvent|KeyboardEvent} e
    */
    close(e){
    e.preventDefault()
    this.element.classlist.add('fadeOut')
    window.setTimeout(()=>{
    this.element.parentElement.removeChild(this.element)
    },500)
    document.removeEventListener('keyup', this.onKeyUp)
    }

    /**
    * @param {MouseEvent|KeyboardEvent} e
    */
   next (e) {
    e.preventDefault()
    let i = this.images.findIndex(image => image == this.url)
    if (i == this.images.length - 1){
        i = -1
    }
    this.loadImage(this.images[i + 1])
   }
/**
    * @param {MouseEvent|KeyboardEvent} e
    */
   prev (e) {
     e.preventDefault()
    let i = this.images.findIndex(image => image == this.url)
    if (i == 0){
        i = this.images.length
    }
    this.loadImage(this.images[i - 1])
   }

    /**
   * @param {string} url URL de l'image
   * @return {HTMLElement}
   */
    buildDOM(url) {
        const dom = document.createElement('div')
        dom.classList.add('lightboxModal')
        dom.innerHTML = `
            <button class="lightboxModal__close">Fermer</button>
            <button class="lightboxModal__next">Suivant</button>
            <button class="lightboxModal__prev">Précédent</button>
            <div class="lightboxModal__container">
            <div class="lightboxModal__loader"></div>
            <img src="${url}" alt="${url}">
            <!-- <img src="../../../assets/images/Sample Photos/Mimi/Animals_Rainbow.jpg" alt="Nora"> -->

            </div>`
        dom.querySelector('.lightboxModal__close').addEventListener('click', this.close.bind(this))
         dom.querySelector('.lightboxModal__next').addEventListener('click', this.next.bind(this))
          dom.querySelector('.lightboxModal__prev').addEventListener('click', this.prev.bind(this))
        return dom
}
}
}
/**
 * <aside id="lightboxModal">
            <button class="lightboxModal__close">Fermer</button>
            <button class="lightboxModal__next">Suivant</button>
            <button class="lightboxModal__prev">Précédent</button>
            <div class="lightboxModal__container">
              <img src="../../../assets/images/Sample Photos/Mimi/Portrait_Nora.jpg" alt="Nora">
            </div>
        </aside> 
*/

LightboxModal.init()

