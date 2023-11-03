import { useEffect, useState } from 'react'
import PropertieDetail from '../../../universal/items/propertie/propertie-detail-item/PropertieDetailItem'
import { useTranslation } from 'react-i18next';
import TableStd from '../../../ui/TableStd';

const QueryProperties = ({ data, basetypeid }) => {
    const [currData, setCurrData] = useState([])
    const { t, i18n } = useTranslation();

    useEffect(() => {
        filterData(basetypeid, data)
    }, [basetypeid])

    const filterData = (basetypeid, data) => {
        {
            data.filter(b => b.baseTypeId == basetypeid).map(filteredData => (
                setCurrData(previous => previous.concat(filteredData))
            ))
        }
    }

    return (
        <div>
            {currData.length > 0 ? (
                <div>
                    <h5><b>{t("properties")}</b></h5>
                    <TableStd content={currData.length ? (
                        currData.map(p => <PropertieDetail key={p.id} propertie={p} />)
                    ) : (
                        <></>
                    )} />
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default QueryProperties;