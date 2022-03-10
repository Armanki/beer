import {all, call, put, takeLatest, takeEvery} from "redux-saga/effects";
import {request} from "../services/requestService";
import {getBeerRequestSucceed} from "../redux/action-creaters/beerActionCreators";
import {BEERACTION} from "../redux/actions/beerActions";
import {ONEBEER} from "../redux/actions/oneBeer";
import {getError, getOneBeerRequestSucceed} from "../redux/action-creaters/oneBeerActionCreators";
import {RANDOMBEER} from "../redux/actions/randomBeer";
import {getRandomBeerRequestSucceed} from "../redux/action-creaters/randomActionCreators";

 function* getBeers({payload}) {
    try {
        const {name, page = 1} = payload;
        const {data} = yield call(request, "GET",
            `https://api.punkapi.com/v2/beers?beer_name=${name}&page=${page}&per_page=9`, {});
        yield put(getBeerRequestSucceed(data));
    } catch (e) {
        yield put(getError(e.response.data.message))
    }
}

function* getSingleBeer({payload}) {
    try {
        const {id} = payload;
        const {data} = yield call(request, "GET", `https://api.punkapi.com/v2/beers/${id}`, {});
        yield put(getOneBeerRequestSucceed(data[0]));
    } catch (e) {
      yield put(getError(e.response.data.message));

    }
}
function* getRandomBeer() {
     try{
         const {data} = yield call(request, "GET", `https://api.punkapi.com/v2/beers/random`,{});
         yield put(getRandomBeerRequestSucceed(data))
     } catch (e) {
         yield put(getError(e.response.data.message));
     }
}


export function* beersSagas() {
    yield all([takeLatest(BEERACTION, getBeers),
        takeLatest(ONEBEER, getSingleBeer),
        takeEvery(RANDOMBEER, getRandomBeer)
    ]);
}