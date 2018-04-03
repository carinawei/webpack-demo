module.export = function mock(app) {
  app.get('/hello', (req, res) => {
    res.json({ data: 'hello carina' })
  })
}
