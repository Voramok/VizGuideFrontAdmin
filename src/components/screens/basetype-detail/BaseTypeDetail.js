import { useParams, useNavigate } from "react-router-dom";
import React from 'react';
import ButtonStd from "../../ui/ButtonStd";
import Loading from '../../universal/loading/Loading'
import Error from '../../universal/error/Error'
import NothingFound from '../../universal/nothing-found/NothingFound'
import { useTranslation } from "react-i18next";
import QueryBodyGetPropertiesByBaseTypeId from "./query-body/QueryBodyProperties";
import QueryBodyMemberProcedure from "./query-body/QueryBodyMemberProcedure";
import { useGetAllBaseTypes } from "../../../custom-hooks/basetype-hooks/useGetAllBaseTypes";
import { useGetAllProperties } from "../../../custom-hooks/propertie-hooks/useGetAllProperties";
import { useGetAllMemberProcedures } from "../../../custom-hooks/memberprocedure-hooks/useGetAllMemberProcedures";
import QueryBodyBaseType from "./query-body/QueryBodyBaseType"

const BaseTypeDetail = () => {
	const { t, i18n } = useTranslation();
	const { id } = useParams('')
	const navigate = useNavigate();

	const {
		isFetching: fetchingGetAllBaseTypes, 
		error: errorGetAllBaseTypes,
		data: dataGetAllBaseTypes,
	} = useGetAllBaseTypes()

	const {
		isFetching: fetchingGetAllProperties,
		error: errorGetAllProperties,
		data: dataGetAllProperties,
	} = useGetAllProperties()

	const {
		isFetching: fetchingGetAllMemberProcedures,
		error: errorGetAllMemberProcedures,
		data: dataGetAllMemberProcedures,
	} = useGetAllMemberProcedures()

	if (fetchingGetAllMemberProcedures) return <Loading />
	if (fetchingGetAllProperties) return <Loading />
	if (fetchingGetAllBaseTypes) return <Loading />

	if (errorGetAllBaseTypes) return <Error />
	if (errorGetAllProperties) return <Error />
	if (errorGetAllMemberProcedures) return <Error />

	if (!dataGetAllProperties) return <NothingFound />
	if (!dataGetAllBaseTypes) return <NothingFound />
	if (!dataGetAllMemberProcedures) return <NothingFound />
	return (
		<div>
			<div>
				<ButtonStd text={t("back")} onClick={() => navigate(-1)} />
				<QueryBodyBaseType data={dataGetAllBaseTypes} id={id}/>
			</div>
			<div>
				<QueryBodyGetPropertiesByBaseTypeId data={dataGetAllProperties} basetypeid={id} />
			</div>
			<div>
				<QueryBodyMemberProcedure data={dataGetAllMemberProcedures} basetypeid={id} />
			</div>
		</div>
	)
}

export default BaseTypeDetail
