import { useEffect, useState } from "react"
import { getAnime } from "../request";

import { AnimeCard } from "../types";
import createObj from "../utils";


type AnimeDataStatus = AnimeCard[] | 'error' | 'loading';
const useAnimeData = () => {
    const [animeData, setAnimeData] = useState<AnimeDataStatus>('loading');

    useEffect(() => {
        const getAnimeData = async () => {

            try {
                const animeData = await getAnime();
                const result = animeData.map(card => createObj(card));

                setAnimeData(result)
            }
            
            catch (error) {
                    setAnimeData('error')
            }
        }

        getAnimeData()

    }, [])
    
    return animeData;
}

export default useAnimeData;