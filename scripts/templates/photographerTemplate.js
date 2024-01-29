function photographerTemplate(data) {
    const {
        name,
        portrait,
        city,
        country,
        tagline,
        price
    } = data;

    const picture = `../../assets/photographers/photographers-ID-Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2Name = document.createElement('h2');
        h2Name.textContent = name;
        const cityLocation = document.createElement('p');
        cityLocation.textContent = city + country;
        const tag = document.createElement('p');
        tag.textContent = tagline;
        const prix = document.createElement('p');
        prix.textContent = price + `/jour`;

        article.appendChild(img);
        article.appendChild(h2Name);
        article.appendChild(cityLocation);
        article.appendChild(tag);
        article.appendChild(prix);

        return (article);
    }
    return {
        name,
        picture,
        city,
        country,
        tagline,
        price,
        getUserCardDOM
    }
}