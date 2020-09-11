import React from "react";
import PropTypes from "prop-types";

const Pricing = ({ data, training }) => (
  <div className="columns">
    {data.map((price) => (
      <div key={price.plan} className="column">
        <section className="pricing-card">
          <h2 className="has-text-centered has-text-weight-semibold">
            <i>{price.plan}</i>
          </h2>
          <h4 className="is-size-1 has-text-weight-bold has-text-centered">
            ${price.price}
          </h4>
          <p className="has-text-weight-semibold">{price.description}</p>
          {price.items
            ? price.items.map((item, i) => (
                <>
                  {training === true && i === 2 ? (
                    <p key={item} className="is-size-5">
                      <strong>{item}</strong>
                    </p>
                  ) : (
                    <p key={item} className="is-size-5">
                      {item}
                    </p>
                  )}
                </>
              ))
            : null}
        </section>
      </div>
    ))}
  </div>
);

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
};

export default Pricing;
