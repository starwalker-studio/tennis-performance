import { storage } from '../firebase';

const CLASES_PARTICULARES = 'clases-particulares';
const CLASES_GRUPALES = 'clases-grupales';
const TORNEOS = 'torneos';

const data = {
    loading: false,
    list: 0,
    photo: []
}

const LOADING = 'LOADING';
const GET_PHOTOS_CLASES_PARTICULARES = 'GET_PHOTOS_CLASES_PARTICULARES';
const GET_PHOTOS_CLASES_GRUPALES = 'GET_PHOTOS_CLASES_GRUPALES';
const GET_PHOTOS_TORNEOS = 'GET_PHOTOS_TORNEOS';

export default function galleryReducer(state = data, action) {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: action.loading };
        case GET_PHOTOS_CLASES_PARTICULARES:
            return { ...state, loading: action.loading, list: action.list, photo: action.link };
        case GET_PHOTOS_CLASES_GRUPALES:
            return { ...state, loading: action.loading, list: action.list, photo: action.link };
        case GET_PHOTOS_TORNEOS:
            return { ...state, loading: action.loading, list: action.list, photo: action.link };
        default:
            return state;
    }
}

export const getParticulares = (num) => async (dispatch) => {
    const listItems = await storage.ref().child(CLASES_PARTICULARES).listAll();
    try {
        dispatch({
            type: LOADING,
            loading: true
        });
        if (num <= listItems.items.length) {
            const imgSrc = await storage.ref().child(CLASES_PARTICULARES).child(`p-${num}.png`).getDownloadURL();
            dispatch({
                type: GET_PHOTOS_CLASES_PARTICULARES,
                list: listItems.items.length,
                link: imgSrc,
                loading: false
            });
        }
    } catch (error) {
        console.log(error);
    }
}

export const getGrupales = (num) => async (dispatch) => {
    const listItems = await storage.ref().child(CLASES_GRUPALES).listAll();
    try {
        dispatch({
            type: LOADING,
            loading: true
        });
        if (num <= listItems.items.length) {
            const imgSrc = await storage.ref().child(CLASES_GRUPALES).child(`g-${num}.png`).getDownloadURL();
            dispatch({
                type: GET_PHOTOS_CLASES_GRUPALES,
                list: listItems.items.length,
                link: imgSrc,
                loading: false
            });
        }
    } catch (error) {
        console.log(error);
    }
}

export const getTorneos = (num) => async (dispatch) => {
    const listItems = await storage.ref().child(TORNEOS).listAll();
    try {
        dispatch({
            type: LOADING,
            loading: true
        });
        if (num <= listItems.items.length) {
            const imgSrc = await storage.ref().child(TORNEOS).child(`t-${num}.png`).getDownloadURL();
            dispatch({
                type: GET_PHOTOS_TORNEOS,
                list: listItems.items.length,
                link: imgSrc,
                loading: false
            });
        }
    } catch (error) {
        console.log(error);
    }
}