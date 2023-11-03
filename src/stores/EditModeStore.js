import { action, makeObservable, observable } from "mobx";
import getStorageData from "../custom-hooks/getStorageData"

class EditModeStore {
  currentEditModeState = getStorageData("editMode", "")

  setEditMode() {
    if (this.currentEditModeState === "") {
      window.sessionStorage.setItem("editMode", 'checked');
      this.currentEditModeState = 'checked'
    } else {
      window.sessionStorage.setItem("editMode", '');
      this.currentEditModeState = ''
    }
  }

  constructor() {
    makeObservable(this, {
      currentEditModeState: observable,
      setEditMode: action,
    });
  }
}

export default EditModeStore;