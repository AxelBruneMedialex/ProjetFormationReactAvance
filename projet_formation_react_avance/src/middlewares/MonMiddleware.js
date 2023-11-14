export const MonMiddleware = (store) => (next) => (action) => {
    console.log('Middleware déclenché : ', action);
    return next(action);
}