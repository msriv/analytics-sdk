declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    user: {
        email: string;
        username: string;
        isAuth: boolean;
        apiKey: string;
    };
    event: {
        events: string[];
    };
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
    user: {
        email: string;
        username: string;
        isAuth: boolean;
        apiKey: string;
    };
    event: {
        events: string[];
    };
}, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<{
    user: {
        email: string;
        username: string;
        isAuth: boolean;
        apiKey: string;
    };
    event: {
        events: string[];
    };
}, import("redux").AnyAction, undefined>]>;
export default store;
