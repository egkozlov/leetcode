export function calculate(s: string): number {
    const signs = s.trim().split('');
    let numBuffer = '';
    const stack = signs.reduce<string[]>((acc, sign, currentIndex) => {
        if (sign === ' ') {
            return acc;
        }

        const isDigit = !isNaN(Number(sign));
        const isLastValue = currentIndex === signs.length - 1;
        if (isDigit) {
            numBuffer += sign;

            if (isLastValue) {
                acc.push(numBuffer);
                numBuffer = '';
            }

            return acc;
        }

        if (numBuffer) {
            acc.push(numBuffer);
            numBuffer = '';
        }

        if (sign === '(' || sign === '-' || sign === '+') {
            acc.push(sign);
            return acc;
        }

        if (sign === ')') {
            let prevStackVal = acc.pop();
            const internalBracesReversedStack: string[] = [];
            while (prevStackVal && prevStackVal !== '(') {
                internalBracesReversedStack.push(prevStackVal);
                prevStackVal = acc.pop();
            }

            const internalBracesResult = calculateNormalizedEvaluation(internalBracesReversedStack.reverse());
            acc.push(internalBracesResult.toString());
        }

        return acc;
    }, []);

    return calculateNormalizedEvaluation(stack);
};

function calculateNormalizedEvaluation(stack: string[]): number {
    let operation: string | undefined;
    return stack.reduce((acc, value) => {
        const normalizedValue = Number(value);
        const isNumber = !isNaN(normalizedValue);
        if (isNumber && operation === undefined) {
            return normalizedValue;
        }

        if (!isNumber) {
            operation = value;
            return acc;
        }

        if (operation === '-') {
            return acc - normalizedValue;
        }

        if (operation === '+') {
            return acc + normalizedValue;
        }

        return acc;
    }, 0);
}