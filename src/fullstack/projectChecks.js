import { uiTest } from './templates.js';

export const strictLoadingCheck = uiTest(`import { act } from '@testing-library/react';
test('keeps loading while StrictMode cancels its first effect and the second request is pending', async () => {
  const requests = [];
  vi.stubGlobal('fetch', vi.fn((path, { signal }) => new Promise((resolve, reject) => {
    requests.push({ resolve, signal });
    signal.addEventListener('abort', () => reject(new DOMException('Cancelled', 'AbortError')));
  })));
  await act(async () => { render(<React.StrictMode><App /></React.StrictMode>); });
  expect(requests).toHaveLength(2);
  expect(requests[0].signal.aborted).toBe(true);
  expect(screen.getByText('กำลังโหลด...')).toBeTruthy();
  await act(async () => { requests[1].resolve({ ok: true, status: 200, json: async () => [] }); });
  expect(screen.queryByText('กำลังโหลด...')).toBeNull();
});`);
