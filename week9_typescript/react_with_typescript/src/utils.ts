import { AnimeInformation } from "./types"

const createObj = (card: AnimeInformation) => {
    return {
        name: card.title,
        year: card.year,
        img: card.images.jpg.image_url,
    }
}

export default createObj;