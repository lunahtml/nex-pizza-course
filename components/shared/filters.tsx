import React from "react";
import { cn } from '@/lib/utils';
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фильтры" size="md" className="mb-4"/>


            <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>


      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" step={100} min={0} max={30000} defaultValue={0} />
          <Input type="number" min={100} step={100} max={30000} placeholder="30000" />
        </div>
        <RangeSlider min={0} max={5000} step={100} value={[0, 5000]} />
      </div>
<CheckboxFiltersGroup
  title="Фильтры" 
  className="mt-5"
  limit={5}
  defaultItems={[
    { text: "соленые колбаски", value: "value1" },
    { text: "соленые колбаски 2", value: "value2" },
    { text: "чеснок", value: "value3" },
    { text: "колбаса", value: "value4" },
    { text: "сыр", value: "value5" },
    { text: "мята", value: "value6" },
    { text: "кетчуп", value: "value7" },
  ]}
  items={[
    { text: "соленые колбаски", value: "value1" },
    { text: "соленые колбаски 2", value: "value2" },
    { text: "чеснок", value: "value3" },
    { text: "колбаса", value: "value4" },
    { text: "сыр", value: "value5" },
    { text: "мята", value: "value6" },
    { text: "кетчуп", value: "value7" },
  ]} 
/>
        </div>
    );
}