const initialState = {
    user: {},
    basket: []


};



const reducer = (state = initialState, action) => {

    console.log(action);
    switch (action.type) {

        case 'ADD_TO_BASKET':
            console.log("reducer acting ", state.basket);

            return {
                ...state,

                basket: [...state.basket, action.payload],
            };
        case 'remove':
            console.log("remove reducer is acting");
            const index = state.basket.findIndex(
                (basketitem) => basketitem.id === action.payload
            )
            let newbasket = [...state.basket];
            if (index >= 0) {
                newbasket.splice(index, 1)




            } else {
                console.warn(`can't remove (id:${action.id}) as it not in basket!`)
            }
            return {
                ...state,
                basket: newbasket



            }

        case "sighn-in":
            return {
                ...state,
                userinfo: [action.payload]
            }

        case "userfound":
            return {
                ...state,
                user: action.payload
            }
        case "usernotfound":
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
};

export default reducer;