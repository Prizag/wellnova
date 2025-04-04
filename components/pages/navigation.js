import { Card } from '@/components/ui/card';
import {Hospital} from 'lucide-react'
import { Button } from '../ui/button';
export default function Navigation(){
    return(
        <>
        <div >
            <Card className='flex flex-row h-24 w-full justify-between items-center'>
                <div className='flex p-2'>
                    <Hospital/>
                    <h2>WellNova</h2>
                </div>
                <div className='list-none flex gap-5 text-gray-500'>
                <li> Features</li>
                <li>  Testomonials</li>
                <li>  Contact</li>
                </div>
                <div className='space-x-4 p-2'>
                    <Button variant="primary" size={12}>Login</Button>
                    <Button variant="secondary" size={12}>SignUp</Button>
                </div>
            </Card>
        </div>
        </>
    )
}