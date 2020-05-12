import React from 'react';

import {Modal, View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import globalStyles, {colors, fonts} from '../../styles';

const FinalScoreModal = ({isVisible, score, navigation, closeModal}) => {
  const close = () => {
    closeModal();
    navigation.goBack();
  };

  return (
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View>
            <Text style={globalStyles.primaryText}>Your final score:</Text>
            <Text style={styles.scoreText}>{score}</Text>
          </View>
          <TouchableOpacity onPress={close} style={styles.closeButton}>
            <Text style={globalStyles.primaryText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '70%',
    height: '30%',
    padding: 20,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: colors.highlightColor,
    backgroundColor: colors.darkColor,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 100,
    fontFamily: fonts.primaryFont,
    color: colors.lightColor,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: colors.positiveColor,
    paddingVertical: 3,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
});

export default FinalScoreModal;
