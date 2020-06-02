const calculatePoints = async (firebase, authUser, topic) => {
  let pointsCounter = await 0;

  await firebase
    .user(authUser.uid)
    .collection('results')
    .doc(`${topic}`)
    .get()
    .then((snapshot) => {
      const data = snapshot.data();
      for (let i = 1; i <= 10; i++) {
        if (data[`level-${i}`]) {
          pointsCounter = pointsCounter + data[`level-${i}`];
        } else {
          break;
        }
      }
    })
    .then(() => {
      firebase.user(authUser.uid).collection('results').doc(`${topic}`).update({
        points: pointsCounter,
      });
    });

  return await pointsCounter;
};

const calculateLevel = async (firebase, authUser, topic) => {
  const valuesArray = await [30, 70, 125, 190, 260, 330, 400, 470, 540];
  const counter = await calculatePoints(firebase, authUser, topic);
  console.log(counter);
  if (counter < valuesArray[0]) {
    return 1;
  } else if (counter >= valuesArray[0] && counter < valuesArray[1]) {
    return 2;
  } else if (counter < valuesArray[2]) {
    return 3;
  } else if (counter < valuesArray[3]) {
    return 4;
  } else if (counter < valuesArray[4]) {
    return 5;
  } else if (counter < valuesArray[5]) {
    return 6;
  } else if (counter < valuesArray[6]) {
    return 7;
  } else if (counter < valuesArray[7]) {
    return 8;
  } else if (counter < valuesArray[8]) {
    return 9;
  } else if (counter > valuesArray[8]) {
    return 10;
  }
};

const changeLevel = async (firebase, authUser, topic, level) => {
  const newLevel = await calculateLevel(firebase, authUser, topic);
  if (newLevel > level) {
    await firebase
      .user(authUser.uid)
      .collection('results')
      .doc(`${topic}`)
      .update({
        level: newLevel,
      });
  }
};

export default changeLevel;
