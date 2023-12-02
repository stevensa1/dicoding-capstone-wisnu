import React from 'react';

function CustomBox({ title, children }) {
    return (
        <div className='flex flex-col p-6 w-full bg-white rounded-2xl gap-2.5'>
            <div className='text-black text-2xl font-semibold font-poppins'>
                {title}
            </div>
            <div className='flex'>{children}</div>
        </div>
    );
}

export default CustomBox;
