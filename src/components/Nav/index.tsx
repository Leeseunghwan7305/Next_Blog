import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <div className="flex max-w-5xl justify-between p-3 mx-auto">
      <h1 className="text-lg font-bold">Seunghwan`s Blog</h1>
      <div className="flex gap-4">
        <Link href={'/home'}>
          <span className="hover:text-sky-300">home</span>
        </Link>
        <Link href={'/about'}>
          <span className="hover:text-sky-300">about</span>
        </Link>
        <Link href={'/posts'}>
          <span className="hover:text-sky-300">posts</span>
        </Link>
        <Link href={'/contact'}>
          <span className="hover:text-sky-300">contact</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
