
import HeadSection from '@/Components/HeadSection'
import PrivacyPolicy from '@/Components/terms-and-privary/PrivacyPolicy'
import React from 'react'

function PrivacyPolicyPage() {
  return (
    <div>
      <HeadSection title="Privacy Policy - Sekel Tech" description="Last Updated: 27 September 2018" canonical="https://sekel.tech/company/privacy-policy" img="/logo.svg" />
      <PrivacyPolicy />
    </div>
  )
}

export default PrivacyPolicyPage