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


function maxDepth(root: TreeNode | null): number {
    if(!root){
        return 0;
    }

    function findDepth(tree: TreeNode | null): number {
        const isLeaf = !tree?.left && !tree?.right;
        if (isLeaf) {
            return 0;
        }

        return Math.max(findDepth(tree?.left), findDepth(tree?.right)) + 1;
    }

    return findDepth(root);
};