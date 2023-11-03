import { useTranslation } from "react-i18next";
import React from 'react';
import styles from './PageNotFound.module.css'

const PageNotFound = () => {
	const { t, i18n } = useTranslation();

  return (
	<div className={styles.pagenotfound}>
	    <h1>{t("pagenotfound")}</h1>
	</div>
  )
}

export default PageNotFound;