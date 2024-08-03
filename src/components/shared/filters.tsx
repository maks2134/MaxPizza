import {Title} from "@/components/shared/title";
import {FilterCheckbox} from "@/components/shared/filter-checkbox";
import {Input} from "@/components/ui";
import {RangeSlider} from "@/components/ui/range-slider";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ items, className }) => {
    return (
        <div className={className}>
            <Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собрать" value="1"/>
                <FilterCheckbox text="Новинки" value="2"/>
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена:</p>
                    <div className="flex gap-3 mb-5">
                        <Input type="number" placeholder="0 BYN" min={0} max={45} defaultValue={0}/>
                        <Input type="number" min={0} max={45} placeholder="45 BYN"/>
                    </div>
                <RangeSlider min={0} max={45} step={1} value={[0,45]}/>
            </div>
        </div>
);
};