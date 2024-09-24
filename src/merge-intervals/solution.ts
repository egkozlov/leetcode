export function merge(intervals: number[][]): number[][] {
    const result: [number, number][] = [];
    intervals.sort(([aStart], [bStart]) => aStart - bStart);
    intervals.forEach(([intervalStart, intervalEnd]) => {
        const previousInterval = result.pop();
        if (!previousInterval) {
            result.push([intervalStart, intervalEnd]);
            return;
        }

        const [previousIntervalStart, previousIntervalEnd] = previousInterval;
        const isIntervalsOverlapped = intervalStart <= previousIntervalEnd
        if (isIntervalsOverlapped) {
            result.push([previousIntervalStart, Math.max(previousIntervalEnd, intervalEnd)]);
        } else {
            result.push(previousInterval, [intervalStart, intervalEnd]);

        }
    });

    return result;
};