"use client";
import { useEffect, useState } from "react";
import { useTodoContext } from "@/Context/TodoContext";
import { DataTable } from "@/components/data-table";
import { columns } from "@/app/columns";


const DataWrapper = () => {
  const { refreshTrigger } = useTodoContext();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(process.env.NEXT_PUBLIC_LOCAL_SERVER as string);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [refreshTrigger]); // Refetch when refreshTrigger changes

  return <DataTable columns={columns} data={data} />;
};

export default DataWrapper;
