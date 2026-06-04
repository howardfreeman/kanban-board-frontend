export function debounce(cb: () => void, delay = 100) {
  let timerId = setTimeout(cb, delay);

  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(cb, delay);
  };
}
