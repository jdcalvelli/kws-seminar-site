import axios from "axios"

async function getCardsByFilter(category) {
    try {
        const response = await axios.get(`https://kws-seminar-api.com/api/seminar-cards?populate=*&filters[seminar_category][CategoryName][$eq]=${category}`)
        //console.log(Object.values(response.data.data))
        return response.data.data
    } catch (error) {
        console.error(error)
    }
}

export default getCardsByFilter