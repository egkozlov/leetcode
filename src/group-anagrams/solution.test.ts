import { groupAnagrams } from './solution';

const testCases = [
    {
        input: ["eat", "tea", "tan", "ate", "nat", "bat"],
        output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
    }
];

it.each(testCases)('should sum two numbers represented as list', (testCase) => {
    const result = groupAnagrams(testCase.input).map(words => words.sort());

    const output = testCase.output.map(words => words.sort());
    expect(result).toEqual(expect.arrayContaining(output));
    expect(output).toEqual(expect.arrayContaining(result));
});