import React from 'react'
import PropTypes from 'prop-types'

const Benefits = ({ data }) => (
  <div className="columns">
    <ul>
    {data.map((benefit) => (
      <li key={benefit.title} className="column">
        {benefit.title}
      </li>
    ))}
    </ul>
  </div>
)

// Benefits.propTypes = {
  // data: PropTypes.arrayOf(
    // PropTypes.shape({
    //   title: PropTypes.string,
    // })
//   ),
// }

export default Benefits
