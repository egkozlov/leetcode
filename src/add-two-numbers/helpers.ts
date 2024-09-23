export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
};

export function numbersArrayToList(numbers: number[]){
    return numbers.reverse().reduce<ListNode | null>((res, value) => new ListNode(value, res), null)
}

export const numbersListToArray = (listNode: ListNode | null): number[] => {
    let pointer = listNode;
    const result = [];
    while(pointer){
        result.push(pointer?.val);
        pointer = pointer?.next || null;
    };

    return result;
}
