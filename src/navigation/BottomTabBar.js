import React, {useContext} from 'react';

import {FirebaseContext} from '../firebase';

import {View, StyleSheet, Platform} from 'react-native';

import {BottomTab} from '../components';

import {colors} from '../styles';

const BottomTabBar = ({state, descriptors, navigation, icon}) => {
  const firebase = useContext(FirebaseContext);

  const logOut = () => {
    firebase.doLogOut();
  };

  return (
    <View style={styles.bottomTabBarBlock}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BottomTab
            key={route.key}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            text={label}
            icon={options.icon}
          />
        );
      })}
      <BottomTab onPress={logOut} icon="ios-walk" text="Log Out" />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBarBlock: {
    backgroundColor: colors.highlightColor,
    height: 85,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: Platform.OS === 'ios' ? 15 : 0,
  },
});

export default BottomTabBar;
