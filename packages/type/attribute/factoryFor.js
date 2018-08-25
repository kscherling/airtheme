// prettier-ignore
export const factoryFor = (
  {
    type,
    display,
    unit,
    displays,
    reference,
    content
  } = {},
  schema = {}
) => ({
  display: factoryDisplay,
  content: factoryContent
} = {}) =>
  Object.assign(
    {},
    schema,
    {
      type: type || schema.type,
      display: factoryDisplay || display || schema.display,
      unit: unit || schema.unit,
      displays: displays || schema.displays,
      reference: reference || schema.reference,
      content: factoryContent || content || schema.content
    }
  )

export default factoryFor
