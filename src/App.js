import React from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
class App extends React.Component {
	state = {
		data: {},
		country: "",
	};
	async componentDidMount() {
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData });
	}
	handleCountryChange = async (country) => {
		const fetchedData = await fetchData(country);
		this.setState({ data: fetchedData, country: country });
	};
	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<h1>Corona Virus Tracker:</h1>
				<Cards data={data} />
				<h2>Choose a Country Below:</h2>
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}

export default App;
