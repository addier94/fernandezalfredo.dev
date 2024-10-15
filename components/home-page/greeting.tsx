import clsx from 'clsx'

export function Greeting() {
  return (
    <div
      className={clsx(
        'font-greeting font-extrabold tracking-tight',
        'text-[40px] leading-[50px] md:text-[68px] md:leading-[80px]'
      )}
    >
      <span className="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent dark:bg-gradient-to-l dark:from-blue-500 dark:via-purple-500 dark:to-pink-500">
        Crafting innovative digital solutions across the globe
      </span>
      <span role="img" aria-label="palm tree">
        🌴
      </span>
    </div>
  )
}
