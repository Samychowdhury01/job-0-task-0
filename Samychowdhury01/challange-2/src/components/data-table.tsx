"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent, useEffect } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "./DataTablePagination";
import { Input } from "@/components/ui/input";
import { FilterStatus } from "./FilterStatus";
import { FilterPriority } from "./FilterPriority";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import { useTodoContext } from "@/Context/TodoContext";
import AddNewTask from "./AddNewTask";
import { DataTableViewOptions } from "./DataTableViewOptions";
import { exportToCSV } from "@/utils/exportToCSV";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [selectedStatus, setSelectedStatus] = useState<any>(null);
  const [selectedPriority, setSelectedPriority] = useState<any>(null);
  const { refreshTrigger } = useTodoContext();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  // Apply status and priority filters
  useEffect(() => {
    const statusFilter = selectedStatus ? selectedStatus.value : ""; // Only use the value property
    const priorityFilter = selectedPriority ? selectedPriority.value : ""; // Only use the value property

    table.getColumn("status")?.setFilterValue(statusFilter);
    table.getColumn("priority")?.setFilterValue(priorityFilter);
    console.log('Filters applied:', { statusFilter, priorityFilter });
  }, [selectedStatus, selectedPriority, table, refreshTrigger]);

  // Reset filters
  const resetFilters = () => {
    setSelectedStatus(null);
    setSelectedPriority(null);
    table.getColumn("status")?.setFilterValue("");
    table.getColumn("priority")?.setFilterValue("");
  };

  // handle export csv
  const handleExportCsv = () => {
    exportToCSV(data); // Pass your table data here
  }

  return (
    <>
     <div className="flex justify-between">
     <div className="flex items-center space-x-4">
        <Input
          placeholder="Filter Tasks..."
          defaultValue={
            (table.getColumn("title")?.getFilterValue() as string) ?? ""
          }
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            table.getColumn("title")?.setFilterValue(event.target.value)
          }
          className="w-52"
        />
        <FilterStatus
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
        <FilterPriority
          selectedPriority={selectedPriority}
          setSelectedPriority={setSelectedPriority}
        />
        {(selectedStatus || selectedPriority) && (
          <Button variant="ghost" onClick={resetFilters}>
            Reset <X />
          </Button>
        )}
      </div>
<div className="flex items-center gap-5">
  <AddNewTask/>
  <Button onClick={handleExportCsv} variant="outline"><Download/> Export</Button>
  <DataTableViewOptions table={table}/>
</div>
     </div>
      <div className="rounded-md border mt-4">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="mt-5">
        <DataTablePagination table={table} />
      </div>
    </>
  );
}
