import {init} from "@rematch/core";
import {user} from"./user.model";

export const store = init ({
    models: {
        user,
        
    },
});

// {
//     user: {
//         id:1,
//         email: "",
//         displayName:"",
//     },
//     modelA:{
//         x:1,
//         y:1,
//     }
// }