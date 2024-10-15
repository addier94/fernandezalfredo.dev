'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Twemoji } from '~/components/ui/twemoji'

function createTypedInstance(el: HTMLElement) {
  return new Typed(el, {
    stringsElement: '#bios',
    typeSpeed: 40,
    backSpeed: 10,
    loop: true,
    backDelay: 1000,
  })
}

export function TypedBios() {
  let el = useRef(null)
  let typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (el.current) {
      typed.current?.destroy()
      typed.current = createTypedInstance(el.current)
    }
  }, [])

  return (
    <div className="min-h-8">
      <ul id="bios" className="hidden">
        <li>
          <strong>Endless Curiosity:</strong> A dedicated learner, passionate builder, and
          unrelenting seeker of freedom.
        </li>
        <li>
          <strong>Current Home:</strong> Santa Cruz, Bolivia, South America.
        </li>
        <li>
          <strong>Programming Origins:</strong> My coding journey began with the programming
          language Java.
        </li>
        <li>
          <strong>Professional Focus:</strong> Primarily devoted to the art of web development.
        </li>
        <li>
          <strong>Freelance Aspirations:</strong> Currently channeling my skills into crafting
          exceptional software as a freelancer.
        </li>
        <li>
          <strong>Tech Proficiency:</strong> Specialized in JavaScript and TypeScript technologies.
        </li>
        <li>
          <strong>Problem Solver:</strong> Equipped with strong knowledge and skills for solving
          complex problems.
        </li>

        <li>
          I'm a sport-guy. I love
          <span className="ml-1">
            <Twemoji emoji="soccer-ball" />,
            <Twemoji emoji="man-swimming" />,
            <Twemoji emoji="volleyball" />
            <Twemoji emoji="gym" />
          </span>
        </li>
        <li>I love watching football.</li>
        <li>I love english music.</li>
        <li>I love reading</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
