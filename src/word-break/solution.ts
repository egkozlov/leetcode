export function wordBreak(s: string, wordDict: string[]): boolean {
    const wordDictSet = new Set(wordDict);
    const maxWordDictLenght = 20;
    const memo: Record<string, boolean> = {};

    function hasWordInDict(s: string): boolean {
        if (s in memo) {
            return memo[s];
        }
        for (let j = 1; j <= Math.min(maxWordDictLenght, s.length); j++) {
            const substr = s.substring(0, j);
            if (wordDictSet.has(substr) && j === s.length) {
                return true;
            }

            if (wordDictSet.has(substr) && hasWordInDict(s.substring(j))) {
                memo[s] = true;
                return true;
            }
        }

        memo[s] = false;

        return false;
    }

    return hasWordInDict(s);
};