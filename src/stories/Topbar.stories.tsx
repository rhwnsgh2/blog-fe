import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { TopBarContainer } from '../components/topBar/topBar';

export default {
  title: 'TopBar',
  component: TopBarContainer,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof TopBarContainer>;

const Template: ComponentStory<typeof TopBarContainer> = () => {
  return <TopBarContainer />;
};

export const lightTheme = Template.bind({});
export const darkTheme = Template.bind({});

darkTheme.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.findByText('dark');

  await userEvent.click(button);
};
