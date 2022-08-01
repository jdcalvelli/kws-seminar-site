import axios from "axios"

async function getCategories(setCategoriesData) {
    try {
        const response = await axios.get('http://167.172.139.163:1337/api/seminar-categories')
        //console.log(Object.values(response.data))
        setCategoriesData({isLoaded: true, categoriesData: response.data.data})
    } catch (error) {
        console.error(error)
    }
}

export default getCategories