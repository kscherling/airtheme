// prettier-ignore
export const factoryFor = (
  {
    object,
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
      object: object || schema.object,
      view: factoryDisplay || view || schema.view,
      unit: unit || schema.unit,
      viewable: viewable || schema.viewable,
      reference: reference || schema.reference,
      content: factoryContent || content || schema.content
    }
  )

export default factoryFor
