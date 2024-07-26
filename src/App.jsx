import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil';
import { videos } from './atom.jsx';
import './App.css'
// import { faSolid, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <RecoilRoot>
        <Video></Video>
      </RecoilRoot>

    </>
  )
}
const Navbar = () => {
  return (
    <div className="flex fixed bg-white dark:bg-black w-full justify-between z-20 items-center px-4">
      <div className="">

        <img className=' w-5 h-5' src='/hamburger.svg' alt='humberger logo' />
      </div>
      <div className='flex  items-center'>
        <img className='w-16 h-8' src='/youtube.svg' />
        <svg xmlns="http://www.w3.org/2000/svg" id="yt-logo-updated-svg_yt3"
          className="external-icon w-4 h-4" viewBox="0 0 90 20" focusable="false"
          style={{ pointerEvents: 'none', display: 'inherit' }} aria-hidden="true">
          <svg id="yt-logo-updated_yt3" viewBox="0 0 90 20" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
          </svg>

        </svg>


        <div>
          <span className='font-bold font-sans scale-y-150 sextended '>YouTube</span>
          <span className=' font-mono font-thin  -scale-y-50 relative bottom-3 '>IN</span>
        </div>
      </div >

      {/* <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /> */}
      <Searchbar></Searchbar>
      <div >&#8942;</div>
      <div>sign in</div>
    </div >
  )
}
const Searchbar = () => {
  return (
    <>
      <div className='flex items-center mt-3 justify-self-auto center h-11 py-0 justify-between w-1/2 border-[#ccc] border-2 searchbox rounded-t-full rounded-b-full border-r-slate-400'>
        <input className='  focus:outline-none w-11/12 mx-4 justify-self-strech' placeholder=' search'></input>
        <button className='cursor-pointer outline-none focus:outline-none active:outline-none hover:border-none bg-inherit' >
          <div className='my-2'>
            <svg className="" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="35" viewBox="0 0 50 50">
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </div>
        </button>
      </div>
    </>
  )
}
const Video = () => {
  const input = useRecoilValue(videos);
  console.log(input)
  return (
    // < h1 > okay</h1 >
    <div className=' pt-16 grid md:grid-cols-3' >
      {
        input.map(vide => {
          return <VidoCard
            key={vide.key}
            title={vide.title}
            channel_name={vide.channel_name}
            channel_thumb={vide.channel_thumb}
            video_thumb={vide.video_thumb}
            time={vide.time}
          />
        })
      }
    </div >
  )
}
const VidoCard = ({ title, channel_name, channel_thumb, video_thumb, time }) => {
  console.log(channel_thumb)
  // console.log(channel_thumb)
  return (<div className='m-5 ms:grid col-auto'>
    <div className=" relative">
      <img className='rounded-3xl' src={`/video_thumb_${video_thumb}.jpg`} alt='video thumbnail' />
      <div className='absolute z-10 right-1 bottom-2 bg-black text-gray-100'>{time}</div>
    </div>

    <div className='flex justify-center'>
      <div className='  rounded-full justify-self-center'>
        <img className="pt-2 rounded-full justify-center w-10 h-10" src={'./channel_thumb_' + channel_thumb + '.svg'} alt='channel logo'></img>
      </div>
      <div className=' pl-3'>
        <div className='flex'>
          <p className='font-bold'>{title} </p>
          <div className=" pr-3">&#8942;</div>
          {/* <dir className="bg-indigo-400">

          </dir> */}
        </div>
        <div className='text-sm font-medium text-gray-400 my-1 px-2  md:self-start  hidden md:inline'  > {channel_name}</div>

        <div className='flex justify-start font-medium text-[#9b9b9b]' >
          <span className='text-sm  my-1 px-2 inline md:self-start  md:hidden'  > {channel_name} .</span>
          <span className='text-sm my-1 px-2 inline'>1.1M views </span> .
          <span className='text-sm pl-1 my-1 inline'> 10 days ago</span>

        </div>
      </div>
    </div>
  </div>)
}
export default App
