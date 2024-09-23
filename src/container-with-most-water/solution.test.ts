import { maxArea } from './solution';

it('should calculate max area', () => {
    const result = maxArea([1,8,6,2,5,4,8,3,7]);

    expect(result).toBe(49);
});

it('should calculate max area', () => { 
    const result = maxArea([1,1]);

    expect(result).toBe(1);
});

it('should calculate max area', () => { 
    const result = maxArea([1,2,1]);

    expect(result).toBe(2);
});
