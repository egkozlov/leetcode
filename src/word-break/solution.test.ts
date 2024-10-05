import { wordBreak } from './solution';

const testCases = [
    {
        inputS: 'aaaaaaa',
        inputWordDict: ["aaaa", "aaa"],
        output: true,
    },
    {
        inputS: 'applepenapple',
        inputWordDict: ["apple", "pen"],
        output: true,
    },
    {
        inputS: 'catsandog',
        inputWordDict: ["cats", "dog", "sand", "and", "cat"],
        output: false,
    },

];

it.each(testCases)('should return is word break is possible', (testCase) => {
    const result = wordBreak(testCase.inputS, testCase.inputWordDict);

    expect(result).toStrictEqual(testCase.output);
});