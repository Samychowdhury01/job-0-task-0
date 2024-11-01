/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import LabelDropDown from "@/components/LabelDropDown";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { DataTableColumnHeader } from "@/components/DataTableColumnHeader";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowRightIcon,
} from "@radix-ui/react-icons";
import { ArrowUpCircle, CheckCircle2, Circle, XCircle } from "lucide-react";
import { convertDate } from "@/utils/convertDate";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Task = {
  id: string;
  title: string;
  status: "Todo" | "In-Progress" | "Done" | "Canceled";
  priority: "High" | "Medium" | "Low";
  label: "Bug" | "Feature" | "Documentation" | "Enhancement";
  createdAt: string;
};

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Task",
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        <span className="px-2 py-1 text-xs font-medium border rounded">
          {row.original.label}
        </span>
        <span>{row.original.title}</span>
      </div>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const statusIcons: any = {
        Todo: <Circle className="mr-2 h-4 w-4 shrink-0" />,
        "In-Progress": <ArrowUpCircle className="mr-2 h-4 w-4 shrink-0" />,
        Done: <CheckCircle2 className="mr-2 h-4 w-4 shrink-0" />,
        Canceled: <XCircle className="mr-2 h-4 w-4 shrink-0" />,
      };
      const status = row.original.status;
      const Icon = statusIcons[status];

      return (
        <div className="flex items-center gap-2">
          {Icon}
          <span>{status}</span>
        </div>
      );
    },
    enableSorting: true,
  },
  {
    accessorKey: "priority",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Priority" />
    ),
    cell: ({ row }) => {
      const statusIcons: any = {
        High: <ArrowUpIcon />,
        Medium: <ArrowRightIcon />,
        Low: <ArrowDownIcon />,
      };
      const status = row.original.priority;
      const icon = statusIcons[status];
      return (
        <div className="flex items-center gap-2">
          {icon}
          <span>{status}</span>
        </div>
      );
    },
    enableSorting: true,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CreatedAt" />
    ),
    enableSorting: true,
    cell: ({ row }) => <span>{convertDate(row.original.createdAt)}</span>,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const todo = row.original;

      return <LabelDropDown todoInfo={todo} selectedLabel={todo.label} />;
    },
  },
];
