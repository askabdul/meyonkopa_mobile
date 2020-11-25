import config from './../config'

const baseUrl = config.baseUrl

export default {
	baseUrl: baseUrl,
	USER: baseUrl + 'userAccounts',
	LOGIN: baseUrl + 'userAccounts/individual-signin',
	LOG_OUT: baseUrl + 'userAccounts/logout',
	SIGNUP: baseUrl + 'userAccounts/individual-signup',
	SEND: baseUrl + 'messages'
}