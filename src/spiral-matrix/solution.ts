export function spiralOrder(matrix: number[][]): number[] {
    let xMinBoundary = 0;
    let xMaxBoundary = matrix.length - 1;
    let yMinBoundary = 0;
    let yMaxBoundary = matrix[0].length - 1;

    let currentXPointer = xMinBoundary;
    let currentYPointer = yMinBoundary;
    const result = [];
    let direction = 'right';
    let isTheLastStep = false;
    while (!isTheLastStep) {
        if (direction === 'right') {
            for (let y = currentYPointer; y <= yMaxBoundary; y++) {
                result.push(matrix[currentXPointer][y]);
            }
            isTheLastStep = xMinBoundary === xMaxBoundary;
            xMinBoundary += 1;
            currentYPointer = yMaxBoundary;
            currentXPointer = xMinBoundary;
            direction = 'down';
        } else if (direction === 'down') {
            for (let x = currentXPointer; x <= xMaxBoundary; x++) {
                result.push(matrix[x][currentYPointer]);
            }
            isTheLastStep = yMaxBoundary === yMinBoundary;
            yMaxBoundary -= 1;
            currentXPointer = xMaxBoundary;
            currentYPointer = yMaxBoundary;
            direction = 'left';
        } else if (direction === 'left') {
            for (let y = currentYPointer; y >= yMinBoundary; y--) {
                result.push(matrix[currentXPointer][y]);
            }
            isTheLastStep = xMinBoundary === xMaxBoundary;
            xMaxBoundary -= 1;
            currentXPointer = xMaxBoundary;
            currentYPointer = yMinBoundary;
            direction = 'top';
        } else if (direction === 'top') {
            for (let x = currentXPointer; x >= xMinBoundary; x--) {
                result.push(matrix[x][currentYPointer]);
            }
            isTheLastStep = yMaxBoundary === yMinBoundary;
            yMinBoundary += 1;
            currentXPointer = xMinBoundary;
            currentYPointer = yMinBoundary;
            direction = 'right';
        }
    }

    return result;
};