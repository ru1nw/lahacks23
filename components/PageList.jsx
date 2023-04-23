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

export function PageList(props) {
    return (
      <ul className="page-list">
        <li className={"page-list-block" + (props.current == 1 ? " current-list-block" : "")}>
          <button>1</button>
        </li>
        <li className={"page-list-block" + (props.current == 1 ? " current-list-block" : "")}>
          <button>2</button>
        </li>
        <li className={"page-list-block" + (props.current == 1 ? " current-list-block" : "")}>
          <button>3</button>
        </li>
        {/* add more page-list-blocks */}
      </ul>
    )
}