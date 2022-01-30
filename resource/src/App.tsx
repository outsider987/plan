import React, { Suspense, useEffect } from 'react'
import './App.css'
// import { Route, Routes, Link, Router } from 'react-router-dom'
import listManager, { Plan } from './store'

import Header from './components/Header'
import Spin from './components/Spin'
import PlanField from './components/PlanField'
import PlanList from './components/PlanList'
import Modal from './components/Modal'

function App () {
  const { planState, getStandardData, getPlansData } = listManager()
  useEffect(() => {
    getStandardData()
  }, [])
  useEffect(() => {
    getPlansData()
  }, [])

  const planLayoutStyle = {
    gridTemplateRows: '10fr 90fr',
    height: '-webkit-fill-available'
  }

  return (
    <div className={' w-full h-full '}>
      <div
        className={'grid border border-black rounded-2xl m-10  '}
        style={planLayoutStyle}
      >
        <Modal toggle={planState.isLoading}>
          <Spin></Spin>
        </Modal>

        <Header></Header>
        <div className="grid grid-cols-3 w-full  p-4  ">
          <PlanField fileds={planState.Fields} />
          {planState.plans.map((plan: Plan) => (
            <PlanList key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
