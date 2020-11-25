import React from 'react'
import Button from './Button'

const Modal = ({getModal}) => {
    return (
        <div className="fixed  z-10 overflow-y-hidden inset-0">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-79"></div>
                </div>
                <div className="inline-block
                align-bottom bg-white 
                rounded-lg text-left
                overflow-hidden
                shadow-xl 
                transform
                transition-all
                 my-40
                sm:align-middle 
                sm:max-w-lg
                sm:w-full" 
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline">
                  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                       <h1 className="text-center">Hello World</h1>
                    <div className="flex justify-center">
                        <Button onClick={getModal} className="m-1" children="No" />
                        <Button className="m-1" children="Yes" />
                    </div>
                </div>
                </div> 
           </div>

            </div>
    )
}

export default Modal
