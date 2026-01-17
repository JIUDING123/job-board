import { SelectItem } from "@/components/ui/select"
import chineseProvinces from "@/data/chinese-provinces.json"

export function StateSelectItems() {
  return Object.entries(chineseProvinces).map(([abbreviation, name]) => (
    <SelectItem key={abbreviation} value={abbreviation}>
      {name}
    </SelectItem>
  ))
}

