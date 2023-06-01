import { Text, View } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const IconButton = ({ name, text }) => {
	return (
		<View style={{ flexDirection: "row", alignItems: "center" }}>
			<EvilIcons name={name} size={22} color="gray" />
			<Text style={{ fontSize: 12, color: "gray" }}>{text}</Text>
		</View>
	);
};

export default IconButton;
