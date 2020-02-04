const giveIntro = require('./intro');

test('string returning Hello, I am me', () => {
    expect(giveIntro()).toMatch('Hello, I am me');
});