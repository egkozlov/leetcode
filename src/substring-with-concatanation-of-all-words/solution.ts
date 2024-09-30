export function findSubstring(s: string, words: string[]): number[] {
    const expectedWordsAppearence = words.reduce<Map<string, number>>((acc, value) => {
        const appearanceCount = acc.get(value) || 0;
        acc.set(value, appearanceCount + 1);
        return acc;
    }, new Map());

    const wordLength = words[0].length;
    const substringLength = wordLength * words.length;
    const result = [];
    for (let i = 0; i <= s.length - wordLength; i++) {
        const substr = s.substring(i, i + substringLength);
        const substrWordsAppearence = new Map();
        let isPassing = true;
        for (let j = 0; j < words.length; j++) {
            const substrWord = substr.substring(j * wordLength, (j + 1) * wordLength);
            const expectedAppearenceCount = expectedWordsAppearence.get(substrWord);
            if (expectedAppearenceCount === undefined) {
                isPassing = false;
                break;
            }

            const appearances = substrWordsAppearence.get(substrWord) || 0;
            if (appearances >= expectedAppearenceCount) {
                isPassing = false;
                break;
            }

            substrWordsAppearence.set(substrWord, appearances + 1);
        }

        if (isPassing) {
            result.push(i);
        }
    }

    return result;
};