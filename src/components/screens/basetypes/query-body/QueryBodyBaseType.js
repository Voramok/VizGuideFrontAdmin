import BaseTypeItem from '../../../universal/items/basetype/basetype-item/BaseTypeItem';
import { EditModeStoreContext } from "../../../Router";
import { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import NothingFound from '../../../universal/nothing-found/NothingFound';
import BaseTypeCreateForm from '../../../universal/items/basetype/basetype-create-form/BaseTypeCreateForm';
import TableStd from '../../../ui/TableStd';

const QueryBodyBaseType = ({ data }) => {
    const editModeStore = useContext(EditModeStoreContext);

    return (
        <div>
            <div>
                {editModeStore.currentEditModeState && (
                    <div>
                        <BaseTypeCreateForm />
                    </div>
                )}
            </div>
            <TableStd content={data.length ? (
                data.map(b => <BaseTypeItem key={b.id} basetype={b} />)
            ) : (
                <NothingFound />
            )} />
        </div>
    )
}

export default observer(QueryBodyBaseType);

