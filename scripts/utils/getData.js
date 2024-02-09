export async function getPhotographers() {
        const localeURL = '../../data/photographersData.json';

        try {
            const response = await fetch(localeURL);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erreur lors du chargement des données du photographe:', error);
        }
    }