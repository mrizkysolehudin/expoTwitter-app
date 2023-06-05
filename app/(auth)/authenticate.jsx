import {
	View,
	Text,
	Alert,
	Pressable,
	ActivityIndicator,
	TextInput,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { confirmAuth } from "../../utils/api";

const AuthenticateScreen = () => {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [code, setCode] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleConfirm = async () => {
		setIsLoading(true);

		try {
			const data = {
				email,
				emailToken: code,
			};

			await confirmAuth(data);

			setIsLoading(false);
			router.push({ pathname: "/feed" });
		} catch (error) {
			setIsLoading(false);
			Alert.alert(error.message);
		}
	};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "white",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}>
			<View
				style={{
					flex: 1 / 2,
					width: "80%",
					marginHorizontal: 20,
					alignItems: "center",
				}}>
				{isLoading ? (
					<ActivityIndicator />
				) : (
					<>
						<Text style={{ fontSize: 30, fontWeight: 600 }}>
							Confirm your email
						</Text>

						<TextInput
							value={email}
							onChangeText={setEmail}
							placeholder="enter email..."
							style={{
								borderWidth: 1,
								width: "80%",
								borderColor: "#1C9BF0",
								paddingHorizontal: 10,
								borderRadius: 3,
								marginTop: 20,
								paddingBottom: 1,
								fontSize: 17,
							}}
						/>

						<TextInput
							value={code}
							onChangeText={setCode}
							placeholder="enter code..."
							style={{
								borderWidth: 1,
								width: "80%",
								borderColor: "#1C9BF0",
								paddingHorizontal: 10,
								borderRadius: 3,
								marginTop: 8,
								paddingBottom: 1,
								fontSize: 17,
							}}
						/>

						<Pressable
							onPress={handleConfirm}
							style={{
								backgroundColor: "#1C9BF0",
								width: "80%",
								alignItems: "center",
								height: 32,
								justifyContent: "center",
								paddingBottom: 2,
								borderRadius: 3,
								marginTop: 20,
							}}>
							<Text
								style={{
									color: "white",
									fontSize: 17,
									fontWeight: 500,
								}}>
								Confirm
							</Text>
						</Pressable>
					</>
				)}
			</View>
		</View>
	);
};

export default AuthenticateScreen;
