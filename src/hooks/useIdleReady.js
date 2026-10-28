import { useEffect, useState } from 'react';

/** Defer optional, CPU-heavy UI until the browser has had a chance to paint. */
export default function useIdleReady(enabled = true, timeout = 1200) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!enabled || ready) return undefined;

    let timer;
    let idleId;
    if ('requestIdleCallback' in window) {
      idleId = window.requestIdleCallback(() => setReady(true), { timeout });
    } else {
      timer = window.setTimeout(() => setReady(true), Math.min(timeout, 400));
    }

    return () => {
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [enabled, ready, timeout]);

  return ready;
}
