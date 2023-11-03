import React from 'react';
import QueryBodyScript from './query-body/QueryBodyScript';
import Loading from '../../universal/loading/Loading'
import Error from '../../universal/error/Error'
import NothingFound from '../../universal/nothing-found/NothingFound'
import { useTranslation } from 'react-i18next';
import { useGetAllScripts } from '../../../custom-hooks/script-hooks/useGetAllScripts';

const Scripts = () => {
  const { t, i18n } = useTranslation();

  const { data, isLoading, isFetching, isError } = useGetAllScripts()

  if (isLoading) return <Loading />
  if (isFetching) return <Loading />
  if (isError) return <Error />
  if (!data) return <NothingFound />
  return (
    <div>
      <h3>
        <b>{t("scripts")}</b>
      </h3>
      <QueryBodyScript data={data} />
    </div>
  )
}

export default Scripts;