import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  PanResponder,
  Animated,
} from "react-native";
import { IconButton, Text, Surface } from "react-native-paper";
import { colors } from "../utils/colors";

const TopicCard = ({ tag, topic = "Topic Here" }) => {
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

  const textContainerTranslateX = slideAnimation.interpolate({
    inputRange: [-buttonWidth, 0],
    outputRange: [-buttonWidth, 0],
    extrapolate: "clamp",
  });

  const cardWidth = Dimensions.get("window").width * 0.9;
  const buttonSize = cardWidth * 0.1;
  let backgroundColor;
  let borderColor;
  let method;

  if (tag === "pomodoro") {
    backgroundColor = colors.violet;
    borderColor = colors.violet;
    method = "Pomodoro Technique";
  } else if (tag === "spaced repetition") {
    backgroundColor = colors.beige
    borderColor = colors.beige
    method = "Spaced Repetition";
  } else if (tag === "active recall") {
    backgroundColor = colors.green;
    borderColor = colors.green;
    method = "Active Recall";
  } else if (tag === "pq4r") {
    backgroundColor = colors.skyBlue;
    borderColor = colors.skyBlue;
    method = "PQ4R Method";
  } else if (tag === "sq3r") {
    backgroundColor = colors.purple;
    borderColor = colors.purple;
    method = "SQ3R Method";
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.textContainer,
          {
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            transform: [{ translateX: textContainerTranslateX }],
          },
        ]}
      >
        <Text variant="labelSmall" style={styles.methodText}>
          {method}
        </Text>
      </Animated.View>
      <Animated.View style={styles.cardContainer}>
        <Surface
        elevation={2}
          style={[
              styles.card,
              {
                transform: [{ translateX: slideAnimation }],
                width: cardWidth,
                borderColor: borderColor,
                shadowColor: borderColor
              },
            ]}
            {...panResponder.panHandlers}
        >
          
            <Text variant="titleMedium" numberOfLines={1} ellipsizeMode="tail">
              {topic}
            </Text>
        </Surface>
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
          rippleColor="white"
          containerColor="red"
          iconColor="white"
          size={buttonSize}
          onPress={() => console.log("Pressed")}
        />
      </Animated.View>
    </View>
  );
};

export default TopicCard;

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    paddingRight: 10,
  },
  cardContainer: {
    alignSelf: "center",
    marginVertical: 5,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 2,
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    position: "relative",
    flexDirection: "row",
    minHeight: 70,
  },
  methodText: {
    color: colors.white,
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
});
