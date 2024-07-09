import { fibonacci } from "../utils/fibonacci.ts"

const getSpacingScale = () => {
    return fibonacci(0.25, 7).reduce((acc, multiplier, index) => ({
        ...acc,
        [(index + 1) * 100]: multiplier.toString(),
    }), {})
}


console.debug(getSpacingScale())