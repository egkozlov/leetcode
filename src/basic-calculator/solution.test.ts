import { calculate } from './solution';

const testCases = [
    {
        input: '1 + 1',
        output: 2,
    },
    {
        input: " 2-1 + 2 ",
        output: 3,
    },
    {
        input: '(1+(4+5+2)-3)+(6+8)',
        output: 23,
    },
    {
        input: '(-40+(4+5+2)-20)+(6+8)',
        output: -35,
    },
    {
        input: '-(2 + 3)',
        output: -5,
    }
];

it.each(testCases)('should return result of operations in string', (testCase) => {
    const result = calculate(testCase.input);

    expect(result).toBe(testCase.output);
});