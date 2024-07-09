import type { Meta, StoryObj } from '@storybook/react'

import { Text } from '@components/text'

const meta: Meta<typeof Text> = {
    component: Text,
};

export default meta

type Story = StoryObj<typeof Text>

export const paragraph: Story = {
    args: {
        children: "Eu aliquyam et delenit et sit et quis vero et. Eleifend sit at amet amet. Sed et ex vel. Sanctus eum dolor lorem nisl sed dolor sadipscing placerat dolor ut nonumy diam ipsum gubergren."
    }
}

export const SectionTitle: Story = {
    args: {
        type: 'h3',
        children: "Lorem Ipsum"
    }
}

export const MainTitle: Story = {
    args: {
        type: 'h1',
        children: "Lorem Ipsum"
    }
}