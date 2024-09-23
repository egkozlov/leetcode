import { numbersListToArray, numbersArrayToList } from './helpers';
import { addTwoNumbers } from './solution';

const testCases = [
    {
        l1: [2, 4, 3],
        l2: [5, 6, 4],
        output: [7, 0, 8],
    },
    {
        l1: [2],
        l2: [5, 6, 4],
        output: [7, 6, 4],
    },
    {
        l1: [2, 3, 8],
        l2: [9, 6],
        output: [1, 0, 9],
    },
    {
        l1: [9, 9, 9],
        l2: [7],
        output: [6, 0, 0, 1],
    },
];

it.each(testCases)('should sum two numbers represented as list', (testCase) => {
    const result = addTwoNumbers(numbersArrayToList(testCase.l1), numbersArrayToList(testCase.l2));

    expect(numbersListToArray(result)).toStrictEqual(testCase.output);
});