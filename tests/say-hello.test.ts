import { sayHello } from "../src/say-hello.js"

describe('sayHello', function () {
    it('should return hello dino', function () {
        expect(sayHello('dino')).toBe('Hello dino')
    })
})