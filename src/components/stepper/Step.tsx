import { ReactNode } from "react"
import { step } from "./stepper.css"

export type StepProps = {
    children: ReactNode
}

export const Step = ({ children }: StepProps) => {
    return <div className={step}>{children}</div>
}