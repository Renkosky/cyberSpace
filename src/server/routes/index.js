const router = require('koa-router')()
router.get('/test', ctx => {
  ctx.body = {
    test: 'value'
  }
})

module.exports = router
