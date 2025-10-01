import { RowID, RowElement } from "./interface";

export function insertRow(Row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;