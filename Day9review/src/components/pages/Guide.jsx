import React from 'react';

function Guide() {
  return (
    <div className="section nomargin clearfix" style={{ padding: '40px 0' }}>
      <div className="container clearfix">
        <div className="nobottomborder bottommargin-sm" style={{ textAlign: 'center' }}>
          <h1 style={{
            textAlign: 'center',
            fontFamily: 'Poppins, sans-serif',
            textTransform: 'capitalize',
          
            paddingBottom: '5px',
            fontSize: '30px',
           
         
          }}>
            The complete guide to growing food in your own backyard
          </h1>
          <h2 style={{
            color: '#1ABC9C',
            textAlign: 'center',
            fontFamily: 'Poppins, sans-serif',
            textTransform: 'capitalize',
            fontWeight: 400,
            fontSize: '40px',
            lineHeight: '45px',
            paddingTop: '20px',
          }}>
            Suitable for gardeners worldwide
          </h2>
        </div>

        <div className="row clearfix">
          <div className="col bottommargin-sm">
            <div className="feature-box media-box" style={{ textAlign: 'center', maxWidth: '400px' }}>
              <img className="lazyloaded" style={{ height: '100px', padding: '20px' }} data-src="/static/icons/bee.png" alt="Organic" src="https://www.thehomegarden.com/static/icons/bee.png" />
              <h3 style={{ fontSize: '22px' }}>Organic Gardening</h3>
              <p style={{ fontSize: '18px' }}>How to grow and maintain your own organic garden</p>
            </div>
          </div>

          <div className="col bottommargin-sm">
            <div className="feature-box media-box" style={{ textAlign: 'center', maxWidth: '400px' }}>
              <img className="lazyloaded" style={{ height: '100px', padding: '20px' }} data-src="/static/icons/notes.png" alt="Guides" src="https://www.thehomegarden.com/static/icons/question.png" />
              <h3 style={{ fontSize: '22px' }}>Growing Guides</h3>
              <p style={{ fontSize: '18px' }}>Grow a variety of foods with our fuss-free growing guides</p>
            </div>
          </div>

          <div className="col bottommargin-sm">
            <div className="feature-box media-box" style={{ textAlign: 'center', maxWidth: '400px' }}>
              <img className="lazyloaded" style={{ height: '100px', padding: '20px' }} data-src="/static/icons/question.png" alt="Troubleshooting" src="https://www.thehomegarden.com/static/icons/question.png" />
              <h3 style={{ fontSize: '22px' }}>Troubleshooting</h3>
              <p style={{ fontSize: '18px' }}>Troubleshoot pests and diseases by using our handy charts and guides</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
