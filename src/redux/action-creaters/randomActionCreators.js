import { RANDOMBEER, RANDOMBEERSUCCESS } from "../actions/randomBeer";

export function getRandomBeerRequest() {
return { type: RANDOMBEER, payload: {} };
}

export function getRandomBeerRequestSucceed(random) {
return { type: RANDOMBEERSUCCESS, payload: {random }};
}