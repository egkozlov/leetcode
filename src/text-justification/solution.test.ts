import { fullJustify } from './solution';

const testCases = [
    {
        inputWords: ["This", "is", "an", "example", "of", "text", "justification."],
        inputMaxWidth: 16,
        output: [
            "This    is    an",
            "example  of text",
            "justification.  "
        ],
    },
    {
        inputWords: ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"],
        inputMaxWidth: 20,
        output: [
            "Science  is  what we",
            "understand      well",
            "enough to explain to",
            "a  computer.  Art is",
            "everything  else  we",
            "do                  "
          ],
    },   
    {
        inputWords: ["Listen","to","many,","speak","to","a","few."],
        inputMaxWidth: 6,
        output: ["Listen","to    ","many, ","speak ","to   a","few.  "]
    },      
];

it.each(testCases)('should return matrix elements in spiral order', (testCase) => {
    const result = fullJustify(testCase.inputWords, testCase.inputMaxWidth);

    expect(result).toStrictEqual(testCase.output);
});