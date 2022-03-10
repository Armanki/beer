import { ONEBEER, ONEBEERSUCCESS,ONEERROR } from "../actions/oneBeer";

export function getOneBeerRequest(id) {
    return { type: ONEBEER, payload: { id } };
}

export function getOneBeerRequestSucceed(beer) {
    return { type: ONEBEERSUCCESS, payload: beer  };
}
export function getError(error){
    return {type:ONEERROR, payload:error}
}
