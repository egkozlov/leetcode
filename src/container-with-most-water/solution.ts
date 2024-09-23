export function maxArea(height: number[]): number {
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let maxArea = calculateArea([leftPointer, height[leftPointer]], [rightPointer, height[rightPointer]]);

    while (leftPointer !== rightPointer) {
        if (height[leftPointer] > height[rightPointer]) {
            rightPointer -= 1;
        } else {
            leftPointer += 1;
        }

        const area = calculateArea([leftPointer, height[leftPointer]], [rightPointer, height[rightPointer]]);
        if (area > maxArea) {
            maxArea = area;
        }
    }

    return maxArea;
};

function calculateArea(pointA: [number, number], pointB: [number, number]) {
    const [pointAx, pointAy] = pointA;
    const [pointBx, pointBy] = pointB;

    return Math.abs(pointAx - pointBx) * Math.min(pointAy, pointBy);
}