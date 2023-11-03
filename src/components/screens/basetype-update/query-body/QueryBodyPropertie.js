import PropertieUpdateForm from '../../../universal/items/propertie/propertie-update-form/PropertieUpdateForm';

const QueryBodyPropertie = ({ propertieData, baseTypeData }) => {
    return (
        <div>
            <div>
                {propertieData.length ? (
                    propertieData.map(p => <PropertieUpdateForm key={p.id} propertieData={p} baseTypeData={baseTypeData} />)
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default QueryBodyPropertie;



