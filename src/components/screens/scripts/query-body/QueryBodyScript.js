import NothingFound from '../../../universal/nothing-found/NothingFound';
import ScriptItem from '../../../universal/items/script/script-item/ScriptItem';
import { observer } from "mobx-react-lite";
import ScriptCreateForm from '../../../universal/items/script/script-create-form/ScriptCreateForm';
import { EditModeStoreContext } from "../../../Router";
import { useContext } from 'react';

const QueryBodyScript = ({ data }) => {
    const editModeStore = useContext(EditModeStoreContext);

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
                {data.length ? (
                    data.map(b => <ScriptItem key={b.id} script={b} />)
                ) : (
                    <NothingFound />
                )}
            </div>
        </div>
    )
}

export default observer(QueryBodyScript);

