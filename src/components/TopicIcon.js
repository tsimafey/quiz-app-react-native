import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {colors} from '../styles';

const TopicIcon = ({name}) => {
  return <Icon name={name} size={100} color={colors.highlightColor} />;
};

export default TopicIcon;
