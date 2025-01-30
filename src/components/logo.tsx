
import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <>
    <Link href='/' className='flex items-center space-x-2'>
    <Sparkles className='size-8 stroke-primary-foreground' strokeWidth={1.5}/>
    <span className='text-lg font-semibold text-primary-foreground'>ImagAIne</span>
    </Link>
    </>
  )
}

export default Logo
