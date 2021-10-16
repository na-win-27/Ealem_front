import { INCREASE_BID,DECREASE_CASH,PLAYER_BOUGHT } from "../static/actionTypes";
export default (state={bid:0,cash:600000000,players:[]}, action) =>{
    switch(action.type) {
        case INCREASE_BID:
            if(state.bid<10000000){
            return{
                ...state,
                bid:state.bid+2000000,
            }
        }
        if(state.bid<100000000){
            return{
                ...state,
                bid:state.bid+5000000,
            }
        }
        else{
            return{
                ...state,
                bid:state.bid+10000000,
            }
        }
        default:
            return state;
    }
}