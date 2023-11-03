import { useParams, useNavigate } from "react-router-dom";
import React, { useContext } from 'react';
import ButtonStd from "../../ui/ButtonStd";
import Loading from '../../universal/loading/Loading'
import Error from '../../universal/error/Error'
import NothingFound from '../../universal/nothing-found/NothingFound'
import { useTranslation } from "react-i18next";
import QueryBodyBaseType from './query-body/QueryBodyBaseType';
import QueryBodyMemberProcedure from './query-body/QueryBodyMemberProcedure';
import QueryBodyPropertie from './query-body/QueryBodyPropertie';
import { useGetAllBaseTypes } from "../../../custom-hooks/basetype-hooks/useGetAllBaseTypes";
import { useGetAllProperties } from "../../../custom-hooks/propertie-hooks/useGetAllProperties";
import { useGetAllMemberProcedures } from "../../../custom-hooks/memberprocedure-hooks/useGetAllMemberProcedures";
import { observer } from "mobx-react-lite";
import { SearchFilterStoreContext } from "../../Router";


const BaseTypesSearchResult = () => {
	const { t, i18n } = useTranslation();
	const { searchInput } = useParams('')
	const navigate = useNavigate();
	const searchFilterStore = useContext(SearchFilterStoreContext);

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
			</div>
				<div>
					<div>
						<QueryBodyBaseType data={dataGetAllBaseTypes} searchInput={searchInput} searchFilter={searchFilterStore.getSearchFilter()}/>
					</div>
					<div>
						<QueryBodyPropertie data={dataGetAllProperties} dataBaseType={dataGetAllBaseTypes} searchInput={searchInput} searchFilter={searchFilterStore.getSearchFilter()}/>
					</div>
					<div>
						<QueryBodyMemberProcedure data={dataGetAllMemberProcedures} dataBaseType={dataGetAllBaseTypes} searchInput={searchInput} searchFilter={searchFilterStore.getSearchFilter()}/>
					</div>
				</div>
		</div>

	)

}

export default observer(BaseTypesSearchResult)

