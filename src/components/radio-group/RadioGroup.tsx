import React from 'react';
import { Radio } from 'antd';
import s from './RadioGroup.module.css'
const options = [
  { label: 'Играл', value: 'Apple' },
  { label: 'Буду играть', value: 'Pear' },
  { label: 'Прошёл', value: 'Orange' },
];

const RadioGroup: React.FC = () => (
  <div className={s.wrapper}>
<Radio.Group
    size='middle'
      block
      options={options}
      defaultValue=""
      optionType="button"
      buttonStyle="solid"
    />
  </div>
    
);

export default RadioGroup;