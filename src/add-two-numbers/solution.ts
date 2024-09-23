import { ListNode, numbersArrayToList } from "./helpers";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const resultDigistList = [];
    let l1Pointer = l1;
    let l2Pointer = l2;
    let isPrevDigitsSumExceedDozen = false;
    do {
        const digitsSum: number = (l1Pointer?.val || 0) + (l2Pointer?.val || 0) + (isPrevDigitsSumExceedDozen ? 1 : 0);
        resultDigistList.push(digitsSum % 10);
        isPrevDigitsSumExceedDozen = digitsSum > 9;
        l1Pointer = l1Pointer?.next || null;
        l2Pointer = l2Pointer?.next || null;
    } while (l1Pointer || l2Pointer);

    if (isPrevDigitsSumExceedDozen) {
        resultDigistList.push(1);
    }

    return numbersArrayToList(resultDigistList);
};