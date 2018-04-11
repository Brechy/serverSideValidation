const express = require('express')
const knex = require('../db/knex')

const router = express.Router()

// GET home page.
router.get('/', (req, res, next) => {

  knex('users').then((results) => {
    res.render('home', {
      userlist: results
    })
  })

})

router.post('/signup', (req, res, next) => {

  knex('users')
    .insert(req.body, '*')
    .then((rows) => {
      res.json(rows[0])
    })
})

module.exports = router
