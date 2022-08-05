import axios from "axios"

async function getSeminarCards(page, setCardArrayData) {
    try {
        const response = await axios.get(`https://kws-seminar-api.com/api/seminar-cards?populate=*&pagination[pageSize]=8&pagination[page]=${page}`)
        //console.log(Object.values(response.data))
        setCardArrayData({isLoaded: true, cardArray: response.data.data})
    } catch (error) {
        console.error(error)
    }
}

export default getSeminarCards