/**
 * Debouncing is a pattern that allows
 * delaying execution of some piece of code until
 * a specified time to avoid unnecessary
 * CPU cycles, API calls and improve performance.
 */
export function debounce(fn: Function, delay = 200) {
  let timer: number | NodeJS.Timeout;

  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(context, args), delay);
  };
}
