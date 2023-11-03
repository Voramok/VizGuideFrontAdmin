import { useTranslation } from "react-i18next";
import React, { useState } from 'react';
import InputSearch from '../../../../ui/InputSearch';
import { useNavigate } from "react-router-dom";
import getStorageData from "../../../../../custom-hooks/getStorageData"


const MainSearchForm = () => {
	const { t, i18n } = useTranslation();

	const [searchInput, setSearchInput] = useState('');
	const navigate = useNavigate();

	const searchBaseType = (e) => {
		if (e.key === 'Enter' && searchInput.length > 0) {
			navigate('/basetypes/search/' + searchInput);
		}
	}

	const searchScript = (e) => {
		if (e.key === 'Enter' && searchInput.length > 0) {
			navigate('/scripts/search/' + searchInput);
		}
	}

	const handleChange = (e) => {
		setSearchInput(e.target.value);
	};

	return (
		<div>
			{getStorageData("currentPage") === "/basetypes" ? (
				<div onKeyDown={searchBaseType}>
					<InputSearch placeholder={t("search")}
						value={searchInput} onChange={handleChange} />
				</div>
			) : (
				<div onKeyDown={searchScript}>
					<InputSearch placeholder={t("search")}
						value={searchInput} onChange={handleChange} />
				</div>
			)}

		</div>
	)
}

export default MainSearchForm;
