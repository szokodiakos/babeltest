import { expect } from 'chai';

describe('A test', function() {
  it('should test', async function() {
    const a = await doIt();

    expect(a).to.equal(5);
  });
});

async function doIt() {
  return Promise.resolve(5);
}
