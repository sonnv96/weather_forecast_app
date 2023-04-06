import React, { Fragment, useEffect, useState } from 'react';
import bell from '../../../assets/icons/bell.svg'

interface BoxChatBProps {
    handleShowButton: () => void;
    handleHideButton: () => void;
}

const BoxChatB: React.FC<any> = (props: BoxChatBProps) => {
    debugger
    const { handleShowButton, handleHideButton } = props;
    const [isLoadingBoxChat, setIsLoadingBoxChat] = useState<boolean>(false);
    useEffect(() => {
        console.log('Boxchat B ready');
        setIsLoadingBoxChat(true);
    }, [])
    return (
        <Fragment>
            <div className="w-[300px] h-[300px] bg-orange-300 absolute right-0 bottom-0">
                <h2 className='m-10'>Boxchat B</h2>
                {isLoadingBoxChat &&
                    <>
                        <img src={bell} alt='' className="h-[30px]" />
                        <button className="bg-light p-3 rounded-[10px] mr-1" onClick={handleShowButton} >show</button>
                        <button className="bg-light p-3 rounded-[10px]" onClick={handleHideButton}>hide</button>
                    </>
                }

            </div>
        </Fragment>
    );
};

export default BoxChatB;
