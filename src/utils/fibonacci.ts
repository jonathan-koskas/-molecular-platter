import { drop, range } from "ramda"

export const fibonacci = (start: number, iteration: number) => {
    const steps = range(0, iteration)

    return drop(2, steps.reduce((acc) => {
        return [...acc, acc[acc.length - 1] + acc[acc.length - 2]]
    }, [0, start]))
}