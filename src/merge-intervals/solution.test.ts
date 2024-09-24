import { merge } from './solution';

const testCases = [
    {
        input: [[1,3],[2,6],[8,10],[15,18]],
        output: [[1,6],[8,10],[15,18]],
    },
    {
        input: [[1,3],[3,3],[4,6]],
        output: [[1,3],[4,6]],
    },
    {
        input: [[1,4],[0,4]],
        output: [[0,4]]
    },
    {
        input: [[2,3],[4,5],[6,7],[8,9],[1,10]],
        output: [[1,10]]
    }
];

it.each(testCases)('should merge overlapping intervals', (testCase) => {
    const result = merge(testCase.input);

    expect(result).toStrictEqual(testCase.output);
});