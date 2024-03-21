
import { action } from '@storybook/addon-actions';
import ActionButton from '../components/ActionButton';
import ICONS_CONFIG from '../constants'

export default {
  title: 'Components/Action Button',
  component: ActionButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    icon: {
      options: Object.keys(ICONS_CONFIG),
      control: {
        type: 'select',
      }
    }
  },
};

const Template = (args) => <ActionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Action',
  icon: '',
  displayType: 'Text only',
  size: 'Default',
  status: 'Default',
  disabled: false,
  onClick: action('Button clicked'),
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Action',
  icon: 'USER_CIRCLE',
  displayType: 'Icon with text',
  size: 'Default',
  status: 'Default',
  disabled: false,
  onClick: action('Button clicked'),
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Action',
  icon: '',
  displayType: 'Text only',
  size: 'Default',
  status: 'Disabled',
  disabled: true,
  onClick: action('Button clicked'),
};

