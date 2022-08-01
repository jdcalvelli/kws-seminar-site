import axios from "axios"

async function getHomePage(setHomePageData) {
    try {
        const response = await axios.get(`http://167.172.139.163:1337/api/home-page?populate=*`)
        //console.log(Object.values(response.data.data))
        setHomePageData({isLoaded: true, homePageData: response.data.data})
    } catch (error) {
        console.error(error)
    }
}

export default getHomePage