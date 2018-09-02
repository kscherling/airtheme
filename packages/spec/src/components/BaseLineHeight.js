const BaseLineHeight = connect(mapBaseLineHeight)(({ baseLineHeight }) => (
  <SimpleList.TwoColumns>
    <Node name="baseLineHeight" val={baseLineHeight} />
  </SimpleList.TwoColumns>
))
