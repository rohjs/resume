import { StyledProgressBar } from './styles'

type ProgressBarProps = {
  progress: number
}

export default function ProgressBar({ progress }: ProgressBarProps) {
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
