function sumNumbers(root: TreeNode | null): number {
    let result = 0;

    function sum(node: TreeNode, prevSum: string): void {
        const hasLeafs = node.left || node.right;
        if (!hasLeafs) {
            result += parseInt(prevSum);
            return;
        }

        if (node.left) {
            sum(node.left, prevSum + String(node.left.val));
        }

        if (node.right) {
            sum(node.right, prevSum + String(node.right.val));
        }
    }

    if (!root) {
        return 0;
    }

    sum(root, String(root.val));

    return result;
};