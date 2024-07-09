import { ReactNode } from "react"
import { stepContent } from "./stepper.css"

export type StepContentProps = {
    children: ReactNode
}

export const StepContent = ({ children }: StepContentProps) => {
    return <div className={stepContent({ disabled: false })}>{children}</div>
}