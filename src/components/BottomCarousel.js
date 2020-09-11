import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-elastic-carousel';
import Promotion from './Promotion'

export default function BottomCarousel({data}) {
  
  return (
  <Carousel
    autoPlaySpeed={20000}
    className='carousel'
    enableSwipe={true}
    enableMouseSwipe={true}
    enableAutoPlay={true}
    itemsToShow={1}
    itemsToScroll={1}
    transitionMs={700}
    arrows={false}
  >
    {data.map((promotion) => (
      <Promotion promotion={promotion} />
    ))}
  </Carousel>
  )
}

BottomCarousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      name: PropTypes.string,
    })
  ),
}
