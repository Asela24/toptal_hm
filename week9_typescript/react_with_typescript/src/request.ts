import { AnimeData, AnimeInformation } from "./types";

const URL = 'https://api.jikan.moe/v4/top/anime?limit=20'
const getAnime = async () => {
    const response = await fetch(URL);
    
    if (response.ok) {

        const JSONData: AnimeData = await response.json()
        const animeData: AnimeInformation[] = JSONData.data;
     
        return animeData

    } else { 
        throw Error 
    }
}



export { getAnime };