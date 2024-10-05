import { minPathSum } from './solution';

const testCases = [
    {
        input: [[1,3,1],[1,5,1],[4,2,1]],
        output: 7,
    },
];

it.each(testCases)('should find the min path', (testCase) => {
    const result = minPathSum(testCase.input);

    expect(result).toBe(testCase.output);
});