import { useTranslation } from "react-i18next";
import React from 'react';
import styles from './Error.module.css'

const Error = () => {
	const { t, i18n } = useTranslation();

	return (
		<div className={styles.error}>
			<h1>{t("Error")}</h1>
		</div>
	)
}

export default Error;