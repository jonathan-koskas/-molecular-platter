import classNames from "classnames"
import { text, textVariants } from "./text.css"

export type TextProps = textVariants & {
    children?: string
    className?: string
}

export const Text = ({ children, className, type }: TextProps) => {
    const Tag: keyof JSX.IntrinsicElements = type && type !== 'sm' ? `${type}` : 'p'

    return <Tag className={classNames(text({ type }), className)}>{children}</Tag>
}