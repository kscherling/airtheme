// prettier-ignore
export const factoryFor = (
  {
    type,
    view,
    unit,
    viewable,
    reference,
    content
  } = {},
  schema = {}
) => ({
  view: factoryDisplay,
  content: factoryContent
} = {}) =>
  Object.assign(
    {},
    schema,
    {
      type: type || schema.type,
      view: factoryDisplay || view || schema.view,
      unit: unit || schema.unit,
      viewable: viewable || schema.viewable,
      reference: reference || schema.reference,
      content: factoryContent || content || schema.content
    }
  )

export default factoryFor
