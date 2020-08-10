import MaterialTable, { Column } from "material-table";
import React from "react";
import { data } from "../../mock-data/example.json";

export interface TableRowData {
  id: string;
  urn: string;
  created_at: string;
  updated_at: string;
  content: string;
  type: string;
}
const displayedColumns: Column<object>[] = [
  { title: "id", field: "id" },
  { title: "type", field: "type" },
  { title: "urn", field: "urn" },
  { title: "content", field: "content" },
  { title: "created_at", field: "created_at" },
  { title: "updated_at", field: "updated_at" },
];
export const DataTable: React.FC = (): React.ReactElement => {
  const mappedData = data.map(
    (item): TableRowData => ({
      id: item.id,
      urn: item.attributes.urn,
      created_at: item.attributes.created_at,
      updated_at: item.attributes.updated_at,
      content: item.attributes.content,
      type: item.attributes.display_properties.type,
    })
  );
  return (
    <MaterialTable
      options={{ thirdSortClick: false, paging: false }}
      columns={displayedColumns}
      data={mappedData}
      title={""}
    />
  );
};
