import React, {useContext} from 'react';

import {FirebaseContext} from '../firebase';

import {View, StyleSheet} from 'react-native';

import {BottomTab} from '../components';

import {colors} from '../styles';

const BottomTabBar = ({state, descriptors, navigation}) => {
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
            accessibilityLabel={options.tabBarAccessibilityLabel}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            text={label}
          />
        );
      })}
      <BottomTab onPress={logOut} text="Log Out" />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabBarBlock: {
    backgroundColor: colors.highlightColor,
    height: 70,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default BottomTabBar;
