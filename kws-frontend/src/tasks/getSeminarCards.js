import axios from "axios"

async function getSeminarCards(setcardArrayData) {
    try {
        const response = await axios.get('http://localhost:1337/api/seminar-cards?populate=*')
        //console.log(Object.values(response.data))
        setcardArrayData({isLoaded: true, cardArray: response.data.data})
    } catch (error) {
        console.error(error)
    }
}

export default getSeminarCards