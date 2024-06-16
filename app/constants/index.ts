import { NextFont } from 'next/dist/compiled/@next/font'
import { Pacifico, Poppins ,Roboto } from 'next/font/google'

export const pacifico : NextFont = Pacifico({ subsets: ['latin'], weight: '400' })
export const poppin : NextFont = Poppins({ subsets: ['latin'], weight: ['100','200','300','400', '500', '300', '600'] })
export const roboto : NextFont  = Roboto({subsets:['latin'],weight:['100','300','400','700','900']})
