import React, { useState } from "react";
import {
  AppstoreOutlined,
  ToolTwoTone,
  SettingOutlined,
  RightCircleFilled,
} from "@ant-design/icons";
import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import Addcomponent from "./Addcomponent";
import ExampleWithProviders from "./Viewcomponents";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Masters", "main1", <FontAwesomeIcon icon={faCoins} />),
  getItem("Component & prd", "sub1", <ToolTwoTone />, [
    getItem("Add component", "1", <RightCircleFilled />),
    getItem("View Component", "2", <RightCircleFilled />),
    getItem("View Product", "3", <RightCircleFilled />),
  ]),
  getItem("Shop", "sub2", <AppstoreOutlined />, [
    getItem("Add Shop", "4", <RightCircleFilled />),
    getItem("View Shop", "5", <RightCircleFilled />),
  ]),
  getItem("Sub Assembly", "sub4", <SettingOutlined />, [
    getItem("Add Sub Assembly", "6", <RightCircleFilled />),
    getItem("View Sub Assemblies", "7", <RightCircleFilled />),
  ]),
  getItem("Operations", "sub5", <SettingOutlined />, [
    getItem("Add Operation", "8", <RightCircleFilled />),
    getItem("View Operations", "9", <RightCircleFilled />),
  ]),

  getItem("Transactions", "main2", <FontAwesomeIcon icon={faCoins} />),
  getItem("Jobcards", "sub3", <ToolTwoTone />, [
    getItem("Create JobCards", "10", <RightCircleFilled />),
    getItem("View new JobCards", "11", <RightCircleFilled />),
    getItem("View all JobCards", "12", <RightCircleFilled />),
    getItem("Print JobCards", "13", <RightCircleFilled />),
    getItem("Cancel JobCards", "14", <RightCircleFilled />),
  ]),
  getItem("JC Closure Code", "sub6", <AppstoreOutlined />, [
    getItem("Generate Code", "15", <RightCircleFilled />),
    getItem("View Codes", "16", <RightCircleFilled />),
  ]),
  getItem("Material Requisition", "sub7", <SettingOutlined />, [
    getItem("Material Request", "17", <RightCircleFilled />),
    getItem("View Request", "18", <RightCircleFilled />),
  ]),

  getItem("Reports", "main3", <FontAwesomeIcon icon={faCoins} />),
  getItem("Report Generation", "sub8", <ToolTwoTone />, [
    getItem("JobCard Report", "19", <RightCircleFilled />),
    getItem("Material Requisition Report", "20", <RightCircleFilled />),
    getItem("WO Pos Report", "21", <RightCircleFilled />),
    getItem("Consolidated JC track Report", "22", <RightCircleFilled />),
  ]),
];

const SidebarComponent = () => {
  const [theme, setTheme] = useState("dark");
  const [current, setCurrent] = useState();
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [showViewComponent, setShowViewComponent] = useState(false);

  const onClick = (event) => {
    if (event.key === "1") {
      setShowAddComponent(true);
      setShowViewComponent(false);
    } else if (event.key === "2") {
      setShowAddComponent(false);
      setShowViewComponent(true);
    }
    else if (event.key == "3") {
            setShowViewComponent(false);
    }

    setCurrent(event.key);
    console.log("onClick executed:", showAddComponent);
  };

  return (
    <>
      <Menu
        theme={theme}
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={showAddComponent ? ["sub1"] : []}
        selectedKeys={[current]}
        mode="inline"
        items={items}
        inlineIndent={16}
      />
      {showAddComponent ? <Addcomponent /> : null}
      {showViewComponent ? <ExampleWithProviders /> : null}
    </>
  );
};

export default SidebarComponent;
