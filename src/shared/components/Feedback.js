import React from 'react';
import { CloseIcon } from '../../utils/icons';

export const Feedback = ({ isVisible, handleClose, msg }) => {
    return (
        <>
            {isVisible && (
                <div
                    id="toast-undo"
                    className={`z-50 absolute left-1/2 -translate-x-1/2 bottom-20 flex items-center 
            px-4 py-2 w-full max-w-xs text-red-800 rounded-lg shadow 
            dark:text-red-500 bg-[#24283b] border-t-4 border-red-500`}
                    role="alert"
                >
                    {/* <div className="text-sm font-normal">{msg}</div> */}
                    <div className="ml-3 text-sm font-medium">{msg}</div>
                    <div className="flex items-center ml-auto space-x-2">
                        {/* <button
                            type="button"
                            className="bg-white rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                            data-dismiss-target="#toast-undo"
                            aria-label="Close"
                            onClick={handleClose}
                        >
                            <CloseIcon size={25} className="fill-gray-400" />
                        </button> */}
                        <button
                            type="button"
                            className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-red-500 rounded-lg p-1.5 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-500 dark:hover:bg-gray-700"
                            data-dismiss-target="#alert-border-1"
                            aria-label="Close"
                            onClick={handleClose}
                        >
                            <span className="sr-only">Dismiss</span>
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
