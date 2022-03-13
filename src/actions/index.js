import { auth, provider, _signInWithPopup } from "../firebase";
import { SET_USER } from "./actionsType";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})

export function signInAPI() {
    return (dispatch) => {
        _signInWithPopup(provider, auth)
            .then((payload) => {
                console.log(payload.user)
                dispatch(setUser(payload.user))
            })
            .catch((error) => alert(error.message));
    }
}

export function getUserAuth() {
    return (dispatch) => {
        auth.onAuthStateChanged(async (user) => {
            dispatch(setUser(user));
        })
    }
}

// export function signOutAPI() {
//     return (dispatch) => {
//         auth.signOut().then(() => {
//             dispatch(setUser(null));
//             console.log('is signed out')
//         }).catch((error) => {
//             console.log(error.message)
//         });
//     };
// }
