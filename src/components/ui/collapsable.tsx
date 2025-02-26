"use client"

import React, { useState, type ReactNode } from 'react'
import { ChevronLeft } from "lucide-react";

interface Props {
  title: string;
  children: ReactNode
}

function Collapsible({title, children}: Props){
  const [isOpen, setIsOpen] = useState(false)

  return (
      <div>
        <div className="flex items-center bg-primary-foreground p-4 cursor-pointer select-none" onClick={() => setIsOpen(prev => !prev)}>
          <h1 className='text-lg'>{title}</h1>
          <div className='ml-auto'>
            <ChevronLeft 
              width={32}
              className={`transform transition-transform duration-150 ease-in-out ${isOpen ? '-rotate-90' : ''}`}
            />
          </div>
        </div>

        {isOpen &&
          <div>
            <div className="bg-primary-foreground flex justify-between items-center p-4">
              {children}
            </div>
          </div>
        }
      </div>
  )
}

export default Collapsible;