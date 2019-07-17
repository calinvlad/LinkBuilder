const linkCtrl = require('./ctrl/linkCrtl')

module.exports = (app) => {
    app.get('/links', linkCtrl.get)
    app.get('/links/:name', linkCtrl.getByName)
    app.post('/links', linkCtrl.create)
}