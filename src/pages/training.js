import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Button from '../components/Button'
import config from "../../config";

export const ProductPageTemplate = ({
  image,
  title,
  heading,
  description,
  description1,
  description2,
  button,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
  benefits,
}) => (
  <div className="content">
    <div
      style={{
        // backgroundColor: 'rgb(255,255,255,0.2)',
        backgroundColor: "rgb(0,0,0,0.4)",
        height: "70vh",
        position: "absolute",
        width: "100%",
      }}
    ></div>
    <div
      className="full-width-image"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: "center center",
        backgroundAttachment: `fixed`,
        height: "70vh",
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          color: "rgb(255,255,255)",
          textAlign: "center",
          textShadow: ".5px .5px 0px rgb(255,255,255,0.3)",
          lineHeight: "1",
          padding: "0.25em",
          fontSize: "2rem",
          fontWeight: "bold",
          zIndex: 10,
          // marginTop: '10vh',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="training-page-header">
              <h3 className="has-text-weight-semibold is-size-2 underline">{heading}</h3>
              {description ? <p>{description}</p> : null}
              {description1 ? <p>{description1}</p> : null}
              {description2 ? <p>{description2}</p> : null}
              {button ? (
                <Button button={button} to={config.links.contact.path} />
              ) : null}
            </div>
          </div>
          <div className="columns">
            <div style={{ width: "100%" }}>
              <Pricing training={true} data={pricing.plans} />
              {button ? (
                <Button button={button} to={config.links.contact.path} />
              ) : null}
            </div>
          </div>
          {/* {button ? (
            <Button button={button} to={config.links.contact.path} />
          ) : null} */}
        </div>
      </div>
    </section>
  </div>
);

class ProductPage extends React.Component {
  render() {
    const frontmatter = config.content.trainingPage;

    return (
      <Layout>
        <ProductPageTemplate
          image={frontmatter.image}
          title={frontmatter.title}
          heading={frontmatter.heading}
          description={frontmatter.description}
          description1={frontmatter.description1}
          description2={frontmatter.description2}
          button={frontmatter.button}
          intro={frontmatter.intro}
          main={frontmatter.main}
          testimonials={frontmatter.testimonials}
          fullImage={frontmatter.full_image}
          pricing={frontmatter.pricing}
          benefits={frontmatter.benefits}
        />
      </Layout>
    );
  }
}

export default ProductPage;
