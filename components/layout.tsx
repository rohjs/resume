import { ReactNode, UIEvent, useEffect, useRef, useState } from 'react'

import ProgressBar from './progress-bar'
import { StyledLayout } from './styles'

type LayoutProps = {
  children?: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const mainRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [scrollHeight, setScrollHeight] = useState(0)
  const [scrollTop, setScrollTop] = useState(0)

  const updateProgress = (e: UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop)
  }

  const updateScrollHeight = () => {
    if (!mainRef?.current || !contentRef?.current) return
    const height =
      contentRef.current.getBoundingClientRect().height -
      mainRef.current.getBoundingClientRect().height
    setScrollHeight(height)
  }

  const progress = scrollTop / scrollHeight

  useEffect(updateScrollHeight, [])

  useEffect(() => {
    window.addEventListener('resize', updateScrollHeight)
    return () => {
      window.removeEventListener('resize', updateScrollHeight)
    }
  })

  return (
    <StyledLayout>
      <ProgressBar progress={progress} />
      <main ref={mainRef} onScroll={updateProgress}>
        <div ref={contentRef}>{children}</div>
      </main>
    </StyledLayout>
  )
}
