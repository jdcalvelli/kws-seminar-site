import axios from "axios"

async function getSeminarCards(setCardArrayData) {
    try {
        const response = await axios.get('https://kws-seminar-api.com/api/seminar-cards?populate=*')
        //console.log(Object.values(response.data))
        setCardArrayData({isLoaded: true, cardArray: response.data.data})
    } catch (error) {
        console.error(error)
    }
}

export default getSeminarCards