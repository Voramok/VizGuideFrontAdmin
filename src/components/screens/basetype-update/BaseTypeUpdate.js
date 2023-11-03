import { useParams, useNavigate } from "react-router-dom";
import React from 'react';
import ButtonStd from "../../ui/ButtonStd";
import { useEffect } from "react";
import Loading from '../../universal/loading/Loading'
import Error from '../../universal/error/Error'
import NothingFound from '../../universal/nothing-found/NothingFound'
import { useTranslation } from "react-i18next";
import QueryBodyBaseType from "./query-body/QueryBodyBaseType";
import QueryBodyPropertie from "./query-body/QueryBodyPropertie";
import QueryBodyMemberProcedure from "./query-body/QueryBodyMemberProcedure";
import PropertieCreateForm from "../../universal/items/propertie/propertie-create-form/PropertieCreateForm";
import MemberProcedureCreateForm from "../../universal/items/memberprocedure/memberprocedure-create-form/MemberProcedureCreateForm";
import { useGetBaseTypeById } from "../../../custom-hooks/basetype-hooks/useGetBaseTypeById";
import { useGetAllBaseTypes } from "../../../custom-hooks/basetype-hooks/useGetAllBaseTypes";
import { useGetMemberProceduresByBaseTypeId } from "../../../custom-hooks/memberprocedure-hooks/useGetMemberProceduresByBaseTypeId";
import { useGetPropertiesByBaseTypeId } from "../../../custom-hooks/propertie-hooks/useGetPropertiesByBaseTypeId";

const BaseTypeUpdate = () => {
	const { t, i18n } = useTranslation();
	const { id } = useParams('')
	const navigate = useNavigate();

	const {
		isFetching: fetchingGetBaseTypeById,
		error: errorGetBaseTypeById,
		data: dataGetBaseTypeById,
		refetch,
	} = useGetBaseTypeById(id)

	const {
		isFetching: fetchingGetAllBaseTypes,
		error: errorGetAllBaseTypes,
		data: dataGetAllBaseTypes,
	} = useGetAllBaseTypes()

	const {
		isFetching: fetchingGetPropertiesByBaseTypeId,
		error: errorGetPropertiesByBaseTypeId,
		data: dataGetPropertiesByBaseTypeId,
	} = useGetPropertiesByBaseTypeId(id)

	const {
		isFetching: fetchingGetMemberProceduresByBaseTypeId,
		error: errorGetMemberProceduresByBaseTypeId,
		data: dataGetMemberProceduresByBaseTypeId,
	} = useGetMemberProceduresByBaseTypeId(id)

	useEffect(() => {
		refetch()
	}, [id])

	if (fetchingGetBaseTypeById) return <Loading />
	if (errorGetBaseTypeById) return <Error />
	if (!dataGetBaseTypeById) return <NothingFound />

	if (fetchingGetPropertiesByBaseTypeId) return <Loading />
	if (errorGetPropertiesByBaseTypeId) return <Error />
	if (!dataGetPropertiesByBaseTypeId) return <NothingFound />

	if (fetchingGetMemberProceduresByBaseTypeId) return <Loading />
	if (errorGetMemberProceduresByBaseTypeId) return <Error />
	if (!dataGetMemberProceduresByBaseTypeId) return <NothingFound />

	if (fetchingGetAllBaseTypes) return <Loading />
	if (errorGetAllBaseTypes) return <Error />
	if (!dataGetAllBaseTypes) return <NothingFound />

	return (
		<div>
			<div>
				<ButtonStd text={t("back")} onClick={() => navigate(-1)} />
			</div>
			<div>
				<QueryBodyBaseType data={dataGetBaseTypeById} />
			</div>
			<h4></h4>
			<div>
				<PropertieCreateForm currBaseTypeData={dataGetBaseTypeById[0]} allBaseTypeData={dataGetAllBaseTypes} />
			</div>
			<h4></h4>
			<div>
				<MemberProcedureCreateForm currBaseTypeData={dataGetBaseTypeById[0]} allBaseTypeData={dataGetAllBaseTypes} />
			</div>
			<h5>
				<b>{t("properties")}</b>
			</h5>
			<div>
				<QueryBodyPropertie propertieData={dataGetPropertiesByBaseTypeId} baseTypeData={dataGetAllBaseTypes} />
			</div>
			<h5>
				<b>{t("memberprocedures")}</b>
			</h5>
			<div>
				<QueryBodyMemberProcedure memberProcedureData={dataGetMemberProceduresByBaseTypeId} baseTypeData={dataGetAllBaseTypes} />
			</div>
		</div>
	)
}

export default BaseTypeUpdate

