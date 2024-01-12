"use client"

import React, { ReactNode, forwardRef, useRef } from 'react'
import Link from "next/link";
import { project, navigationPages } from "@/constants/settings";
import useOutsideClick from "@/hooks/useClickOutside";
import { Button } from "../ui/button";
import { TriangleRoundedIcon } from "../icons/commonIcons";
import { LogInIcon, LogOutIcon } from "lucide-react";
import  type { User } from "@/payload-types";


interface Props {
  user: User;
}

const Avatar = ({user}: Props) => {
  const avatarRef = useRef(null)

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const { 
    ref: menuRef,
    isVisible: isOpen,
    setIsVisible: setIsOpen
  } = useOutsideClick(false, avatarRef);

  return (
    <div className="">

      <div ref={avatarRef} onClick={toggleMenu} >
        {user && 
          <ProfilePicture userImage={user?.img} />
        }
      </div>

      <Menu
        ref={menuRef}
        isOpen={isOpen}
      >
        <h1 className=''>{project.name}</h1>

        {user &&
          <div className="">
            <ProfilePicture userImage={user?.img}/>
            <div>
              <h1>{user?.firstName} {user?.lastName}</h1>
              <h2>{user?.email}</h2>
            </div>
          </div>
        }

        <ul className="">
          {navigationPages.map((item, index) => (
            <Link 
              key={index}
              href={item.slug}
              className=""
            >
              <li className="">
                <span className="">{item.icon}</span>
                <p className="">{item.name}</p>
              </li>
            </Link>
          ))}

          {user ?
            <SignOutMenuItem />
            :
            <SignInMenuItem />
          }

        </ul>

      </Menu>
    </div>

  )
}

interface MenuProps {
  isOpen: boolean;
  children: ReactNode;
}

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ isOpen, children }, ref) => {
    return (
      <div
        ref={ref}
        className={`menu ${isOpen ? 'show' : ''}`}
      >
        <TriangleRoundedIcon />
        {children}
      </div>
    )
  }
)

Menu.displayName = 'Menu';

interface ProfilePictureProps {
  userImage?: string | null;
  onClick?: () => void;
}

const ProfilePicture = ({  userImage, onClick }: ProfilePictureProps) => {
  return (
    <div
      className="avatar__image" 
      style={{ backgroundImage: `url(${userImage})` }}
      onClick={onClick}
    />
  )
}

// const SignInMenuItem = () => {
//   return (
//     <PortalLink 
//       to='/sign-in'
//       className='portal-link'
//       activeClassName=''
//       // TODO - onClick close popup
//     >
//       <li className='menu__list--item'>
//           <span className='menu__item--icon'>
//             <SVG id='sign-in-regular' width={24} height={18} />
//           </span>
//           <p className='menu__item--text'>
//             Sign In
//           </p>
//       </li>
//     </PortalLink>
//   )
// }

const SignOutMenuItem = () => {
  return (
    <Button asChild>
      <Link href='/sign-out'>
          <LogOutIcon />
          <p>
            Sign out
          </p>
      </Link>
    </Button>
  )
}

const SignInMenuItem = () => {
  return (
    <Button asChild>
      <Link href='/sign-in'>
          <LogInIcon />
          <p>
            Sign in
          </p>
      </Link>
    </Button>
  )
}

export default Avatar;