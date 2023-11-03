import { useEffect, useState } from 'react';
import MemberProcedureDetailItem from '../../../universal/items/memberprocedure/memberprocedure-detail-item/MemberProcedureDetailItem';
import { useTranslation } from 'react-i18next';
import TableStd from '../../../ui/TableStd';

const QueryBodyMemberProcedure = ({ data, basetypeid }) => {
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
                    <h5><b>{t("memberprocedures")}</b></h5>
                    <TableStd content={currData.length ? (
                        currData.map(b => <MemberProcedureDetailItem key={b.id} memberProcedure={b} />)
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

export default QueryBodyMemberProcedure;