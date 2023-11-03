import { useEffect, useState } from 'react';
import PropertieItem from '../../../universal/items/propertie/propertie-item/PropertieItem';
import NothingFoundSmall from '../../../universal/nothing-found-small/NothingFoundSmall';
import TableStd from '../../../ui/TableStd';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

const QueryBodyPropertie = ({ data, dataBaseType, searchInput, searchFilter }) => {
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
            {currData.length ? (
                <div>
                    <h5>
                        <b>{t("properties")}</b>
                    </h5>
                    <TableStd content={currData.map(b => <PropertieItem key={b.id} propertie={b} data={dataBaseType} searchInput={searchInput} searchFilter={searchFilter}/>)} />
                </div>
            ) : (
                <div>
                    <h5>
                        <b>{t("properties")}</b>
                    </h5>
                    <NothingFoundSmall />
                </div>
            )}
        </div>
    )
}

export default observer(QueryBodyPropertie);