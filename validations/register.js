'use strict'

const joi = require('joi');

module.exports = {
  register: {
    body: {
      username: Joi.string().min(3).max(15),
      firstname: Joi.string().min(3).max(30),
      lastname: Joi.string().min(3).max(30),
      email: Joi.string().min(10),
      password: Joi.string().min(8).max(20)

    }
  }
}
