import React from 'react';
import { Helmet } from 'react-helmet';
import './index.css';
import Nav from './components/Nav';
import Hero from './views/Hero';
import Token from './views/Token';
import Anonymity from './views/Anonymity';
import Newsletter from './views/Newsletter';
import Footer from './components/Footer';
import Utility from './views/Utility';
import Partners from './views/Partners';
import Allocations from './views/Allocations';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <Helmet>
        <script type="text/javascript">
          {`
            var ssaUrl = 'https://' + 'pixel.sitescout.com/iap/f6582fc6c2e08692';
            new Image().src = ssaUrl;
            (function(d) { 
              var syncUrl = 'https://' + 'pixel-sync.sitescout.com/dmp/asyncPixelSync'; 
              var iframe = d.createElement('iframe'); 
              (iframe.frameElement || iframe).style.cssText = "width: 0; height: 0; border: 0; display: none;"; 
              iframe.src = "javascript:false"; 
              d.body.appendChild(iframe); 
              var doc = iframe.contentWindow.document; 
              doc.open().write('<body onload="window.location.href=\''+syncUrl+'\'">'); 
              doc.close(); 
            })(document);
          `}
        </script>
        <script type="text/javascript">
          {`
            var ssaUrl = 'https://' + 'clickserv.sitescout.com/conv/7f641777ea0adf8d';
            new Image().src = ssaUrl;
            (function(d) { 
              var syncUrl = 'https://' + 'pixel-sync.sitescout.com/dmp/asyncPixelSync'; 
              var iframe = d.createElement('iframe'); 
              (iframe.frameElement || iframe).style.cssText = "width: 0; height: 0; border: 0; display: none;"; 
              iframe.src = "javascript:false"; 
              d.body.appendChild(iframe); 
              var doc = iframe.contentWindow.document; 
              doc.open().write('<body onload="window.location.href=\''+syncUrl+'\'">'); 
              doc.close(); 
            })(document);
          `}
        </script>
      </Helmet>

      <div className='font-primary text-white w-full overflow-x-hidden'>
        <img className='fixed bottom-0 left-0 object-cover w-full h-full z-0 pointer-events-none' src='https://imagedelivery.net/cwNlIhFkSHgM59lNYMgaeA/b555872f-5310-41eb-1198-23c70f77a900/public' />

        <Nav />
        <Outlet />
        <Hero />
        <Partners />
        <Anonymity />
        <Allocations />
        <Token />
        <Utility />

        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;
