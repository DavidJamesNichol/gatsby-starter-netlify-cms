import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Button from '../components/Button'
import BottomCarousel from '../components/BottomCarousel'

import config from '../../config'

const animateFromLeft = {
  initial: {
    opacity: 0,
    x: -250,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 1.2,
  }
}

const animateFromRight = {
  initial: {
    opacity: 0,
    x: 250,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 1.2,
  }
}

export const IndexPageTemplate = ({
  image,
  main,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      style={{
        // backgroundColor: 'rgb(255,255,255,0.2)',
        backgroundColor: 'rgb(0,0,0,0.4)',
        height: '90vh',
        position: 'absolute',
        width: '100%'
      }}
      ></div>
    <div
      className="full-width-image"
      style={{
        backgroundImage: `url(${
          !!image && !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: 'center top', 
        backgroundAttachment: `fixed`,
        height: '90vh',
        // paddingTop: '-10vh'
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <motion.h1
        {...animateFromLeft}
          style={{
            // backgroundColor: 'rgb(0,0,0,0.2)',
            color: 'rgb(255,255,255)',
            // color: 'rgb(0,0,0, 0.6)',
            // color: 'rgb(6, 181, 228, 0.6)',
            textAlign: 'center',
            textShadow: '.5px .5px 0px rgb(255,255,255,0.3)',
            lineHeight: '1',
            padding: '0.25em',
            fontSize: '6rem',
            fontWeight: 'bold',
            zIndex: 10,
            // marginTop: '10vh',
          }}
        >
          {/* {title} */}
          Avolve
          {/* <br/> */}
        </motion.h1>
        <motion.h2
          {...animateFromRight}
          style={{
            color: 'rgb(255,255,255)',
            textAlign: 'center',
            textShadow: '.5px .5px 0px rgb(255,255,255,0.3)',
            lineHeight: '1',
            padding: '0.25em',
            fontSize: '2rem',
            fontWeight: 'bold',
            zIndex: 10,
            // marginTop: '10vh',
          }}
        >
          /āˈvälv/ v: to become more
        </motion.h2>
        <motion.button 
          className="cta-button"
          {...animateFromLeft}
        >
          <Link style={{color: 'black'}} to={config.links.memberships.path}>
            {subheading}
          </Link>
        </motion.button>
      </div>
    </div>
    <section style={{width: '120vw', marginLeft: '-10vw'}} className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column1">
              <div className="content">
                <div className="content1">
                  <div className="tile">
                    <h1 className="title underline">{mainpitch.title}</h1>
                  </div>
                  <div className="tile">
                    <h5 className="subtitle">{mainpitch.description}</h5>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      {heading}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
                <Features gridItems={intro.blurbs} />
                {/* <div
                  className=""
                  style={{
                    backgroundImage: `url(${
                      !!main && !!main.image1 && !!main.image1.image.childImageSharp ? main.image1.image.childImageSharp.fluid.src : main.image1.image
                    })`,
                    backgroundPosition: 'center bottom', 
                    // backgroundAttachment: `fixed`,
                    height: '40vh',
                    width: '60%',
                    margin: '0 20%',
                    // paddingTop: '-10vh'
                    
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom',
                    // display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                </div> */}
                </div>
                </div>
                </div>
                </div>
                </div>
                <h2 
                style={{
                  textAlign: 'center',
                  padding: '2rem 0 1rem',
                }}
                className="underline"
                >See What Others Have To Say</h2>
                <Testimonials testimonials={main.testimonials} />
    </section>
    <div className="rec-arrows-parent">
      <BottomCarousel data={main.bottomCarousel} />
    </div>
  </div>
)

const IndexPage = ({ data }) => {
  const frontmatter = config.content.indexPage

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
      />
    </Layout>
  )
}

export default IndexPage
