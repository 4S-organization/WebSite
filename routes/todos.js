const {Router} = require('express')
const router = Router()

router.get('89.223.125.156/', (req, res) => {
    res.render('index', {
        title: 'Главная'
    })
})

router.get('89.223.125.156/rockets', (req, res) => {
    res.render('rockets', {
        title: 'Ракеты'
    })
})

module.exports = router