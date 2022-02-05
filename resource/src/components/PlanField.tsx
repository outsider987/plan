import React from 'react'
interface Filed {
  fileds: string[];
  test: (arg: string) => void;
}
const PlanField: React.FC<Filed> = ({ fileds, test }) => {
  const testStr = 'emit test'
  return (
    <div
      className="content__layout "
      onClick={() => {
        test(testStr)
      }}
    >
      {fileds.map((list: string) => (
        <div
          key={list}
          className={`${list === 'name' ? 'text-4xl font-bold' : 'text-3xl'} `}
        >
          {list}
        </div>
      ))}
      <option> option </option>
    </div>
  )
}
export default PlanField
