export function fullJustify(words: string[], maxWidth: number): string[] {
    const result = [];
    let wordsBuffer: string[] = [];
    words.forEach((currentWord) => {
        const bufferLineLenghtWithCurrentWord = [...wordsBuffer, currentWord].join(' ').length;
        if (bufferLineLenghtWithCurrentWord > maxWidth) {
            result.push(buildLine(wordsBuffer, maxWidth, false));
            wordsBuffer = [currentWord];
        } else if (bufferLineLenghtWithCurrentWord === maxWidth) {
            wordsBuffer.push(currentWord);
            result.push(buildLine(wordsBuffer, maxWidth, false));
            wordsBuffer = [];
        } else {
            wordsBuffer.push(currentWord);
        }
    })

    if (wordsBuffer.length) {
        result.push(buildLine(wordsBuffer, maxWidth, true));
    }

    return result;

    function buildLine(words: string[], maxWidth: number, isLastLine: boolean): string {
        const wordsCount = words.length;
        if (isLastLine || wordsCount === 1) {
            const line = words.join(' ');
            const spaceLine = buildWhiteSpacesString(maxWidth - line.length);
            return `${line}${spaceLine}`;
        }

        const wordsLength = words.join('').length;
        const spacesCapacity = maxWidth - wordsLength;
        const separatorsCount = wordsCount - 1;
        const exessiveSpaces = spacesCapacity % separatorsCount;
        const minSeparatorLength = Math.floor(spacesCapacity / separatorsCount);

        return words.reduce((acc, word, currentIndex) => {
            if (!acc) {
                return word;
            }

            const separatorLength = minSeparatorLength + (currentIndex <= exessiveSpaces ? 1 : 0);
            const spaceString = buildWhiteSpacesString(separatorLength);
            return `${acc}${spaceString}${word}`;
        }, '');
    }

    function buildWhiteSpacesString(spacesCount: number): string {
        return Array.from({ length: spacesCount }, () => ' ').join('');
    }
};