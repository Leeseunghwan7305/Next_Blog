import { NavList } from '@/constants/nav';
import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <div className="flex max-w-5xl items-center justify-between p-3 mx-auto my-0">
      <h1 className="text-lg font-bold">Seunghwan`s Blog</h1>
      <div className="flex gap-4">
        {NavList.map((list) => {
          return (
            <>
              <Link href={`/${list}`}>
                <span className="hover:text-sky-300">{list}</span>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
