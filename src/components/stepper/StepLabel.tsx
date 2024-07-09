import { Text } from "@components/text"
import { stepLabel, stepLabelBadge, stepLabelText } from "./stepper.css"

export type StepLabelProps = {
    children: string
}

export const StepLabel = ({ children }: StepLabelProps) => {
    return <div className={stepLabel}>
        <div className={stepLabelBadge}></div>
        <Text className={stepLabelText} type="h5">{children}</Text>
    </div>
}