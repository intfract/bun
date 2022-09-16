import Bao from 'baojs'

const app = new Bao()

app.get('/', (ctx) => {
  return ctx.sendJson({
    status: 200,
    message: 'Hello, World!'
  })
})

app.get('/user/:user', (ctx) => {
  const user = ctx.params.user
  return ctx.sendJson({
    username: user
  })
})

app.listen({ port: 8080 })