/**
 *
 * @swarm.ai/boudica - An AI opposition generator in TypeScript
 * @author Darryl Walker
 */

import timeout from '@bagofholding/async-timeout';

export default class Boudica {
  birth = Date.now();
  interval = 1000;

  public beat = 0;
  public rate = 1;
  public working = false;

  /**
   * set whether Boudica should stop
   * we start halted
   */
  halted = true;

  constructor() {
    this.start();
  }

  start() {
    this.resume();

    /**
     * convert this to a self calling function
     * get variable timing on fly and better memory management
     * separate cpu, gpu, and screen render
     */

    setInterval(async () => {
      if (this.working || this.halted) {
        return;
      }

      this.working = true;
      await this.heartbeat();
      this.working = false;
    }, this.interval / this.rate);
  }

  /**
   * halt and resume methods
   */
  public resume() {
    this.halted = false;
  }

  public halt() {
    this.halted = true;
  }

  /**
   * where the magic happens
   */
  public async heartbeat() {
    await timeout(500);
    this.beat++;
  }
}
