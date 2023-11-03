import React from 'react';
import QueryBodyGetAllBaseType from './query-body/QueryBodyBaseType';
import Loading from '../../universal/loading/Loading'
import Error from '../../universal/error/Error'
import NothingFound from '../../universal/nothing-found/NothingFound'
import { useTranslation } from 'react-i18next';
import { useGetAllBaseTypes } from '../../../custom-hooks/basetype-hooks/useGetAllBaseTypes';

const BaseTypes = () => {
  const { t, i18n } = useTranslation();

  const { data, isFetching, isError } = useGetAllBaseTypes()

  if (isFetching) return <Loading />
  if (isError) return <Error />
  if (!data) return <NothingFound />
  return (
    <div>
      <h3>
        <b>{t("basetypes")}</b>
      </h3>
      <QueryBodyGetAllBaseType data={data} />
    </div>

  )
}

export default BaseTypes;


