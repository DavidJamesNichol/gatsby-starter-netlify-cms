import React, { useState } from 'react'
import { v4 } from 'uuid'
import Img from "gatsby-image"
import Modal from 'react-modal';
 
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '60vw'
    }
  };

export default function Testimonial({testimonial}) {
    // const [expanded, setExpanded] = useState(false)
    const [modalIsOpen,setIsOpen] = useState(false);
    var subtitle;
    function openModal() {
        setIsOpen(true);
      }
      function closeModal(){
        setIsOpen(false);
      }
     
    return (
        <>
          <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          <section key={v4()} className="testimonial-message-modal">
            <div className="testimonial-card scroll">
              {/* <Img className='testimonial-image' fluid={testimonial.image.childImageSharp.fluid}></Img> */}
              {/* <img className='testimonial-image' src={testimonial.image} /> */}
              <p className='testimonial-citation'> – {testimonial.name}</p>
              <p className='testimonial-text'>{testimonial.text}</p>
            </div>
          </section>
        </Modal>

          <section key={v4()} className="testimonial-message">
            <div className="testimonial-card">
              {/* <img className='testimonial-image' src={testimonial.image} /> */}
            {/* <Img className='testimonial-image' fluid={testimonial.image.childImageSharp.fluid}></Img> */}
            <p className='testimonial-citation'> – {testimonial.name}</p>
            <p className='testimonial-text'>{testimonial.text}</p>
            </div>
            <a className='testimonial-button' onClick={openModal}>Read More</a>
          </section>
        </>
    )
}