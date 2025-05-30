import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
const page = () => {
  return (
<>
<section className="card-cta">
  <div className="flex flex-col gap-6 max-w-lg">
    <h2>Get Interview ready with Next-Gen Online Recruitment Assistant </h2>
    <p className="text-lg">
      Prepare for your interviews with NORA
    </p>
    <Button asChild className="btn-primary max-sm:w-full">
      <Link href="/interview">Begin your Interview</Link>
    </Button>
  </div>
  <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden"/>
</section>

<section className="flex flex-col gap-6 mt-8">
  <h2>Your Interviews</h2>

  <div className="interviews-section">
    {dummyInterviews.map((interview) => (
    <InterviewCard {...interview} key={interview.id}/>
    ))}
  </div>

</section>

<section className="flex flex-col gap-6 mt-8">
  <h2>Apply for an interview</h2>

  <div className="interviews-section">
     {dummyInterviews.map((interview) => (
    <InterviewCard {...interview} key={interview.id}/>
    ))}

    {/* <p>No interview is available</p> */}
  </div>
</section>
</>
  )
}

export default page
