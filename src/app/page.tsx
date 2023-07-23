'use client';

import * as React from 'react';
import { TerminalContextProvider } from 'react-terminal';

import Terminal from '@/components/Terminal/Terminal';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <main className='h-[calc(100vh-26px)]'>
      <TerminalContextProvider>
        <Terminal />
      </TerminalContextProvider>
    </main>
  );
}
