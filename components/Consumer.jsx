import Head from 'next/head';

import { CompanyCard } from '@/components/CompanyCard';
import  beauty  from '@/images/logos/beauty.svg';
import  boba  from '@/images/logos/boba.svg';
import  car  from '@/images/logos/car.svg';
import  clothes  from '@/images/logos/clothes.svg';
import  music  from '@/images/logos/music.svg';

export function Consumer() {
  let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
  veniam, quis nostrud exercitation';
  let company_text = 'Proud inventor of Coal Milk Tea! We heat up our tea by \
  putting burning hot coal in your drink! We also fly all our plastic cups and \
  straws from Libya to ensure quality.';

  return (
    <>
      <Head>
        <title>Dashboard - SustainABiz</title>
      </Head>
      <div className="company-card-list">
        <CompanyCard name="First Clothing" goals={lorem} logo={clothes} percent={80} seg={[true, true, false]} />
        <CompanyCard name="Second-hand Car" goals={lorem} logo={car} percent={80} seg={[false, true, true]} />
        <CompanyCard name="Third Beauty" goals={lorem} logo={beauty} percent={50} seg={[false, false, true]} />
        <CompanyCard name="Bach and Fourth" goals={lorem} logo={music} percent={20} seg={[true, false, true]} />
        <CompanyCard name="Fifth Ave Boba" goals={company_text} logo={boba} percent={20} seg={[false, true, false]} />
      </div>
    </>
  )
}