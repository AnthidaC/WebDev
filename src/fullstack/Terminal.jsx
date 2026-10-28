import { useEffect, useRef } from 'react';
import { Terminal as XTerm } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';

export default function Terminal({ terminalRef, onInput, onResize, ready }) {
  const host = useRef(null);
  const handlers = useRef({ onInput, onResize });
  handlers.current = { onInput, onResize };
  useEffect(() => {
    const term = new XTerm({ convertEol: true, fontSize: 12, fontFamily: 'Consolas, monospace', theme: { background: '#101a22', foreground: '#c7d7de', cursor: '#6ee7c0' }, cursorBlink: true, scrollback: 2000 });
    const fit = new FitAddon(); term.loadAddon(fit); term.open(host.current);
    terminalRef.current = term;
    term.writeln('FULL STACK LAB · Node.js runtime');
    term.writeln('กด “รันโปรเจกต์” เพื่อเริ่ม — ระบบเตรียมแพ็กเกจให้เอง');
    const input = term.onData(data => handlers.current.onInput(data));
    const resize = new ResizeObserver(() => { if (host.current?.clientWidth) { fit.fit(); handlers.current.onResize(term.cols, term.rows); } });
    resize.observe(host.current);
    return () => { input.dispose(); resize.disconnect(); term.dispose(); terminalRef.current = null; };
  }, [terminalRef]);
  return <div className="fs-terminal" ref={host} aria-label="Terminal" data-ready={ready} />;
}
