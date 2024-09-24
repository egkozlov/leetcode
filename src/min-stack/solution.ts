export class MinStack {
    private stack: { value: number, minValue: number }[];
    constructor() {
        this.stack = [];
    }

    push(val: number): void {
        const internalTop = this.internalTop();
        const previousMin = internalTop ? this.getMin() : val;
        const minValue = previousMin > val ? val : previousMin;

        this.stack.push({ value: val, minValue });
    }

    pop(): void {
        this.stack.pop();
    }

    top(): number {
        const internalTop = this.internalTop();
        return internalTop?.value || 0;
    }

    getMin(): number {
        const internalTop = this.internalTop();
        return internalTop?.minValue || 0;
    }

    private internalTop(): { value: number, minValue: number } | null {
        return this.stack[this.stack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */