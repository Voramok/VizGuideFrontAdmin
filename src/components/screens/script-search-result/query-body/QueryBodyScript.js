import NothingFound from '../../../universal/nothing-found/NothingFound';
import ScriptItem from '../../../universal/items/script/script-item/ScriptItem';
import { observer } from "mobx-react-lite";
import ScriptCreateForm from '../../../universal/items/script/script-create-form/ScriptCreateForm';
import { EditModeStoreContext } from "../../../Router";
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const QueryBodyScript = ({ data, searchInput, searchFilter }) => {
    const editModeStore = useContext(EditModeStoreContext);
    const [currData, setCurrData] = useState([])
    const { t, i18n } = useTranslation();

    useEffect(() => {
        setCurrData([])
        filterData(searchInput, data, searchFilter)
    }, [searchInput, searchFilter])

    const filterData = (searchInput, data, searchFilter) => {
        const lowerCased = searchInput.toLowerCase();
        {
            switch (searchFilter) {
                case "bydescription":
                    data.filter(b => b.description.toLowerCase().includes(lowerCased)).map(filteredData => (
                        setCurrData(previous => previous.concat(filteredData))
                    ))
                    break
                default:
                    data.filter(b => b.name.substring(0, lowerCased.length).toLowerCase().includes(lowerCased)).map(filteredData => (
                        setCurrData(previous => previous.concat(filteredData))
                    ))
                    break
            }
        }
    }

    return (
        <div>
            <div>
                {editModeStore.currentEditModeState && (
                    <div>
                        <ScriptCreateForm />
                    </div>
                )}
            </div>
            <div>
                {currData.length ? (
                    <h3>
                        <b>{t("scripts")}</b>
                    </h3>
                ) : (
                    <></>
                )}
                {currData.length ? (
                    currData.map(b => <ScriptItem key={b.id} script={b} searchInput={searchInput} searchFilter={searchFilter}/>)
                ) : (
                    <NothingFound />
                )}
            </div>
        </div>
    )
}

export default observer(QueryBodyScript);
