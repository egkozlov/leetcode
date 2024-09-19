export function canJump(nums: number[]): boolean {
    const lastIndex = nums.length - 1;

    function isIndexAchievable(index: number): boolean {
        if (index === 0) {
            return true;
        }

        for (let i = index - 1; i >= 0; i--) {
            const indexDiff = index - i;
            const maxStepSize = nums[i];

            if (indexDiff <= maxStepSize && i === 0) {
                return true;
            }

            if (indexDiff <= maxStepSize) {
                return isIndexAchievable(i);
            }
        }

        return false;
    }

    return isIndexAchievable(lastIndex);
};