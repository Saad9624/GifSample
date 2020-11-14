import utils from "../../constants/utils";
import {
    SEARCH_GIFS,
    SEARCH_GIFS_SUCCESS,
    SEARCH_GIFS_FAILURE
} from './types'
export const searchGif =  (term) => {

  
   
    return (dispatch) => {
     dispatch({type :SEARCH_GIFS })

     const API_KEY = utils.apiKey;
     const BASE_URL = utils.BASE_URL;
     const URL = `${BASE_URL}?api_key=${API_KEY}&q=${term}&limit=40` ;

    fetch(URL)
        .then(res => res.json())
        .then(res => {
            if(res) {
                gifData(dispatch , res.data)
            }
        
        })
        .catch(error => {
            gifDataFailure(dispatch,error);
        })
 

 }
}

const gifData = (dispatch , data) =>{
    dispatch({
        type:SEARCH_GIFS_SUCCESS ,
        payload:data
    })

};

const gifDataFailure = (dispatch , error) =>{
    dispatch({
        type:SEARCH_GIFS_FAILURE ,
        payload:error
    })

};