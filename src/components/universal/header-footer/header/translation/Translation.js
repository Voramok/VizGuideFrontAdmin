import { useTranslation } from "react-i18next";
import SelectStd from '../../../../ui/SelectStd';
import { useEffect } from "react";
import  getStorageData  from "../../../../../custom-hooks/getStorageData"

const Translation = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(getStorageData("currentLanguage", "en"));
  }, [])

  const languages = [
    {
      value: "en",
      text: "english"
    },
    {
      value: "ru",
      text: "русский"
    }
  ];

  const handleChange = e => {
    window.sessionStorage.setItem("currentLanguage", e.target.value);
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div>
      <form>
        <SelectStd defaultValue={getStorageData("currentLanguage", "en")} onChange={handleChange} options={languages} />
      </form>
    </div>
  )
}

export default Translation;