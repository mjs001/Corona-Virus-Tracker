import React, { useState } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import loading from "../../assets/loading2.gif";
import CountUp from "react-countup";
import classNames from "classnames";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return <img src={loading} alt="loading" />;
	}

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={classNames(styles.card, styles.infected)}
				>
					<CardContent className={styles.styleCard}>
						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>
						<Typography variant="h5">
							<CountUp
								start={0}
								end={confirmed.value}
								duration={3}
								separator={","}
							/>
						</Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					spacing={3}
					md={3}
					className={classNames(styles.card, styles.recovered)}
				>
					<CardContent className={styles.styleCard}>
						<Typography color="textSecondary" gutterBottom>
							Recovered
						</Typography>
						<Typography variant="h5">
							<CountUp
								start={0}
								end={recovered.value}
								duration={2.5}
								separator={","}
							/>
						</Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">
							Number of recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>

				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					spacing={3}
					className={classNames(styles.card, styles.deaths)}
				>
					<CardContent className={styles.styleCard}>
						<Typography color="textSecondary" gutterBottom>
							Deaths
						</Typography>
						<Typography variant="h5">
							<CountUp
								start={0}
								end={deaths.value}
								duration={2}
								separator={","}
							/>
						</Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant="body2">
							Number of deaths caused by COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
