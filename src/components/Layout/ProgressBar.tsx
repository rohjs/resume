import React from 'react'
import { StyledProgressBar } from './styles'

type ProgressBarProps = {
  progress: number
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  const percentage = Math.min(progress * 100 - 100, 0)

  return (
    <StyledProgressBar>
      <div
        className="bar"
        style={{ transform: `translate3d(${percentage}%, 0, 0)` }}
      />
    </StyledProgressBar>
  )
}
