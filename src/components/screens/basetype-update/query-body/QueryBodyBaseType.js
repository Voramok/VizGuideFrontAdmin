import NothingFound from '../../../universal/nothing-found/NothingFound';
import BaseTypeUpdateForm from '../../../universal/items/basetype/basetype-update-form/BaseTypeUpdateForm';

const QueryBodyBaseType = ({ data }) => {
    return (
        <div>
            <div>
                {data.length ? (
                    data.map(b => <BaseTypeUpdateForm key={b.id} data={b} />)
                ) : (
                    <NothingFound />
                )}
            </div>
        </div>
    )
}

export default QueryBodyBaseType;



