import React, { useContext } from 'react';
import QueryBodyScript from './query-body/QueryBodyScript';
import Loading from '../../universal/loading/Loading'
import Error from '../../universal/error/Error'
import NothingFound from '../../universal/nothing-found/NothingFound'
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonStd from '../../ui/ButtonStd';
import { useGetAllScripts } from '../../../custom-hooks/script-hooks/useGetAllScripts';
import { SearchFilterStoreContext } from "../../Router";
import { observer } from 'mobx-react-lite';

const ScriptsSearchResult = () => {
  const { t, i18n } = useTranslation();
  const { searchInput } = useParams('')
  const navigate = useNavigate();
  const searchFilterStore = useContext(SearchFilterStoreContext);

  const { data, isLoading, isFetching, isError } = useGetAllScripts()

  if (isLoading) return <Loading />
  if (isFetching) return <Loading />
  if (isError) return <Error />
  if (!data) return <NothingFound />
  return (
    <div>
      <div>
        <ButtonStd text={t("back")} onClick={() => navigate(-1)} />
      </div>
      <QueryBodyScript data={data} searchInput={searchInput} searchFilter={searchFilterStore.getSearchFilter()}/>
    </div>
  )
}

export default observer(ScriptsSearchResult);


