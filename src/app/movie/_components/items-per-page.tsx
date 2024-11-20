"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

interface ItemsPerPageProps {
  itemsPerPage: number;
  onChange: (value: number) => void;
}

export function ItemsPerPage({ itemsPerPage, onChange }: ItemsPerPageProps) {
  return (
    <div className="flex items-center justify-center gap-2">
    

      <Select
        value={String(itemsPerPage)}
        onValueChange={(value) => onChange(Number(value))}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Items per page" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Items per page</SelectLabel>
            <SelectItem value="4">4</SelectItem>
            <SelectItem value="8">8</SelectItem>
            <SelectItem value="12">12</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
