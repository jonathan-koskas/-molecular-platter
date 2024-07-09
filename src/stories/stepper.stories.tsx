import type { Meta, StoryObj } from '@storybook/react'

import { Stepper } from '@components/stepper'
import { Text } from '@components/text';
import { StepLabel } from '@components/stepper/StepLabel';
import { Step } from '@components/stepper/Step';
import { StepContent } from '@components/stepper/StepContent';

const meta: Meta<typeof Stepper> = {
    component: Stepper,
};

export default meta

type Story = StoryObj<typeof Stepper>

const data = [{
    title: 'Step 1',
    content: 'Tincidunt et at accusam. Dolore nobis dolor. Consequat augue duis dolor consetetur diam diam laoreet nibh tation amet amet duis takimata. Ut ut gubergren et eos takimata labore blandit sit sea ipsum. Eirmod sed voluptua feugiat tempor est eros sed lorem rebum sea dolor.'
}, {
    title: 'Step 2',
    content: 'Diam in nonumy adipiscing vero elitr erat amet sit dolore stet consetetur nulla elitr invidunt duis et elitr. Sanctus elitr feugiat voluptua no at ea at stet tempor et sanctus. Sed clita sea ut et voluptua minim diam et illum. Ipsum sadipscing nonumy et et dolores dolore ipsum justo et sadipscing dolore sed labore. Ipsum nostrud eos amet takimata at at duis lorem cum. Ut blandit nonumy ipsum duo lobortis. Et at dolores lorem amet.'
}, {
    title: 'Step 3',
    content: 'Ipsum sadipscing et aliquyam esse diam qui sea consequat qui labore dolor amet diam sit dolores facilisis diam dolores. Stet diam amet. Dignissim labore aliquyam veniam dolor diam et et ullamcorper magna lorem at. Et dolore sadipscing rebum diam duo hendrerit sanctus sea labore.'
}]

export const base: Story = {
    args: {
        children: data.map(({ title, content }) =>
            <Step key={title}>
                <StepLabel>{title}</StepLabel>
                <StepContent>
                    <Text>{content}</Text>
                </StepContent>
            </Step>)
    }
}
