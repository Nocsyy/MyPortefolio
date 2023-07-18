function Apropos() {
  return (
    <div
      style={{
        backgroundColor: ' rgba(232, 232, 232, 0.442)',

        height: '33vh',
        marginTop: '7vh',
        marginLeft: '-10vw',
        marginRight: '-10vw',
        paddingLeft: '5vw',
        paddingRight: '5vw',
      }}
    >
      <h3 style={{ textAlign: 'center', paddingTop: '2vh' }}>
        Technologies maitrisées:{' '}
      </h3>
      <h5 style={{ color: 'orange', margin: '5px' }}>Html</h5>
      <h5 style={{ color: 'blue', margin: '5px' }}>Css</h5>
      <h5 style={{ color: 'blue', margin: '5px' }}>React</h5>
      <h5 style={{ color: 'green', margin: '5px' }}>MangoDB</h5>
      <h5 style={{ color: 'grey', margin: '5px' }}>Express</h5>
      <h5 style={{ color: 'green', margin: '5px' }}>Node Js</h5>
    </div>
  );
}

export default Apropos;
