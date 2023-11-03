import { useTranslation } from "react-i18next";
import SelectStd from '../../../../ui/SelectStd';
import { useNavigate } from "react-router-dom";
import getStorageData from "../../../../../custom-hooks/getStorageData"
import { useEffect } from "react";

const SelectPartial = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === "/" || window.location.pathname === "/basetypes") {
      window.sessionStorage.setItem("currentPage", '/basetypes');
    }
  }, [])

  
  const handleChange = (e) => {
    if (e.target.options.selectedIndex == 1) {
      window.sessionStorage.setItem("currentPage", '/basetypes');
      navigate("/basetypes");
    }
    else if (e.target.options.selectedIndex == 2) {
      window.sessionStorage.setItem("currentPage", "/scripts");
      navigate("/scripts");
    }
  }

  const options = [
    {
      value: "/basetypes",
      text: t("basetypes")
    },
    {
      value: "/scripts",
      text: t("scripts")
    }
  ];

  return (
    <div>
      <form>
        <SelectStd defaultValue={getStorageData("currentPage", "/basetypes")} onChange={handleChange} options={options} />
      </form>
    </div>
  )
}

export default SelectPartial;