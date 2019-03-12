const process = require('process');

class Config {
  isMock() {
    return false
  }

  getApiUrl(url) {
    if (process.env.NODE_ENV === 'production') {
      return 'https://data.pay.verystar.cn' + url
    }
    return url
  }
}

export const ConfigModel = new Config();