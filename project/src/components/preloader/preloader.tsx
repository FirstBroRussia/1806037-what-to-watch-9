function PreloaderElement() {
  return (
    <div className="preloader">
      <div className="preloader__row">
        <div className="preloader__item"></div>
        <div className="preloader__item"></div>
      </div>
    </div>
  );
}

export default PreloaderElement;

// style={{
//   height: '300px',
//   position: 'fixed',
//   left: '0',
//   top: '0',
//   right: '0',
//   bottom: '0',
//   backgroundColor: '#e0e0e0',
//   zIndex: '1001',
// }}
