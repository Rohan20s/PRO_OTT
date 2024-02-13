// Created by Rohan kansari- 25/4/23
// reason - Slideshow For Landing page

import React, { useState } from 'react'
import style from './slideshow.module.css'
import "video-react/dist/video-react.css"; // import css
import { AiOutlineClose ,AiOutlinePlusCircle} from 'react-icons/ai'
import {BsFillPlayCircleFill} from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'react-multi-carousel/lib/styles.css';

import poster_Lost from '../../../Assets/lost3.jpg' 
import poster_black from '../../../Assets/black2.jpg' 
import poster_master from '../../../Assets/master.jpg'
import poster_pathan from '../../../Assets/pathan.jpg'
import video_lost from '../../../Assets/lost.mp4'
import video_black from '../../../Assets/marvel.mp4'
import video_master from '../../../Assets/master.mp4'
import video_pathaan from '../../../Assets/pathan.mp4'
// Import Swiper styles
import 'swiper/css';

const SlideShow = () => {

    const [video,setVideo]=useState(video_lost)
    const [trailerVisible,settrailerVisibility]=useState(false)
    var [index,setIndex]=useState(1)
    function toggleVideo(indexi){
      index=indexi  
      setIndex(index)
      settrailerVisibility(!trailerVisible)
      
    }

    return (
        <div className={style.slideContainer}>
          {trailerVisible? <div className={style.videoContainer} >
            <AiOutlineClose className={style.closeIcon} onClick={e=>{toggleVideo()}}/>
            <video width="100%" height="100%" className={style.videoBg} autoPlay controls >
                <source src={video} style={{width:"100vw"}} type="video/mp4" />
            </video>
            </div>:
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                tabIndex={index}
                navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className={style.slidingContain}>
                        <div className={style.detailContains}>
                        <div className={style.title}>The Lost In Space 2</div>
                        <div className={style.ottName}>The Netflix original series</div>
                        <div className={style.imdb}>8.7 Imdb <span className={style.year}>2019</span><span className={style.age}>18+</span></div>
                        <div className={style.btnContainer}><button className={style.watchBtn} onClick={e=> {setVideo(video_lost); toggleVideo(1)}}><BsFillPlayCircleFill className={style.playCircle} fontSize={16}/> Watch Now</button><button className={style.laterBtn}><AiOutlinePlusCircle className={style.plusCircle} fontSize={16}/> Watch Later </button></div>
                        </div>
                        <img alt="" className={style.slideImg} src={poster_Lost} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.slidingContain}>
                        <div className={style.detailContains}>
                        <div className={style.title}>Black Panther</div>
                        <div className={style.ottName}>Prime Video original series</div>
                        <div className={style.imdb}>8.7 Imdb <span className={style.year}>2016</span><span className={style.age}>12+</span></div>
                        <div className={style.btnContainer}><button className={style.watchBtn} onClick={e=> {setVideo(video_black); toggleVideo(2)}}><BsFillPlayCircleFill className={style.playCircle} fontSize={16}/> Watch Now</button><button className={style.laterBtn}><AiOutlinePlusCircle className={style.plusCircle} fontSize={16}/> Watch Later </button></div>
                        </div>
                        <img alt="" className={style.slideImg} src={poster_black} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.slidingContain}>
                        <div className={style.detailContains}>
                        <div className={style.title}>Master</div>
                        <div className={style.ottName}>The Netflix original series</div>
                        <div className={style.imdb}>8.7 Imdb <span className={style.year}>2020</span><span className={style.age}>13+</span></div>
                        <div className={style.btnContainer}><button className={style.watchBtn} onClick={e=>{setVideo(video_master); toggleVideo(2)}}><BsFillPlayCircleFill className={style.playCircle} fontSize={16}/> Watch Now</button><button className={style.laterBtn}><AiOutlinePlusCircle className={style.plusCircle} fontSize={16}/> Watch Later </button></div>
                        </div>
                        <img alt="" className={style.slideImg} src={poster_master} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={style.slidingContain}>
                        <div className={style.detailContains}>
                        <div className={style.title}>Pathaan</div>
                        <div className={style.ottName}>The Netflix original series</div>
                        <div className={style.imdb}>8.7 Imdb <span className={style.year}>2023</span><span className={style.age}>16+</span></div>
                        <div className={style.btnContainer}><button className={style.watchBtn} onClick={e=>{setVideo(video_pathaan); toggleVideo(4)}}><BsFillPlayCircleFill className={style.playCircle} fontSize={16}/> Watch Now</button><button className={style.laterBtn}><AiOutlinePlusCircle className={style.plusCircle} fontSize={16}/> Watch Later </button></div>
                        </div>
                        <img alt="" className={style.slideImg} src={poster_pathan}  />
                    </div>
                </SwiperSlide>
                {/* <div data-src={Logo} />
                <div data-src={Logo} /> */}
            </Swiper>}

        </div>
    )
}

export default SlideShow