let heartClick = document.queryselector('');

heartClick.addeventlistener('click', (e) =>{
    let mediaTarget =e.target.classlist === 'undefined' ? [] : e.target.classlist.value.split (' ');
    let heartBtn = -1 != classListTarget.indexof('heartBtn')

    if (heartBtn) {
        let totalLikes = parseInt(document.getElementById('totalLikes').innerHTML);       
        let counterLike = e.target.parentNode.firstElementChild.firstElementChild;
        let likeValue = parseInt(counterLike.innerHTML);
        let isLiked = -1 != classListTarget.indexOf('isLiked');
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