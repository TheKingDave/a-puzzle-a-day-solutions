/** @type {import('@sveltejs/kit').ParamMatcher} */
export function match(monthStr: string) {
    const month = Number.parseInt(monthStr);
    return month >= 1 && month <= 31;
}