import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Popover, Tab, Transition } from '@headlessui/react';
import { useId } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import backgroundImage from '@/images/background-call-to-action.jpg';

export function CompanyCard(props) {
    return (
      <div className="company-card">
        <h1>{props.name}</h1>
        {/* <img src={props.logo} alt={props.name} /> */}
        <p>{props.goals}</p>
      </div>
    )
}