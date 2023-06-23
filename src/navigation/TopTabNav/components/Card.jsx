import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  PanResponder,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { IconButton, MD3Colors } from "react-native-paper";

const SlidableCard = () => {
  const slideAnimation = useRef(new Animated.Value(0)).current;
  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(0)).current;

  const [slidePosition, setSlidePosition] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const buttonWidth = 60;
  const sensitivity = 50000; // Increase this value for higher sensitivity

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (isSliding) {
          slideAnimation.setValue(gestureState.dx / sensitivity); // Adjust sensitivity by dividing dx value
        }
      },
      onPanResponderGrant: () => {
        setIsSliding(true);
      },
      onPanResponderRelease: (_, gestureState) => {
        setIsSliding(false);
        if (slidePosition === 0 && gestureState.dx < -50) {
          slideToPosition(-buttonWidth);
        } else if (slidePosition === -buttonWidth && gestureState.dx > 50) {
          slideToPosition(0);
        } else {
          slideToPosition(slidePosition);
        }
      },
    })
  ).current;

  const slideToPosition = (position) => {
    Animated.parallel([
      Animated.spring(slideAnimation, {
        toValue: position,
        useNativeDriver: true,
        bounciness: 8,
        speed: 12,
      }),
      Animated.timing(buttonOpacity, {
        toValue: position === -buttonWidth ? 1 : 0,
        duration: position === -buttonWidth ? 200 : 100,
        useNativeDriver: true,
      }),
      Animated.spring(buttonScale, {
        toValue: position === -buttonWidth ? 1 : 0,
        useNativeDriver: true,
        bounciness: 8,
        speed: 12,
      }),
    ]).start(() => {
      setSlidePosition(position);
    });
  };

  const buttonOpacityAnimation = buttonOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const buttonScaleAnimation = buttonScale.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const cardWidth = Dimensions.get("window").width * 0.9;
  const buttonSize = cardWidth * 0.10;

  return (
    <View style={styles.container}>

      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ translateX: slideAnimation }],
            width: cardWidth,
          },
        ]}
        {...panResponder.panHandlers}
      >
        <Text style={styles.cardText}>Slidable Card</Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            opacity: buttonOpacityAnimation,
            transform: [{ scale: buttonScaleAnimation }],
          },
        ]}
      >
        <IconButton
          mode="contained-tonal"
          icon="delete-outline"
          iconColor="white"
          rippleColor="white"
          containerColor="red"
          size={buttonSize}
          onPress={() => console.log("Pressed")}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    height: 60,
    position: 'relative',
    borderRadius: 8,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",

  },
  cardText: {
    fontSize: 16,
  },
  buttonContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    paddingRight: 10,
  },
  button: {
    backgroundColor: "#3f51b5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  textContainer: {
    position: "absolute",
    top: 0,
    alignSelf: "center",
    borderWidth: 0.5,
    paddingHorizontal: 8,
    borderRadius: 20,
    zIndex: 100,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
    fontWeight: 'bold'
  },
});

export default SlidableCard;
