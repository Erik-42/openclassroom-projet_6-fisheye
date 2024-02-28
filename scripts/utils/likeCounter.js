let heartClick = document.queryselector(
  ".photograph__gallery__card__photo__info__heart"
);

heartClick.addeventlistener('click', (e) =>{
    let mediaTarget =e.target.classlist === 'undefined' ? [] : e.target.classlist.value.split (' ');
    let heartBtn =
      -1 !=
      mediaTarget.indexof("photograph__gallery__card__photo__info__heart");

    if (heartBtn) {
        let totalLikes = parseInt(document.getElementById('totalLikes').innerHTML);       
        let counterLike = e.target.parentNode.firstElementChild.firstElementChild;
        let likeValue = parseInt(counterLike.innerHTML);
        let isLiked = -1 != mediaTarget.indexOf("isLiked");
        document.getElementById('totalLikes').innerHTML = isLiked ? --totalLikes : ++totalLikes;
        counterLike.innerHTML = isLiked ? --likeValue : ++likeValue;

        if (isLiked) {
            e.target.classList.remove('isLiked');
            e.target.classList.replace('fas', 'far');
        } else {
            e.target.classList.add('isLiked');
            e.target.classList.replace('far', 'fas');
                }
} })