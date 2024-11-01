import * as React from "react";
import { ArrowUpCircle, ArrowDownCircle, CirclePlus, LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Priority = {
  value: string;
  label: string;
  icon: LucideIcon;
};

type FilterPriorityProps = {
  selectedPriority: Priority | null;
  setSelectedPriority: React.Dispatch<React.SetStateAction<Priority | null>>;
};

const priorities: Priority[] = [
  { value: "high", label: "High", icon: ArrowUpCircle },
  { value: "medium", label: "Medium", icon: CirclePlus },
  { value: "low", label: "Low", icon: ArrowDownCircle },
];

export function FilterPriority({ selectedPriority, setSelectedPriority }: FilterPriorityProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" size="sm" className="justify-start outline-dotted outline-1">
            {selectedPriority ? (
              <>
                <selectedPriority.icon className="h-4 w-4 shrink-0" />
                {selectedPriority.label}
              </>
            ) : (
              <>
                <CirclePlus /> Priority
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change priority..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {priorities.map((priority) => (
                  <CommandItem
                    key={priority.value}
                    onSelect={() => {
                      setSelectedPriority(priority);
                      setOpen(false);
                    }}
                  >
                    <priority.icon
                      className={cn(
                        "mr-2 h-4 w-4",
                        priority.value === selectedPriority?.value ? "opacity-100" : "opacity-40"
                      )}
                    />
                    <span>{priority.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
