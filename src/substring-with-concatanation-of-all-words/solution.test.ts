import { findSubstring } from './solution';

const testCases = [
    {
        inputString: 'barfoofoobarthefoobarman',
        inputWords: ["bar","foo","the"],
        output: [6,9,12],
    },
    {
        inputString: "a",
        inputWords: ["a"],
        output: [0],
    }
];

it.each(testCases)('should indexes of substrings', (testCase) => {
    const result = findSubstring(testCase.inputString, testCase.inputWords);

    expect(result).toStrictEqual(testCase.output);
});