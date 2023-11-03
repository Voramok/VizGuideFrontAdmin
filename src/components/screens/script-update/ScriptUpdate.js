import { useParams, useNavigate } from "react-router-dom";
import React from 'react';
import ButtonStd from "../../ui/ButtonStd";
import { useEffect } from "react";
import Loading from '../../universal/loading/Loading'
import Error from '../../universal/error/Error'
import NothingFound from '../../universal/nothing-found/NothingFound'
import { useTranslation } from "react-i18next";
import ScriptUpdateForm from "../../universal/items/script/script-update-form/ScriptUpdateForm"
import { useGetScriptById } from '../../../custom-hooks/script-hooks/useGetScriptById';

const ScriptUpdate = () => {
	const { t, i18n } = useTranslation();
	const { id } = useParams('')
	const navigate = useNavigate();

	const {
		isFetching,
		error,
		data,
		refetch
	} = useGetScriptById(id)

	useEffect(() => {
		refetch()
	}, [id])

	if (isFetching) return <Loading />
	if (error) return <Error />
	if (!data) return <NothingFound />

	return (
		<div>
			<div>
				<ButtonStd text={t("back")} onClick={() => navigate(-1)} />
			</div>
			<div>
				<ScriptUpdateForm data={data[0]}/>
			</div>
		</div>
	)
}

export default ScriptUpdate

