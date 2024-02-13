import React from 'react'
import style from './slider.module.css'
// import Carousel from 'react-grid-carousel'
// import "react-multi-carousel/lib/styles.css";

// import r7 from "../../../Assets/r9.jpg"

const Slider = (props) => {


    return (
        <div className={style.recommendedContainer}>
            <div className={style.title}>
                {props.title}
            </div>
            {/* <Carousel cols={4} rows={1} gap={10} loop autoplay={3000}>
                {props.images.map((m, i) => {

                    return <Carousel.Item>
                        <div className={style.card}>
                            <img alt="" className={style.img} src={m} />
                            <div className={style.name}></div>
                        </div>
                    </Carousel.Item>
                })}

            </Carousel> */}
        </div>
    )
}

export default Slider