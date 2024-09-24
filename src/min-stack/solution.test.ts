import { MinStack } from './solution';

it('should return proper min and top values of the stack', () => {
    const stack = new MinStack();
    stack.push(0);
    stack.push(1);
    expect(stack.top()).toBe(1);

    stack.push(0);
    expect(stack.top()).toBe(0);
    expect(stack.getMin()).toBe(0);

    stack.pop();
    expect(stack.getMin()).toBe(0);
    expect(stack.top()).toBe(1);
});

it('should return proper min and top values of the stack', () => {
    const stack = new MinStack();
    stack.push(-2);
    stack.push(0);
    stack.push(-3);
    expect(stack.top()).toBe(-3);
    expect(stack.getMin()).toBe(-3);

    stack.pop()
    expect(stack.top()).toBe(0);
    expect(stack.getMin()).toBe(-2);
});