import React from 'react';

import * as S from './Select.styles';

interface SelectProps<ItemsType> {
  onChange: (value: ItemsType) => void;
  items: ItemsType[];
}

const Select = <ItemsType extends string>({ onChange, items = [] }: SelectProps<ItemsType>) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as ItemsType);
  };

  return (
    <S.Select onChange={handleChange} defaultValue="" data-testid="select" aria-label="select">
      <option value="" disabled>
        Please select
      </option>
      {items.map((item) => (
        <option key={item} value={item} data-testid="select-option">
          {item}
        </option>
      ))}
    </S.Select>
  );
};

export default Select;
