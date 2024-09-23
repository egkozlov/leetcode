import { lengthOfLongestSubstring } from './solution';

const testCases = [
    {
        input: 'abcabcbb',
        output: 3,
    },
    {
        input: 'pwwkew',
        output: 3,
    },
    {
        input: 'bbbbb',
        output: 1,
    },
    {
        input: ' ',
        output: 1,
    },
    {
        input: 'aabaab!bb',
        output: 3,
    }
];

it.each(testCases)('should return lenght of longest substring without reps', (testCase) => {
    const result = lengthOfLongestSubstring(testCase.input);

    expect(result).toBe(testCase.output);
});