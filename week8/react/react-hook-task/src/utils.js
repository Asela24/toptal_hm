const extractDataFromResponse = (daysArray) => {
    return daysArray.map(day => {
        const newDate = new Date(day.Date);

        const obj = {
            date: newDate.getMonth() + '/' + newDate.getDate() ,
            iconId: setCorrectId(day.Day.Icon),
            description: day.Day.IconPhrase,
            maxTemp: covertFtoC(day.Temperature.Maximum.Value),
            minTemp: covertFtoC(day.Temperature.Minimum.Value) + '℃'
            }

        return obj;
    })
}


const covertFtoC = (degrees) => Math.floor(5 / 9 * (degrees - 32));

const setCorrectId = (id) => {
    if (String(id).length !== 2) {
        return '0'+ id
    } 
    return id
}

export {extractDataFromResponse, covertFtoC, setCorrectId};