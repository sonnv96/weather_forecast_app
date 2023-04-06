import React, { Fragment, useEffect, useState } from 'react';
import BoxChat2 from './components/BoxChatA';
import BoxChat from './components/BoxChatB';

const dummyData = Array.from({ length: 10 }, (_, i) => i + 1).map((number: number) => ({
  id: number,
  imgUrl: `https://picsum.photos/200/300/?blur=${number}`
}));
console.log(dummyData);

const HomePage: React.FC<any> = () => {
  const [isLoadingBoxChat, setIsLoadingBoxChat] = useState<boolean>(false);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [isShowButton, setIsShowButton] = useState<boolean>(false);

  useEffect(() => {
    console.log('parent component ready');
    // startTransition(() => {
    //   console.log(' effect1');
      setIsLoadingBoxChat(true);
    // });
  }, [])

  const handleLastImageLoaded = (id: number) => {
    if (id === 10) setIsImageLoaded(true)
  };

  return (
    <Fragment>
      <div className="relative h-screen">
        <h2 className='m-10'>Demo</h2>
        <div className="grid grid-cols-5 gap-4">
          {dummyData.map(data => (
            <div key={data.id} className="flex items-center justify-center w-full">
              <img onLoad={() => handleLastImageLoaded(data.id)} src={data.imgUrl} alt='' />
            </div>
          ))}
        </div>
        {isShowButton && <div className="bg-secondary-300 p-3 rounded-[10px]" >Show message from boxchat</div>}
        {isLoadingBoxChat && <BoxChat handleShowButton={() => setIsShowButton(true)} handleHideButton= {() => setIsShowButton(false)}/>}
        {isImageLoaded && <BoxChat2 />}
      </div>
    </Fragment>
  );
};

export default HomePage;
