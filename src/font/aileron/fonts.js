import localFont from 'next/font/local'
import "../../styles/globals.css" 

export const aileron = localFont({
  src: [
    {
      path: './Aileron-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Aileron-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Aileron-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-aileron',
})