import {BEERACTIONSUCCESS} from "../actions/beerActions";
import {ONEERROR, ONEBEERSUCCESS} from "../actions/oneBeer";
import {RANDOMBEERSUCCESS} from "../actions/randomBeer";

const initialState = {
    beers: [],
    beer: null,
    error: "",
    random: [],
    favorite: {}
};

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case BEERACTIONSUCCESS: {
            return {
                ...state,
                random: [],
                error: "",
                beers: payload
            }
        }
        case ONEBEERSUCCESS: {
            return {
                ...state,
                error: "",
                beer: payload
            }
        }
        case ONEERROR: {
            return {
                ...state,
                error: payload
            }
        }
        case RANDOMBEERSUCCESS: {
            //  let arr = [...state.random]
            //  if (arr.length > 2) {
            //      arr = []
            // }
            //  arr.random.push([...state.random])

            return {
                ...state,
                 random: [ ...payload.random,...state.random].slice(0, 3)
            }
        }

        default:
            return state;
    }
};