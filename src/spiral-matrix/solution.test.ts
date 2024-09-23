import { spiralOrder } from './solution';

const testCases = [
    {
        input: [[1,2,3],[4,5,6],[7,8,9]],
        output: [1,2,3,6,9,8,7,4,5],
    },
    {
        input: [[1,2,3,4],[5,6,7,8],[9,10,11,12]],
        output: [1,2,3,4,8,12,11,10,9,5,6,7],
    },
    {
        input: [[1,2,3]],
        output: [1,2,3],
    },
    {
        input: [[1],[2],[3]],
        output: [1,2,3],
    },
];

it.each(testCases)('should return matrix elements in spiral order', (testCase) => {
    const result = spiralOrder(testCase.input);

    expect(result).toStrictEqual(testCase.output);
});