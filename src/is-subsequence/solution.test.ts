import { isSubsequence } from "./solution";

it('should return true if searched string is contained inside text string', () => {
    const result = isSubsequence('abc', 'ahbgdc');

    expect(result).toBe(true);
});

it('should return false if searched string is not contained inside text string', () => {
    const result = isSubsequence('abc', 'adbjjieea');

    expect(result).toBe(false);
});

it('should return true if searched string consists of the same letters and they are present inside text string', () => {
    const result = isSubsequence('aaaaaa', 'bbaaaabbaa');

    expect(result).toBe(true);
});

it('should return false if searched string consists of the same letters but inside text string there is not enough of the letter', () => {
    const result = isSubsequence('aaaaaa', 'bbaaabbaa');

    expect(result).toBe(false);
});