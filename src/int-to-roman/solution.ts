export function intToRoman(num: number): string {
    const romanDigitsDefinitionsMap = {
        thousand: {
            single: 'M', halfOfTen: '', ten: ''
        },
        hundred: {
            single: 'C', halfOfTen: 'D', ten: 'M'
        },
        ten: {
            single: 'X', halfOfTen: 'L', ten: 'C'
        },
        single: {
            single: 'I', halfOfTen: 'V', ten: 'X'
        }
    };

    const romanDigitsDefinitions = [
        romanDigitsDefinitionsMap.single,
        romanDigitsDefinitionsMap.ten,
        romanDigitsDefinitionsMap.hundred,
        romanDigitsDefinitionsMap.thousand,
    ];

    const reversedOriginalDigits = num.toString().split('').reverse().map(Number);
    return reversedOriginalDigits.reduce<string>((res, digit, index) => {
        if (digit === 0) {
            return res;
        }

        return `${convertRegularDigitToRomanNumeral(digit, romanDigitsDefinitions[index])}${res}`;
    }, '');
};

function convertRegularDigitToRomanNumeral(value: number, romanDefinition: { single: string, halfOfTen: string, ten: string }): string {
    const { single, halfOfTen, ten } = romanDefinition;
    if (value <= 3) {
        return Array(value).fill(single).join('');
    }

    if (value === 4) {
        return `${single}${halfOfTen}`;
    }

    if (value === 9) {
        return `${single}${ten}`;
    }

    return `${halfOfTen}${Array(value - 5).fill(single).join('')}`;
}