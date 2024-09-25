export function removeDuplicates(nums: number[]): number {
    for (let i = 0; i < nums.length; i++) {
        const prevValue = nums[i - 1];
        const prevPrevValue = nums[i - 2];
        const shouldSwap = (prevValue !== undefined && nums[i] < prevValue) || (prevPrevValue !== undefined && nums[i] === prevValue && nums[i] === prevPrevValue);

        if (shouldSwap) {
            const minValueToSwap = prevPrevValue === prevValue ? prevValue + 1 : prevValue;
            let j = i + 1;
            let wasSwapped = false;
            while (j < nums.length && !wasSwapped) {
                if (nums[j] >= minValueToSwap) {
                    const temp = nums[j];
                    nums[j] = nums[i];
                    nums[i] = temp;
                    wasSwapped = true;
                }
                j++;
            }

            if (!wasSwapped) {
                return i;
            }
        }
    }

    return nums.length;
};