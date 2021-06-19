import { firebase, db } from '../firebase';
import * as environment from '../environment';

const initData = {
    loading: false,
    info: [],
    regId: ''
}

const LOADING = 'LOADING';
const REGISTER_PLAYER = 'REGISTER_PLAYER';
const TRNMT_INFO = 'TRNMT_INFO';

export default function registerPlayerReducer(state = initData, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: true };
        case REGISTER_PLAYER:
            return { ...state, loading: false, regId: action.id };
        case TRNMT_INFO:
            return { ...state, loading: false, info: action.trnmt };
        default:
            return { ...state };
    }
}

export const registerAuth = (data) => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        await db.collection(environment.PLAYERS_FOLDER).add(data).then(e => {
            dispatch({
                type: REGISTER_PLAYER,
                id: e.id
            })
        });
    } catch (error) {
        console.log(error);
    }
}

export const trnmtInfo = () => async (dispatch) => {
    const auth = firebase.auth();
    dispatch({
        type: LOADING
    });
    try {
        auth.signInWithEmailAndPassword(environment.AUTH_MAIL, environment.AUTH_PASSWORD);
        await db.collection(environment.TRNMT_FOLDER).get().then(e => {
            e.forEach(i => {
                dispatch({
                    type: TRNMT_INFO,
                    trnmt: i.data()
                })
            })
        });
    } catch (error) {
        console.log(error);
    }
}

