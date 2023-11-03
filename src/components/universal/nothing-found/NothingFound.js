import { useTranslation } from "react-i18next";
import React from 'react';
import styles from './NothingFound.module.css'

const NothingFound = () => {
	const { t, i18n } = useTranslation();

  return (
	<div className={styles.nothingfound}>
	    <h1>{t("nothingfound")}</h1>
	</div>
  )
}

export default NothingFound;