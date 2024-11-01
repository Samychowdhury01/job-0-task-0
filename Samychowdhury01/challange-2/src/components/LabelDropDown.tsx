/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import EditTodo from "./EditTodo";
import { useTodoContext } from "@/Context/TodoContext";

const LabelDropDown = ({
  selectedLabel,
  todoInfo,
}: {
  selectedLabel: string;
  todoInfo: any;
}) => {
  const [label, setLabel] = useState(selectedLabel || " ");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
// to refetch the UI
const { refreshTrigger, setRefreshTrigger } = useTodoContext();

  // Handler for opening the edit form
  const handleEditClick = () => {
    setIsSheetOpen(true); // Open the sheet
  };

  // Handler for updating the label
  const handleLabelChange = async (newLabel: string) => {
    // Update the todo info with the new label
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_LOCAL_SERVER}/label/${todoInfo._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ label: newLabel }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update label");
      }

      const data = await res.json();
      setLabel(data.label);
      setRefreshTrigger(!refreshTrigger); // to refetch the UI
    } catch (error) {
      console.error("Error updating label:", error);
    }
  };

  // handle delete todo
  const handleDeleteTodo = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_SERVER}/${todoInfo._id}`, {
          method: "DELETE",
          }
          );
          console.log(res);
          if (!res.ok) {
            throw new Error("Failed to delete todo");
            }
            setRefreshTrigger(!refreshTrigger); // to refetch the UI
          }
          catch(err){
            console.error("Error deleting todo:", err);
          }
        }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem onSelect={handleEditClick}>Edit</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <span>Label</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={label}
                  onValueChange={handleLabelChange}
                >
                  <DropdownMenuRadioItem value="Bug">Bug</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Feature">
                    Feature
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Enhancement">
                    Enhancement
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Documentation">
                    Documentation
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleDeleteTodo}>
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Sheet component triggered by state */}
      {isSheetOpen && (
        <EditTodo todoInfo={todoInfo} onClose={() => setIsSheetOpen(false)} />
      )}
    </>
  );
};

export default LabelDropDown;
