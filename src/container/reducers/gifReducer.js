import{
    SEARCH_GIFS,
    SEARCH_GIFS_SUCCESS,
    SEARCH_GIFS_FAILURE
} from '../action/types' ;
const INITIAL_STATE = {
    error:'',
    loading:false,
    gifs:[]
   

}  ;

export default (state= INITIAL_STATE , action) =>{
   console.log(action);
   switch(action.type){
           case SEARCH_GIFS_SUCCESS:
               return {...state , gifs : action.payload , error:'', loading:false} ;
           
           case SEARCH_GIFS :
               return {...state, loading : true , error:'loading...'};   
               
           case SEARCH_GIFS_FAILURE:
               return {...state , loading:false,error:action.payload}
           default:
             return state ;
   }
}