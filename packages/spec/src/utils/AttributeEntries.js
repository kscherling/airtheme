import React from 'react'

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
