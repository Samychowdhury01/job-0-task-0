/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SelectComponent from "./SelectComponent";
import { useTodoContext } from "@/Context/TodoContext";
import { useForm } from "react-hook-form";
import generateId from "@/utils/generateId";
import { Plus } from "lucide-react";

const AddNewTask = () => {
  const { refreshTrigger, setRefreshTrigger } = useTodoContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [open, setOpen] = useState(false); // State to control dialog open/close

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

  //   handle add new task
  const onSubmit = async (data: any) => {
    const taskData = { id: generateId(), ...data };

    const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_SERVER}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });
    if (res.ok) {
      console.log("Todo added successfully");
      setRefreshTrigger(!refreshTrigger);
      setOpen(false); // Close the dialog on successful task addition
    } else {
      console.log("Error adding todo");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle><Plus/> Add New</DialogTitle>
          <DialogDescription>
            Fill out the form to add a new task. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Title */}
          <div>
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" {...register("title", { required: true })} />
          </div>
          {/* Label */}
          <div>
            <Label htmlFor="label" className="text-right">
              Label
            </Label>
            <SelectComponent
              label="Label"
              options={labelOptions}
              placeholder="Select a label"
              register={register}
              name="label"
              defaultValue=""
            />
          </div>
          {/* Status */}
          <div>
            <Label htmlFor="status" className="text-right">
              Status
            </Label>
            <SelectComponent
              label="Status"
              options={statusOptions}
              placeholder="Select a status"
              register={register}
              name="status"
              defaultValue=""
            />
          </div>
          {/* Priority */}
          <div>
            <Label htmlFor="priority" className="text-right">
              Priority
            </Label>
            <SelectComponent
              label="Priority"
              options={priorityOptions}
              placeholder="Select a priority"
              register={register}
              name="priority"
              defaultValue=""
            />
          </div>

          <DialogFooter>
            <Button type="submit">Add Task</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewTask;
