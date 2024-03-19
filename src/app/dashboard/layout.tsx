import React from 'react'

const DashbooardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
  return (
    <aside>
        {children}
    </aside>
  )
}

export default DashbooardLayout