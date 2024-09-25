import { reverseWords } from './solution';

const testCases = [
    {
        input: '  aa   bb ',
        output: 'bb aa',
    },
    {
        input: 'the sky is blue',
        output: 'blue is sky the'
    },
    {
        input: '  hello world  ',
        output: 'world hello'
    },
    {
        input: 'a good   example',
        output: 'example good a'
    },
];

it.each(testCases)('should reverse words in string', (testCase) => {
    const result = reverseWords(testCase.input);

    expect(result).toStrictEqual(testCase.output);
});