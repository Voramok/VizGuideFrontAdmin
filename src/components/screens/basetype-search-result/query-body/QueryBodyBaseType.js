import BaseTypeItem from '../../../universal/items/basetype/basetype-item/BaseTypeItem';
import { EditModeStoreContext } from "../../../Router";
import { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import BaseTypeCreateForm from '../../../universal/items/basetype/basetype-create-form/BaseTypeCreateForm';
import NothingFoundSmall from '../../../universal/nothing-found-small/NothingFoundSmall';
import TableStd from '../../../ui/TableStd';
import { useTranslation } from 'react-i18next';

const QueryBodyBaseType = ({ data, searchInput, searchFilter }) => {
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
                        <BaseTypeCreateForm />
                    </div>
                )}
            </div>
            <div>
                {currData.length ? (
                    <div>
                        <h5>
                            <b>{t("basetypes")}</b>
                        </h5>
                        <TableStd content={currData.map(b => <BaseTypeItem key={b.id} basetype={b} searchInput={searchInput} searchFilter={searchFilter}/>)} />
                    </div>
                ) : (
                    <div>
                        <h5>
                            <b>{t("basetypes")}</b>
                        </h5>
                        <NothingFoundSmall />
                    </div>
                )}
            </div>
        </div>
    )
}

export default observer(QueryBodyBaseType);

