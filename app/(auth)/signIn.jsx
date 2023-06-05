import {
	View,
	Text,
	Alert,
	ActivityIndicator,
	TextInput,
	Pressable,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { signInAuth } from "../../utils/api";

const SignInScreen = () => {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSignIn = async () => {
		if (email === "") {
			Alert.alert("email is required");
			return;
		}

		setIsLoading(true);

		try {
			await signInAuth({ email });

			setIsLoading(false);
			router.push({ pathname: "/authenticate", params: { email } });
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
						<Text style={{ fontSize: 27, fontWeight: 600 }}>
							Sign in or create an account
						</Text>

						<TextInput
							value={email}
							onChangeText={setEmail}
							placeholder="enter email"
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

						<Pressable
							onPress={handleSignIn}
							style={{
								backgroundColor: "#1C9BF0",
								width: "80%",
								alignItems: "center",
								height: 30,
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
								Sign in
							</Text>
						</Pressable>
					</>
				)}
			</View>
		</View>
	);
};

export default SignInScreen;
