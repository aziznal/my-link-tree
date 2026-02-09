export function Summary() {
  const startDate = new Date('2020-01-01')
  const elapsedYears =
    new Date(Date.now()).getFullYear() - startDate.getFullYear()

  return (
    <div>
      <h2 className="font-lowres text-3xl text-shadow-lg text-shadow-foreground/20 mb-4">
        A BIT ABOUT ME
      </h2>

      <div className="text-muted-foreground text-balance max-w-[70ch] space-y-6">
        <p>
          I've been a developer for the last {elapsedYears} years. I've worked
          as a <span className="text-[22px] text-shadow-lg text-shadow-foreground/20 font-lowres">Senior</span>™ Full-Stack developer and Team Lead for the last 3 years. Check out my CV for details
        </p>

        <p>I enjoy making cool components and animations in my spare time.</p>
      </div>
    </div>
  )
}
