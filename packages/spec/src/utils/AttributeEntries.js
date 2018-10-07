import React from 'react'

// NOTE: Delete after base spacing is moved to app

const AttributeEntries = ({
  attribute,
  component: Component,
  renderLoading = () => 'Loading'
}) =>
  attribute
    ? Object.entries(attribute).map(([k, v], idx) => (
        <Component key={idx} name={k} value={v} />
      ))
    : renderLoading()

export default AttributeEntries
