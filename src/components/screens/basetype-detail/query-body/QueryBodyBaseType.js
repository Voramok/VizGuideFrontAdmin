import { useEffect, useState } from 'react';
import BaseTypeDetailItem from '../../../universal/items/basetype/basetype-detail-item/BaseTypeDetailItem';
import { useTranslation } from 'react-i18next';

const QueryBodyBaseType = ({ data, id }) => {
    const { t, i18n } = useTranslation();
    const [currData, setCurrData] = useState([])

    useEffect(() => {
        filterData(id, data)
    }, [id])

    const filterData = (id, data) => {
        {
            data.filter(b => b.id == id).map(filteredData => (
                setCurrData(previous => previous.concat(filteredData))
            ))
        }
    }

    return (
        currData.length > 0? (
            currData.map(p => <BaseTypeDetailItem key={p.id} basetype={p} />)
        ) : (
            <div>fff</div>
        )
    )
}

export default QueryBodyBaseType;