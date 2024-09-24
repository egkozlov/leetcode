export function groupAnagrams(strs: string[]): string[][] {
    const annagramsMap = new Map<string, string[]>();
    
    strs.forEach((word) => {
        const sortedLettersOfWord = word.split('').sort().join('');
        const annagramsWithTheSameLetters  = annagramsMap.get(sortedLettersOfWord) || [];
        annagramsWithTheSameLetters.push(word);
        annagramsMap.set(sortedLettersOfWord, annagramsWithTheSameLetters);
    });

    return Array.from(annagramsMap.values());
};