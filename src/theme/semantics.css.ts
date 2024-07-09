import { createGlobalTheme } from "@vanilla-extract/css";
import { primitives } from "./primitives.css";

export const semantics = createGlobalTheme(':root', {
    global: {
        color: {
            font: primitives.color.neutral[700],
        }
    },
    primary: {
        color: {
            500: primitives.color.red[500]
        }
    }
})