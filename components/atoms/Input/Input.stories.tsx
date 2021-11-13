import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as FontAwesomeIcons from 'react-icons/fa';
import Input from './Input';

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    icon: {
      options: Object.keys(FontAwesomeIcons),
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Base = Template.bind({});
Base.args = {
  placeholder: 'Placeholder',
  type: 'text',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'FaRegEnvelope',
  placeholder: 'Placeholder',
  type: 'text',
};
