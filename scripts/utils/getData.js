export async function getPhotographers() {
        const localeURL = 'https://erik-42.github.io/openclassroom-fisheye/data/photographersData.json';

        try {
            const response = await fetch(localeURL);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erreur lors du chargement des données du photographe:', error);
        }
    }