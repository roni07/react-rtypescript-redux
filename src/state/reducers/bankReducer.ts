import {Action} from "../actions/bankActions";
import {ActionType} from "../action-types/bankActionTypes";

const initState = 0;

const reducer = (state: number = initState, action: Action) => {

    switch (action.type) {
        case ActionType.DEPOSIT:
            return state + action.payload;
        case ActionType.WITHDRAW:
            return state - action.payload;
        case ActionType.BANKRUPT:
            return 0;
        default:
            return state;
    }
}

export default reducer;
