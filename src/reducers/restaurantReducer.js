
export const initialState = {
    id: '',
    name: '',
    logo: ''
  };
  
  export const actionTypes = {
    SET_RESTAURANT_SELECTED: 'SET_RESTAURANT_SELECTED'
  };
  
  export const restaurantReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_RESTAURANT_SELECTED:
        return {
          ...state,
          id: action.payload.id,
          name: action.payload.name,
          logo: action.payload.logo
        };
      default:
        return state;
    }
  };
  