import axios from "axios"

async function getSeminar(seminarID, setSeminarData) {
    try {
        const response = await axios.get(`http://localhost:1337/api/seminar-cards/${seminarID}?populate=*`)
        //console.log(Object.values(response.data.data))
        setSeminarData({isLoaded: true, seminarData: response.data.data})
    } catch (error) {
        console.error(error)
    }
}

export default getSeminar