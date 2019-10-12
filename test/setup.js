process.env.TZ = 'UTC'
process.env.NODE_ENV = 'test'
process.env.JWT_SECRET = 'test-jwt-secret'

require('dotenv').config()
const { expect } = require('chai')
const supertest = require('supertest')

process.env.TEST_DB_URL = process.env.TEST_DB_URL
  || "postgresql://dunder-mifflin@localhost/thingful-auth-test"

global.expect = expect
global.supertest = supertest
