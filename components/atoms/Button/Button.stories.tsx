import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'bg-secondary',
  label: 'Button Secondary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button Small',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  primary: true,
  icon: 'FaGoogle',
  label: 'Button',
};
