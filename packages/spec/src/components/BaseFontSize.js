const BaseFontSize = connect(mapBaseFontSize)(({ baseFontSize }) => (
  <SimpleList.TwoColumns>
    <Node name="baseFontSize" val={baseFontSize} />
  </SimpleList.TwoColumns>
))
