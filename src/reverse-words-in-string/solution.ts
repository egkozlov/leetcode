export function reverseWords(s: string): string {
    return s.split(' ').reduce((acc, val) => {
        if (!val) {
            return acc;
        }

        if (!acc) {
            return val;
        }

        return `${val} ${acc}`;
    }, '');
};