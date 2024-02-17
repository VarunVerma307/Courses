import React from 'react';

const Filter = (props) => {
  return (
    <div>
      {props.filterdata.map((data) => {
        return <button key={data.key}>{data.title}</button>
      })}
    </div>
  )
}

export default Filter;
