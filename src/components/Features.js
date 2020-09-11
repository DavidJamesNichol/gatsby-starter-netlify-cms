import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Img from "gatsby-image";
import { Link } from "gatsby";

const FeatureGrid = ({ gridItems }) => (
  <div className="">
    {gridItems.map((item, itemI) => (
      <div key={item.text} className="">
        <section className="page-tiles">
          {itemI % 2 === 0 ? item.paragraph : null}
          <motion.div
            className="page-tile"
            initial={{
              opacity: 0,
              x: -250,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1.2,
            }}
          >
            <div
              style={{
                display: "inline-block",
                // height: '20vh',
                width: "100%",
              }}
            >
              <p
                  style={{
                    textAlign: "center",
                  }}
                  >
                <Link
                  to={item.link}
                >
                  {item.text}
                </Link>
              </p>
              {/* <Img 
                fluid={item.image.childImageSharp.fluid}
                className='tile-image' 
                /> */}
              <img src={item.image} />
              {/* <PreviewCompatibleImage imageInfo={item} /> */}
            </div>
          </motion.div>
          {itemI % 2 !== 0 ? item.paragraph : null}
        </section>
      </div>
    ))}
  </div>
);

export default FeatureGrid;
