import {AuthLoginTypes} from "@/constants/AuthLoginType";

interface action {
    type: string,
    payload: object
}

interface initialState {
    admin: any
    isFetching: boolean
    error: boolean
}

const initialState: initialState = {
    // @ts-ignore
    admin: null,
    isFetching: false,
    error: false,
};

export const LoginReducer = (state = initialState, action: action) => {
    switch (action.type) {
        case AuthLoginTypes.LOGIN_START:
            return {
                admin: null,
                isFetching: true,
                error: false,
            };
        case AuthLoginTypes.LOGIN_SUCCESS:
            return {
                admin: action.payload,
                isFetching: true,
                error: false,
            };
        case AuthLoginTypes.LOGIN_FAILURE:
            return {
                admin: null,
                isFetching: false,
                error: true,
            };
        case AuthLoginTypes.LOGOUT:
            return {
                admin: null,
                isFetching: false,
                error: false,
            };
        default:
            return { ...state };
    }
}