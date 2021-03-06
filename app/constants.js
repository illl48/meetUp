export default {
	// MISC
	FIREBASE: 'https://incandescent-heat-2372.firebaseio.com',

	// UI FEEDBACK ACTIONS
	DISPLAY_ERROR: 'DISPLAY_ERROR',
	DISPLAY_MESSAGE: 'DISPLAY_MESSAGE',
	DISMISS_FEEDBACK: 'DISMISS_FEEDBACK',

	// AUTH ACTIONS
	ATTEMPTING_LOGIN: 'ATTEMPTING_LOGIN',
	LOGIN_USER: 'LOGIN_USER',
	LOGOUT: 'LOGOUT',

	// AUTH STATES
	LOGGED_IN: 'LOGGED_IN',
	ANONYMOUS: 'ANONYMOUS',
	AWAITING_AUTH_RESPONSE: 'AWAITING_AUTH_RESPONSE',

    // EVENT ACTIONS
	RECEIVE_EVENTS_DATA: 'RECEIVE_EVENTS_DATA',
	AWAIT_NEW_EVENT_RESPONSE: 'AWAIT_NEW_EVENT_RESPONSE',
	RECEIVE_NEW_EVENT_RESPONSE: 'RECEIVE_NEW_EVENT_RESPONSE',
	START_EVENT_EDIT: 'START_EVENT_EDIT',
	FINISH_EVENT_EDIT: 'FINISH_EVENT_EDIT',
	SUBMIT_EVENT_EDIT: 'SUBMIT_EVENT_EDIT',

	// EVENT STATES
	EDITING_EVENT: 'EDITING_EVENT',
	SUBMITTING_EVENT: 'SUBMITTING_EVENT'
};
