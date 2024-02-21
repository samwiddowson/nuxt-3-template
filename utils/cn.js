import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
    console.log(inputs)
    return twMerge(clsx(inputs))
}
