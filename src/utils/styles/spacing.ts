import { calc } from "@vanilla-extract/css-utils";
import { primitives } from "../../theme/primitives.css";

export const spacing = (index: keyof typeof primitives.spacing.scale) => {
    return calc(primitives.spacing.unit).multiply(primitives.spacing.scale[index]).toString()
}