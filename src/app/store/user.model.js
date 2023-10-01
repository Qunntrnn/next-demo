"use client"

const initialState = {
    id : undefined,
    email : undefined,
    displayName : undefined,
}

export const user = {
    state: initialState,

    reducers : {
        setUser(_state, newUser) {
            return newUser;
        }
    },

    effect: (dispatch) =>  ({
        async signIn(payload) {
            if(payload.email !== "a@a.com" || payload.password !== "Abc"){
                throw new Error ("Invalid Credentials");
            }

            dispatch.user.setUser({
                id:1,
                email:payload.email,
                displayName : "Quan"
            })
        },

        async register(payload, rootState) {
            const {email,password, displayName} = payload;
            if (email === "a@a.com") {
                throw new Error("email is Already exists");
            }
            dispatch.user.setUser(result.data)
        }
    })
}