import { Button } from '@/components/ui/button'
import { ImagePlusIcon, ArrowRightIcon } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-center h-screen px-4 sm:px-6'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-foreground pb-2 text-center'>
          Build something with <span className='relative inline-block px-1'>
            <span className='relative'>love</span>
            <span 
              className='absolute left-0 right-0 top-[78%] h-4 sm:h-5 md:h-6 -translate-y-1/2 bg-red-500/80 z-30'
              style={{
                clipPath: 'polygon(0% 40%, 8% 30%, 20% 50%, 30% 35%, 40% 55%, 50% 45%, 60% 50%, 70% 40%, 80% 55%, 90% 45%, 100% 50%, 100% 65%, 90% 70%, 80% 60%, 70% 70%, 60% 65%, 50% 75%, 40% 65%, 30% 75%, 20% 70%, 10% 80%, 0% 60%)',
                transform: 'translateY(-50%) rotate(-1.5deg)',
                borderRadius: '20px',
              }}
            />
            <span 
              className='absolute left-0 right-0 top-[80%] h-3 sm:h-4 md:h-5 -translate-y-1/2 bg-red-600/70 z-30'
              style={{
                clipPath: 'polygon(3% 50%, 12% 40%, 25% 60%, 35% 45%, 45% 65%, 55% 55%, 65% 60%, 75% 50%, 85% 65%, 95% 55%, 100% 60%, 100% 70%, 88% 75%, 75% 65%, 65% 75%, 55% 70%, 45% 80%, 35% 70%, 25% 80%, 15% 75%, 5% 85%, 0% 65%)',
                transform: 'translateY(-50%) rotate(1deg)',
                borderRadius: '15px',
              }}
            />
          </span> AI
        </h1>
        <p className='text-xs sm:text-sm text-muted-foreground mt-2 text-center'>A wanna-be lovab-</p>
        <div className='mt-4 sm:mt-6 w-full max-w-2xl px-2 sm:px-4 py-3 sm:py-5 rounded-2xl relative'>
        <textarea className='w-full h-45 p-3 sm:p-4 pb-16 sm:pb-20 rounded-2xl sm:rounded-4xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none transition-all text-sm sm:text-base' 
        placeholder='Describe your project...' />
        <div className='absolute bottom-4 sm:bottom-6 md:bottom-8 left-3 sm:left-4 md:left-6 right-3 sm:right-4 md:right-6 flex gap-2 justify-between items-center'>
            <Button variant='ghost' size='sm' className='sm:size-lg rounded-full'><ImagePlusIcon className='w-4 h-4 sm:w-5 sm:h-5' /></Button>
            <Button size='sm' className='sm:size-lg rounded-full'><ArrowRightIcon className='w-4 h-4 sm:w-5 sm:h-5' /></Button>
        </div>
        </div>
    </div>
  )
}

export default Hero