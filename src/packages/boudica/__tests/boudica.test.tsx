import timeout from '@bagofholding/async-timeout';

import Boudica from '../boudica';

beforeAll(() => {
  const boudica = new Boudica();

  window.boudica = boudica;
});

it('creates a new instance of Boudica', () => {
  expect(window.boudica.beat).toBe(0);
  expect(window.boudica.beat).not.toBe(1);
});

it('calls for a heartbeat', async () => {
  window.boudica.heartbeat();
  /**
   * test our heartbeat async
   */
  await timeout(500);
  expect(window.boudica.beat).toBe(1);
  expect(window.boudica.beat).not.toBe(0);
});
