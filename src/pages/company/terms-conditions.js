import HeadSection from '@/Components/HeadSection'
import TermsConditions from '@/Components/terms-and-privary/TermsConditions'
import React from 'react'

function TermsConditionsPage() {
  return (
    <>
      <HeadSection title="Terms of Service - Sekel Tech" description="Last Updated: 19 November 2014" canonical="https://sekel.tech/company/terms-conditions" img="/logo.svg" />
      <TermsConditions />
    </>
  )
}

export default TermsConditionsPage