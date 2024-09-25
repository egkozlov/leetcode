import { removeDuplicates } from './solution';

const testCases = [
    {
        input: [0, 0, 1, 1, 1, 1, 2, 3, 3],
        output: 7,
    },
    {
        input: [1, 1, 1, 2, 2, 3],
        output: 5,
    },
    {
        input: [1, 1, 1, 2, 2, 5, 7, 7, 7, 7, 8],
        output: 8,
    },
    {
        input: [1, 1, 3, 4],
        output: 4,
    },
];

it.each(testCases)('should remove duplicates', (testCase) => {
    const result = removeDuplicates(testCase.input);

    expect(testCase.output).toBe(result);
});