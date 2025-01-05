// Sleep typescript function
const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Retrieves the value of a CSS variable and converts it to a number.
 * 
 * @param varName - The name of the CSS variable to retrieve (without the leading '--').
 * @returns The numeric value of the CSS variable. If the value cannot be parsed as an integer, it returns NaN.
 */
function getCssVariable(varName: string) : number {
    return parseInt(getComputedStyle(document.documentElement).getPropertyValue(varName), 10);
}

export { sleep, getCssVariable };