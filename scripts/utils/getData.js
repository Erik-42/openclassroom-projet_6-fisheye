// async function getPhotographers() {

//     const localeURL = '../../data/photographersData.json'

//     const response = await fetch(localeURL)

//     const data = await response.json()

//     return data
// }

const GetData = (function () {
    let photographerData;

    async function getPhotographers() {
        const localeURL = '../../data/photographersData.json';

        try {
            const response = await fetch(localeURL);
            const data = await response.json();
            photographerData = data;
        } catch (error) {
            console.error('Erreur lors du chargement des données du photographe:', error);
        }
    }

    const fetchData = async () => {
        await getPhotographers();
    };

    const getPhotographerData = () => {
        return photographerData;
    };

    return {
        fetchData,
        getPhotographerData
    };
})();