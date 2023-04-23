import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Popover, Tab, Transition } from '@headlessui/react';
import { useId } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

import backgroundImage from '@/images/background-call-to-action.jpg';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import meter_g from '@/images/meter_g.svg';
import meter_y from '@/images/meter_y.svg';
import meter_r from '@/images/meter_r.svg';

function SEG([s, e, g]) {
  return (
    <div className="company-seg">
      {s ? <b className="seg-s">S</b> : <p>S</p>}
      {e ? <b className="seg-e">E</b> : <p>E</p>}
      {g ? <b className="seg-g">G</b> : <p>G</p>}
    </div>
  )
}

export function CompanyCard(props) {
    return (
      <div className="company-card">
        <Image src={props.logo} alt={props.name} />
        <div className="company-info">
          <div className="company-info-top">
            <h1>{props.name}</h1>
            {SEG(props.seg)}
          </div>
          <p>{props.goals}</p>
        </div>
        <div className="company-ecoscore">
          <b>Eco-score</b>
          <Image src={props.percent > 60 ? meter_g : (props.percent > 40 ? meter_y : meter_r)} />
          <b>{props.percent}%</b>
          <p>{props.percent > 60 ? "sustainable" : (props.percent > 40 ? "medium" : "unsustainable")}</p>
        </div>
      </div>
    )
}