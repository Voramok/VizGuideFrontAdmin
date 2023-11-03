import MemberProcedureUpdateForm from '../../../universal/items/memberprocedure/memberprocedure-update-form/MemberProcedureUpdateForm';

const QueryBodyPropertie = ({ memberProcedureData, baseTypeData }) => {
    return (
        <div>
            <div>
                {memberProcedureData.length ? (
                    memberProcedureData.map(p => <MemberProcedureUpdateForm key={p.id} memberProcedureData={p} baseTypeData={baseTypeData} />)
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default QueryBodyPropertie;



