const loggerMiddleware = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('[info]', 'Request URL: ', req.url)
  next()
}

module.exports = {
  loggerMiddleware
}
