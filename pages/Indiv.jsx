import Head from 'next/head';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { CompanyCard } from '@/components/CompanyCard';
import { SelectField, TextField } from '@/components/Fields';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Logo } from '@/components/Logo';
import { PageList } from '@/components/PageList';
import { Profile } from '@/components/Profile';

export function Indiv() {
  return (
    <>
      <Head>
        <title>Dashboard - SustainABiz</title>
      </Head>
      <div className="company-card-list">
        <CompanyCard name="First" logo="" goals="Environmental" />
        <CompanyCard name="Second" logo="" goals="Environmental" />
        <CompanyCard name="Third" logo="" goals="Environmental" />
        <CompanyCard name="Fourth" logo="" goals="Environmental" />
        <CompanyCard name="Fifth" logo="" goals="Environmental" />
      </div>
      <PageList current="1" />
    </>
  )
}