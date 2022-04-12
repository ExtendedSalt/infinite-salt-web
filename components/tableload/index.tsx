// import { Db } from "mongodb";
import abData from "./abyssTable"
import useSortableData from "./tableFilter";

export default function tbData() {
    const { items, requestSort, sortConfig } = useSortableData(db.products);
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };
}