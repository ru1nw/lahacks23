import Head from 'next/head';

import { CompanyCard } from '@/components/CompanyCard';

export function Consumer() {
  let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
  veniam, quis nostrud exercitation';
  return (
    <>
      <Head>
        <title>Dashboard - SustainABiz</title>
      </Head>
      <div className="company-card-list">
        <CompanyCard name="First Clothing" goals={lorem} logo="" percent={80} seg={[true, true, false]} />
        <CompanyCard name="Second-hand Car" goals={lorem} logo="" percent={80} seg={[false, true, true]} />
        <CompanyCard name="Third Beauty" goals={lorem} logo="" percent={50} seg={[false, false, true]} />
        <CompanyCard name="Bach and Fourth" goals={lorem} logo="" percent={20} seg={[true, false, true]} />
        <CompanyCard name="Fifth Ave Boba" goals={lorem} logo="" percent={20} seg={[false, true, false]} />
      </div>
    </>
  )
}