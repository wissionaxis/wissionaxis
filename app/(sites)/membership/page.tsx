import Newsletter from '@/app/components/landing_components/Newsletter'
import CommunitySection from '@/app/components/membership_components/CommunitySection'
import WelcomeSection from '@/app/components/membership_components/Hero'
import KeyFeatures from '@/app/components/membership_components/KeyFeatures'
import React from 'react'

const page = () => {
  return (
    <div>
      <WelcomeSection/>
      <CommunitySection/>
      <KeyFeatures/>
      <Newsletter/>
    </div>
  )
}

export default page