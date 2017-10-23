/* global describe, it */
const chai = require('chai')
const expect = chai.expect

const request = require('request')

const baseUrl = 'http://localhost:3000'

describe('identicon Micro Service', () => {
  describe('GET /', () => {
    it('returns status code 200', (done) => {
      request.get(baseUrl, (error, response, body) => {
        if (error) throw new Error()
        expect(response.statusCode).to.deep.equal(200)
        done()
      })
    })
    it('returns body string', (done) => {
      request.get(baseUrl, (error, response, body) => {
        if (error) throw new Error()
        expect(body).to.include('You look like a:')
        done()
      })
    })
  })
})
