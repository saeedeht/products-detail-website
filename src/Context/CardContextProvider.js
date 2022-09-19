import React,{useReducer} from 'react';


const initialState = {
    selectedItems:[],
    itemsCounter:0,
    totall:0,
    checkedOut:false
}

const cartReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            if (!state.selectedItems.find ( item => item.id === action.payload.id ) ) {
                state.selectedItems.push ({
                    ...action.payload,
                    quantity:1
                })
            }
            return {
                ...state,
                selectedItems : [...state.selectedItems]
            }
    }
}


const CardContextProvider = () => {

    const [state,dispatch] = useReducer(cartReducer,initialState);

    return (
        <div>
            
        </div>
    );
};

export default CardContextProvider;