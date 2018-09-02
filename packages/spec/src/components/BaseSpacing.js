const BaseSpacing = connect(mapBaseSpacing)(({ baseSpacing }) => (
  <SimpleList.TwoColumns>
    <Node name="baseSpacing" val={baseSpacing} />
  </SimpleList.TwoColumns>
))
