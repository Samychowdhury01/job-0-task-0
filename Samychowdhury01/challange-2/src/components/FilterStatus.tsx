import * as React from "react";
import {
  ArrowUpCircle,
  CheckCircle2,
  Circle,
  CirclePlus,
  XCircle,
  LucideIcon,
} from "lucide-react";

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

type Status = {
  value: string;
  label: string;
  icon: LucideIcon;
};

type FilterStatusProps = {
  selectedStatus: Status | null;
  setSelectedStatus: React.Dispatch<React.SetStateAction<Status | null>>;
};

const statuses: Status[] = [
  { value: "todo", label: "Todo", icon: Circle },
  { value: "In-Progress", label: "In Progress", icon: ArrowUpCircle },
  { value: "done", label: "Done", icon: CheckCircle2 },
  { value: "canceled", label: "Canceled", icon: XCircle },
];

export function FilterStatus({ selectedStatus, setSelectedStatus }: FilterStatusProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="justify-start outline-dotted outline-1"
          >
            {selectedStatus ? (
              <>
                <selectedStatus.icon className="h-4 w-4 shrink-0" />
                {selectedStatus.label}
              </>
            ) : (
              <>
                <CirclePlus /> Status
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" side="right" align="start">
          <Command>
            <CommandInput placeholder="Change status..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    onSelect={() => {
                      setSelectedStatus(status);
                      setOpen(false);
                    }}
                  >
                    <status.icon
                      className={cn(
                        "mr-2 h-4 w-4",
                        status.value === selectedStatus?.value ? "opacity-100" : "opacity-40"
                      )}
                    />
                    <span>{status.label}</span>
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
