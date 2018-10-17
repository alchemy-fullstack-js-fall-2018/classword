const bearerToken = require('../../lib/util/bearer-token.js');

describe('bearer token middleware', () => {
    it('adds a bearer token to request', () => {
        const token = 'abcd';
        const req = {
            get: () => {
                return `Bearer ${token}`;
            }
        };

        let called = false;
        const next = () => {
            called = true;
        };

        bearerToken(req, null, next);

        expect(called).toBeTruthy();
        expect(req.token).toEqual(token);
    });
});
