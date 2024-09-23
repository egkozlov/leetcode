export function lengthOfLongestSubstring(s: string): number {
    let usedCharacters: string[] = [];
    let maxSubstringLength = 0;
    s.split('').forEach((character) => {
        const usedCharacterIndex = usedCharacters.findIndex((usedChar) => usedChar === character);
        if (usedCharacterIndex !== -1) {
            usedCharacters = usedCharacters.slice(usedCharacterIndex + 1);

        }

        usedCharacters.push(character);

        if (usedCharacters.length > maxSubstringLength) {
            maxSubstringLength = usedCharacters.length;
        }
    });

    return maxSubstringLength;
};