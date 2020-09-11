import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-elastic-carousel';
import Testimonial from './Testimonial'

export default function Testimonials({testimonials}) {
  
  return (
  <Carousel
    autoPlaySpeed={10000}
    breakPoints={[
      { 
        width: 1, 
        itemsToShow: 2, 
        // itemsToScroll: (testimonials.length - 2) 
      },
      { 
        width: 550, 
        itemsToShow: 3, 
        // itemsToScroll: (testimonials.length - 3) 
      },
      { 
        width: 850, 
        itemsToShow: 4, 
        // itemsToScroll: (testimonials.length - 4) 
      },
      { 
        width: 1150, 
        itemsToShow: 5, 
        // itemsToScroll: (testimonials.length - 5) 
      },
      { 
        width: 1450, 
        itemsToShow: 6, 
        // itemsToScroll: (testimonials.length - 6) 
      },
      { 
        width: 1750,
        itemsToShow: 7,
        // itemsToScroll: (testimonials.length - 7) 
      },
    ]}
    className='testimonials-carousel'
    enableSwipe={true}
    enableMouseSwipe={true}
    enableAutoPlay={true}
    // itemsToShow={4}
    // itemsToScroll={testimonials.length}
    showArrows={false}
    transitionMs={700}
  >
    {testimonials.map((testimonial) => (
      <Testimonial testimonial={testimonial} />
    ))}
  </Carousel>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      name: PropTypes.string,
    })
  ),
}