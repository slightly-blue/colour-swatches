
const Swatch = ({ data }) => {
  const Color = require('color');

  return (
    <div id={"swatch-" + data.id} className="swatch"
      style={{
        width: '5rem',
        height: '5rem',
        padding: '0',
        margin: '0',
        zIndex: '1',
        position: 'relative',
        boxShadow: '0px 0px 5px 5px #000',
        backgroundColor: data.color,
      }}
    >
      <code className="swatch-text" style={{ fontSize: '0.8rem', position: "absolute", bottom: '0.5rem', left: '1rem', color: Color(data.color).isDark() ? '#fff' : '#000' }}>
        {data.color}
      </code>
      {/* Maybe add some accessibility icon  on hover? */}
    </div>
  )
}

export default Swatch 