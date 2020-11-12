import config from '../config'

const baseUrl = config.baseUrl

export default {
	baseUrl: baseUrl,
	USER: baseUrl + 'userAccounts',
	LOGIN: baseUrl + 'userAccounts/individual-signin',
	LOG_OUT: baseUrl + 'userAccounts/logout',
	SIGNUP: baseUrl + 'UserAccounts/individual-signup',
	GETRESUNIT: baseUrl + "ResponseUnits"
}