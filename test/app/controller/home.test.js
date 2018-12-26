'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('test/app/controller/home.test.js', () => {

  it('should assert', function* () {
    const pkg = require('../../../package.json');
    assert(app.config.keys.startsWith(pkg.name));

    // const ctx = app.mockContext({});
    // yield ctx.service.xx();
  });

  // it('should GET /', () => {
  //   return app.httpRequest()
  //     .get('/')
  //     .expect('hi, egg')
  //     .expect(200);
  // });

  it('test: p, alice, /dataset1/*, GET', async () => {
    app.mockCsrf();
    const res = await app.httpRequest().get('/dataset1/resource1')
      .set('Authorization', 'alice');
    assert(res.status === 200);
  })
});
