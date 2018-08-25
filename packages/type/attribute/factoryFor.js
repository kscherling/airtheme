// prettier-ignore
export const factoryFor = (
  {
    type,
    view,
    unit,
    displays,
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
      displays: displays || schema.displays,
      reference: reference || schema.reference,
      content: factoryContent || content || schema.content
    }
  )

export default factoryFor
