import { useState } from 'react';

const useCurrentPosition = () => {
    const [locationCoords, setLocationCoords] = useState({state: 'loading'});

    const getLocationCoords = async () => {
        try {
            const { coords: { latitude, longitude } } = await getLocationFromUser();
            setLocationCoords({ state: 'success', coords: {latitude, longitude }})
            console.log(locationCoords)
            
        } catch (e) {
            setLocationCoords({state: 'error'})
        }
    }

    return { getLocationCoords,  locationCoords };
}

const getLocationFromUser = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((success) => resolve(success), error => reject(error))
})


export { useCurrentPosition};

