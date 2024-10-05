export function minPathSum(grid: number[][]): number {
    const dp: number[][] = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const currentValue = grid[i][j];
            if (!dp[i]) {
                dp[i] = [];
            }

            const prevLeftMinPath = dp[i - 1] ? dp[i - 1][j] : undefined;
            const prevTopMinPath = dp[i][j - 1];
            let minPath = 0;

            if (prevLeftMinPath !== undefined && prevTopMinPath !== undefined) {
                minPath = Math.min(prevLeftMinPath, prevTopMinPath);
            } else if (prevLeftMinPath !== undefined) {
                minPath = prevLeftMinPath;
            } else if (prevTopMinPath !== undefined) {
                minPath = prevTopMinPath;
            }

            dp[i][j] = currentValue + minPath;
        }
    }

    return dp[grid.length - 1][grid[0].length - 1];
};