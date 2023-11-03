import { useTranslation } from "react-i18next";
import React from 'react';
import styles from './NothingFoundSmall.module.css'

const NothingFoundSmall = () => {
	const { t, i18n } = useTranslation();

	return (
		<h4 className={styles.nothingfound}>{t("nothingfound")}</h4>
	)
}

export default NothingFoundSmall;
