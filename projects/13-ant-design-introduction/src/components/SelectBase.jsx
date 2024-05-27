import { Select } from "antd";
import { useState } from "react";
import { OPTIONS } from "../util/data";

export function SelectBase() {
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  return (
    <Select
      mode="multiple"
      style={{ width: "50vh" }}
      placeholder="Elige las canciones que conozcas"
      value={selectedItems}
      onChange={setSelectedItems}
      options={filteredOptions.map((item) => ({
        value: item,
        label: item,
      }))}
    />
  );
}
