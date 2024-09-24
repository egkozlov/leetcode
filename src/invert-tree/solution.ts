class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null;
    }

    const invertedLeftSubtree = invertTree(root.left);
    const invertedRightSubtree = invertTree(root.right);
    root.left = invertedRightSubtree;
    root.right = invertedLeftSubtree;

    return root;
};