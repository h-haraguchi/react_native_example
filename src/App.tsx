/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component} from "react";
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {Provider, Subscribe, Container} from 'unstated';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android:
		'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

type SubTextState = {
	subText: string
}

export class SubTextContainer extends Container<SubTextState> {
	state = {subText: 'あばばばばば'};
	changeSubText = (text: string) => this.setState({ subText: text });
}

export const SubText = () => (
	<Subscribe to={[SubTextContainer]}>
		{(container: SubTextContainer) => (
			<View>
				<Text>{container.state.subText}</Text>
				<TextInput
					value={container.state.subText}
					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
					onChangeText={text => container.changeSubText(text)}
				/>
			</View>
		)}
	</Subscribe>
);

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>To get started, edit App.js</Text>
				<Text style={styles.instructions}>{instructions}</Text>
				<Provider>
					<SubText />
				</Provider>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
