'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from 'react-icons/ai';
import classNames from 'classnames';

const NavBar = () => {
  const currentPath=usePathname();
  // console.log("🚀 ~ file: Navbar.tsx:8 ~ NavBar ~ currentPath:", currentPath)
  
  const links=[
    {label: "Dashboard",href: "/"},
    {label: "Issues",href: "/issues"},
  ]
  return (
    <nav className="flex space-x-6 bg-slate-400 border-b mb-5 px-5 h-14 items-center">
         <Link href={"/"}><AiFillBug/></Link>
      <ul className="flex space-x-6">
       { links.map(link=>(
        <li key={link.href}>        
        <Link  href={link.href}
        className={classNames({
          "text-zinc-200": link.href===currentPath,
          "text-zinc-900": link.href!==currentPath,
          "hover:text-zinc-500 transition-colors": 'true',
        })}>
        {link.label}
        </Link>
        </li>
       )) }
      </ul>
    </nav>
  );
};

export default NavBar;
