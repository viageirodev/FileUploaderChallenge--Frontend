import React, { useEffect, useState } from 'react'
import { Wrapper, LoadBar, LoadIndicator } from './styles'

function UploadLoader() {
  const [progressStep, setProgressStep] = useState(0)

  function handleProgressStep() {
    if (progressStep === 400) {
      setProgressStep(0)
    } else {
      setProgressStep(progressStep + 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleProgressStep()
    }, 3)
    return () => clearInterval(interval)
  }, [progressStep])

  return (
    <Wrapper>
      <h1>Uploading...</h1>
      <LoadBar>
        <LoadIndicator step={progressStep} />
      </LoadBar>
    </Wrapper>
  )
}

export default UploadLoader
