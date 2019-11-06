/**
 * 项目重要配置参数
 */
const baseUrlMap = {
  test: 'https://stgplotapi.anjianba.cn',
  development: 'http://localhost:6281',
  production: 'https://plotapi.anjianba.cn'
}
const signalrUrlMap = {
  test: 'https://stgws.anjianba.cn/browser',
  development: 'https://stgws.anjianba.cn/browser',
  production: 'https://ws.anjianba.cn/browser'
}

export const TOKEN_KEY = 'source_data_ols_token'
export const BASE_URL = baseUrlMap[process.env.BUILD_TYPE || 'development'] + '/v1'
export const SIGNALR_URL = signalrUrlMap[process.env.BUILD_TYPE || 'development']
export const AXIOS_TIMEOUT = 8000

window.localStorage.setItem('app_api_url', BASE_URL)
