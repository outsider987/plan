import React from 'react'
import { Name, Plan } from '~/store/index'
import { useNavigate } from 'react-router-dom'
interface PropPlan {
  plan: Plan;
}
const PlanList: React.FC<PropPlan> = ({ plan }) => {
  const navigate = useNavigate()
  function handleClick (path: string) {
    navigate(`${path}`)
  }
  return (
    <div
      className={`content__layout ${
        plan.name === 'standard' ? ' bg-blue-600' : ' bg-orange-500'
      }`}
      key={plan.id}
    >
      <h1>{plan.name}</h1>
      <span
        className={`${plan.general ? ' text-white' : 'text-black'} text-3xl `}
      >
        {plan.general ? 'O' : 'X'}
      </span>
      <span
        className={`${
          plan.specialist ? ' text-white' : 'text-black'
        } text-3xl `}
      >
        {plan.specialist ? 'O' : 'X'}
      </span>
      <span
        className={`${
          plan.physiotherapy ? ' text-white' : 'text-black'
        } text-3xl `}
      >
        {plan.physiotherapy ? 'O' : 'X'}
      </span>
      <span
        className={`${plan.others ? ' text-white' : 'text-black'} text-3xl `}
      >
        {plan.others ? 'O' : 'X'}
      </span>
      <option
        onClick={() => handleClick(plan.name)}
        className={`${
          plan.name === 'standard' ? ' bg-blue-900' : 'bg-orange-900'
        } text-3xl font-bold text-white m-4  p-4 cursor-pointer rounded-md`}
      >
        {plan.name === 'standard' ? 'HK$0/Month' : 'HK$388/Month'}
      </option>
    </div>
  )
}
export default PlanList
