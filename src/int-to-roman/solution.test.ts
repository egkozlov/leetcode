import { intToRoman } from './solution';

const testCases = [
    {
        input: 3999,
        output: 'MMMCMXCIX'
    },
    {
        input: 1469,
        output: 'MCDLXIX'
    },
    {
        input: 35,
        output: 'XXXV'
    },
    {
        input: 9,
        output: 'IX'
    },
    {
        input: 2004,
        output: 'MMIV'
    },
    {
        input: 3749,
        output: 'MMMDCCXLIX'
    },
];

it.each(testCases)('should convert to Roman number', (testCase) => {
    const result = intToRoman(testCase.input);

    expect(result).toBe(testCase.output);
});