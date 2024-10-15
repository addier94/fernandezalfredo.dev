'use client'

import { clsx } from 'clsx'
import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SITE_METADATA } from '~/data/site-metadata'
import { ProfileCardInfo } from './profile-info'

export function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})
  const [hovered, setHovered] = useState(false)

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!ref.current || window.innerWidth < 1280) return

    const { clientX, clientY } = e
    const { width, height, x, y } = ref.current.getBoundingClientRect()

    const mouseX = clientX - x - width / 2
    const mouseY = clientY - y - height / 2

    const rotateMin = -15
    const rotateMax = 15
    const rotateRange = rotateMax - rotateMin

    const rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    }

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    })
  }, [])

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
    setHovered(false)
  }, [])

  const onMouseEnter = useCallback(() => {
    setHovered(true)
  }, [])

  useEffect(() => {
    const { current } = ref
    if (!current) return
    current.addEventListener('mousemove', onMouseMove)
    current.addEventListener('mouseleave', onMouseLeave)
    current.addEventListener('mouseenter', onMouseEnter)

    return () => {
      if (!current) return
      current.removeEventListener('mousemove', onMouseMove)
      current.removeEventListener('mouseleave', onMouseLeave)
      current.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [onMouseMove, onMouseLeave, onMouseEnter])

  return (
    <div
      className={clsx(
        'z-10 mb-8 transition-all duration-300 ease-out md:mb-0',
        hovered ? 'scale-105 shadow-lg' : 'scale-100 shadow-md'
      )}
      style={{ perspective: '600px' }}
      ref={ref}
    >
      <div
        style={style}
        className={clsx(
          'flex flex-col overflow-hidden transition-transform duration-300 ease-out md:rounded-lg',
          'bg-white shadow-demure dark:bg-dark dark:shadow-mondegreen',
          'outline outline-1 outline-gray-100 dark:outline-gray-600'
        )}
      >
        <Image
          src={SITE_METADATA.siteLogo}
          alt={SITE_METADATA.title}
          width={550}
          height={350}
          style={{
            objectPosition: '50% 20%',
            objectFit: 'cover',
            width: '100%',
            aspectRatio: '17/14',
          }}
          priority
        />

        <ProfileCardInfo />
        <span className="h-1.5 bg-gradient-to-r from-green-300 via-pink-500 to-purple-600"></span>
      </div>
    </div>
  )
}
