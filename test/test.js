var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('responds with hello world', function(done) {
    // navigate to root and check that the response is "hello world"
    request(app)
      .get('/')
      .expect(200) // set expected HTTP response code to 200
      .expect('hello world')
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
