import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { primitives } from "../../theme/primitives.css";
import { semantics } from "../../theme/semantics.css";
import { recipe } from "@vanilla-extract/recipes";
import { spacing } from "@utils/styles/spacing";

const badgeSize = createVar()
const stepPathBorder = createVar()

export const step = style({
    vars: {
        [badgeSize]: '1em',
        [stepPathBorder]: `2px solid ${primitives.color.neutral[300]}`,
    },
})

export const stepLabel = style({
    display: "flex",
    alignItems: 'center',
})

export const stepContent = recipe({
    base: {
        borderLeft: stepPathBorder,
        padding: spacing("300"),
        marginLeft: calc(badgeSize).divide(2).toString()
    },
    variants: {
        disabled: {
            false: {
                borderLeftStyle: 'solid'
            },
            true: {
                borderLeftStyle: 'dotted'
            }
        }
    }
})

export const stepLabelBadge = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: badgeSize,
    height: badgeSize,
    border: stepPathBorder,
    borderRadius: '50%',
    marginBlock: spacing("200"),
    ':before': {
        position: "absolute",
        display: 'block',
        borderRadius: '50%',
        width: calc(badgeSize).divide(2).toString(),
        height: calc(badgeSize).divide(2).toString(),
        backgroundColor: semantics.primary.color[500],
        content: ""
    }
})

export const stepLabelText = style({
    paddingInline: spacing("300"),
})

