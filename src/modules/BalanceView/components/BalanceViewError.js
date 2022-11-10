import React from 'react';
import { ErrorIcon } from '../../../utils/icons';


export const BalanceViewError = () => {
    return (
        <div className="bg-slate-800 h-full rounded-xl flex flex-col justify-center items-center">
            <div>
                <ErrorIcon size={50} className="inline text-slate-400 mr-3" />
                <span className='text-slate-400'>Sorry an error occured</span>
            </div>
        </div>
    );
};
