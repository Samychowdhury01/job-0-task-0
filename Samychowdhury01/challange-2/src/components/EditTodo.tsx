/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useForm } from "react-hook-form";

import SelectComponent from "./SelectComponent";
import { useTodoContext } from "@/Context/TodoContext";

const EditTodo = ({ onClose, todoInfo }: any) => {
  const { refreshTrigger, setRefreshTrigger } = useTodoContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Define options for label and priority
  const labelOptions = [
    { value: "Bug", label: "Bug" },
    { value: "Feature", label: "Feature" },
    { value: "Documentation", label: "Documentation" },
    { value: "Enhancement", label: "Enhancement" },
  ];

  const statusOptions = [
    { value: "Todo", label: "Todo" },
    { value: "In-Progress", label: "In-Progress" },
    { value: "Done", label: "Done" },
    { value: "Canceled", label: "Canceled" },
  ];

  const priorityOptions = [
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];

  const onSubmit = async (data: any) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_LOCAL_SERVER}/${todoInfo._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (res.ok) {
      console.log("Todo updated successfully");
      setRefreshTrigger(!refreshTrigger);
      onClose();
    } else {
      console.log("Error updating todo");
    }
  };

  return (
    <Sheet open onOpenChange={(open) => !open && onClose()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Update task</SheetTitle>
          <SheetDescription>
            Update the task details and save the changes
          </SheetDescription>
        </SheetHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
          {/* title */}
          <div>
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="name"
              {...register("title", { required: true })}
              defaultValue={todoInfo.title}
            />
          </div>
          {/* Label  */}
          <div>
            <Label htmlFor="name" className="text-right">
              Label
            </Label>
            <SelectComponent
              label="Label"
              options={labelOptions}
              placeholder="Select a label"
              register={register}
              name="label"
              defaultValue={todoInfo.label}
            />
          </div>
          {/* status */}
          <div>
            <Label htmlFor="name" className="text-right">
              Status
            </Label>
            <SelectComponent
              label="Status"
              options={statusOptions}
              placeholder="Select a status"
              register={register}
              name="status"
              defaultValue={todoInfo.status}
            />
          </div>
          <div>
            <Label htmlFor="name" className="text-right">
              Priority
            </Label>
            <SelectComponent
              label="Priority"
              options={priorityOptions}
              placeholder="Select a priority"
              register={register}
              name="priority"
              defaultValue={todoInfo.priority}
            />
          </div>
          <SheetFooter>
            <Button type="submit">Save changes</Button>
          </SheetFooter>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default EditTodo;
