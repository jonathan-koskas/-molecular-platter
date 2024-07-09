import { ReactNode } from "react"

export type StepperProps = {
    children: ReactNode
    className?: string
}

export const Stepper = ({ children, className }: StepperProps) => {
    return <div className={className}>{children}</div>
}