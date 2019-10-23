import { Application } from 'egg';

export default (app: Application) => {
	const { router, controller, middleware } = app;
	const auth = middleware.auth;
	const api = '/api/v2';

	// user
	router.get(`${api}/user`, auth(100), controller.frontend.user.query);
};
