import { useTranslation } from "react-i18next";
import SwitchStd from '../../../../ui/SwitchStd';
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { EditModeStoreContext } from "../../../../Router";

const ToggleEditMode = () => {
    const { t, i18n } = useTranslation();
    const editModeStore = useContext(EditModeStoreContext);
    const onToggle = () => editModeStore.setEditMode();

    return (
        <div>
            <form>
                <SwitchStd id={"toggleadmin"} onClick={onToggle} defaultChecked={editModeStore.currentEditModeState} />
                <p>{t("editmode")}</p>
            </form>
        </div>
    )
}

export default observer(ToggleEditMode);
