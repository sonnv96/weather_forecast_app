import React, { Fragment, useEffect, useState } from 'react';
import bell from '../../../assets/icons/bell.svg'

const BoxChatA: React.FC<any> = () => {
    const [isLoadingBoxChat, setIsLoadingBoxChat] = useState<boolean>(false);
    useEffect(() => {
        console.log('Boxchat A ready');
        setIsLoadingBoxChat(true);
    }, [])
    return (
        <Fragment>
            <div className="w-[300px] h-[300px] bg-orange-300 absolute left-0 bottom-0">
                <h2 className='m-10'>Boxchat A</h2>
                {isLoadingBoxChat && <img src={bell} alt='' className="h-[30px]" />}
            </div>
        </Fragment>
    );
};

export default BoxChatA;
