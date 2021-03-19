/// <reference types="react-scripts" />

import Boudica from './packages/boudica/boudica';

declare global {
  interface Window {
    boudica: Boudica;
  }
}
