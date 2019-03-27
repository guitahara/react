import { EDIT_DOG,ADD_DOG,REMOVE_DOG,SEARCH_DOG,SEARCH_DOG_BY_ID,UPDATE_DOG_INFO} from './actions'
import axios from '../../config/axios.config'

export const updateDogInfo = (dog) => {
    return {type: UPDATE_DOG_INFO,payload:dog}
}

export const search = async () => {
    try {
        const dogs = await axios.get('dogs')
        return {
            type: SEARCH_DOG,
            payload: dogs.data.response.dogs
        }
        
    } catch (error) {
        console.log(error)
    }
}

export const searchDogById = async (id) => {
    const dog = await axios.get(`dogs/${id}`)
    return [
        { type: SEARCH_DOG_BY_ID, payload: dog.data },
        search()
    ]
}

export const addDog = async (dog) => {
    const response = await axios.post('dogs', dog)
    return [
        { type: ADD_DOG, payload: response.data },
        search()
    ]
}

export const editDog = async (dog, id) => {
    const response = await axios.put(`dogs/${id}`, dog)
    return [
        { type: EDIT_DOG, payload: response.data },
        search()
    ]
}

export const removeDog = async (id) => {
    const response = await axios.delete(`dogs/${id}`)
    return [
        { type: REMOVE_DOG, payload: response.data },
        search()
    ]
}

