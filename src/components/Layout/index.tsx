import { ReactNode, UIEvent, useEffect, useRef, useState } from 'react'
import { useMount } from 'react-use'

import { ProgressBar } from './ProgressBar'
import { StyledLayout } from './styles'

type LayoutProps = {
  children?: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
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

  useMount(updateScrollHeight)

  useEffect(() => {
    window.addEventListener('resize', updateScrollHeight)
    return () => {
      window.removeEventListener('resize', updateScrollHeight)
    }
  })

  return (
    <StyledLayout translate="no">
      <ProgressBar progress={progress} />
      <main ref={mainRef} onScroll={updateProgress}>
        <div ref={contentRef}>{children}</div>
      </main>
    </StyledLayout>
  )
}
