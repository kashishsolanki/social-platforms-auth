import React from 'react';
import { Navbar, Typography, Button } from '@material-tailwind/react';

export default function StickyNavbar() {
  return (
    <>
      <Navbar className="sticky inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-semibold"
          >
            Verify User
          </Typography>
        </div>
      </Navbar>
    </>
  );
}
