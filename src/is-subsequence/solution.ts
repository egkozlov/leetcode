export function isSubsequence(searchedString: string, text: string): boolean {
    const searchedStringLetters = searchedString.split('');
    let textLetters = text.split('');
    let prevFoundIndex = -1;

    return searchedStringLetters.every((searchedStringLetter) => {
        textLetters = textLetters.slice(prevFoundIndex + 1);
        return textLetters.some((textLetter, textLetterIndex) => {
            if (textLetter === searchedStringLetter) {
                prevFoundIndex = textLetterIndex;
                return true;
            }
        });
    });
};