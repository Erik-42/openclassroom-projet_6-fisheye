async function getPhotographers() {

    const localeURL = '../../data/photographersData.json'

    const response = await fetch(localeURL)

    const data = await response.json()

    return data
}