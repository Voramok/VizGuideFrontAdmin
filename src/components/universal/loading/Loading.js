import { useTranslation } from "react-i18next";
import React from 'react';
import styles from './Loading.module.css'

const Loading = () => {
	const { t, i18n } = useTranslation();

  return (
	<div className={styles.loading}>
	    <h1>{t("loading")}...</h1>
	</div>
  )
}

export default Loading;