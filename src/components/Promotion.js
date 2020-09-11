import React, { useState } from 'react'
import { v4 } from 'uuid'
import Img from "gatsby-image"
import Button from './Button'
import config from '../../config'

export default function Promotion({promotion}) {
    return (
        <>
          <div
            className="full-width-image promotion"
            style={{
                backgroundImage: `url(${
                !!promotion 
                && !!promotion.image 
                && !!promotion.image.childImageSharp 
                ? 
                promotion.image.childImageSharp.fluid.src 
                : 
                promotion.image
                })`,
                width: '100vw',
                backgroundPosition: 'center center',
                objectFit: 'cover'
            }}
          >
              <section className='promotion-card'>
                  <h2>{promotion.title}</h2>
                  <p>{promotion.text}</p>
                <Button button={promotion.buttonText} to={config.links.contact.path} />
              </section>

          </div>
        </>
    )
}