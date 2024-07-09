import { primitives } from "../../theme/primitives.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { semantics } from "../../theme/semantics.css";


export const text = recipe({
    base: {
        fontFamily: primitives.typography.family,
        margin: 0,
        color: semantics.global.color.font,
    },
    variants: {
        type: {
            sm: {
                fontSize: primitives.typography.size[200],
                fontWeight: primitives.typography.weight[300],
            },
            p: {
                fontSize: primitives.typography.size[300],
                fontWeight: primitives.typography.weight[400],
            },
            h5: {
                fontSize: primitives.typography.size[500],
                fontWeight: primitives.typography.weight[400],
            },
            h3: {
                fontSize: primitives.typography.size[700],
                fontWeight: primitives.typography.weight[400],
            },
            h1: {
                fontSize: primitives.typography.size[900],
                fontWeight: primitives.typography.weight[600],
            }
        }
    },
    defaultVariants: {
        type: "p"
    }
})

export type textVariants = RecipeVariants<typeof text>