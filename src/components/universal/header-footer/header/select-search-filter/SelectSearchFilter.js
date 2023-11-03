import { useTranslation } from "react-i18next";
import SelectStd from '../../../../ui/SelectStd';
import { SearchFilterStoreContext } from "../../../../Router";
import { observer } from "mobx-react-lite";
import { useContext } from "react";

const SelectSearchFilter = () => {
  const { t, i18n } = useTranslation();
  const searchFilterStore = useContext(SearchFilterStoreContext);

  const handleChange = (e) => {
    if (e.target.options.selectedIndex == 1) {
      searchFilterStore.setSearchFilter("byname")
    }
    else if (e.target.options.selectedIndex == 2) {
      searchFilterStore.setSearchFilter("bydescription")
    }
  }

  const options = [
    {
      value: "byname",
      text: t("byname")
    },
    {
      value: "bydescription",
      text: t("bydescription")
    }
  ];

  return (
    <div>
      <form>
        <SelectStd defaultValue={"byname"} onChange={handleChange} options={options} />
      </form>
    </div>
  )
}

export default observer(SelectSearchFilter);
