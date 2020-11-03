const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Главная'
    })
})

router.get('/rockets', (req, res) => {
    res.render('rockets', {
        title: 'Ракеты'
    })
})

module.exports = router