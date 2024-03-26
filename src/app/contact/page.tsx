import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  icons:{
    icon:"/images/cstad.png"
  },
  title:"Contact",
  description:"This is description contact",
  keywords:['shop', 'sell'],
};
const contact = () => {
  return (
    <div>
        <h1>Contact</h1>
    </div>
  )
}
export default contact;
