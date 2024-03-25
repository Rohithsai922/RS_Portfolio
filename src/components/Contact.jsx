import React, {useEffect} from 'react';

const Contact = () => {
  
    useEffect(() => {
        // Load the Visme forms embed script
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          // Clean up the script when the component unmounts
          document.body.removeChild(script);
        };
      }, []);
  
  
  
  
  
    return (
    
      <div className="visme_d" data-title="Contact form" data-url="jwowozq1-contact-form" data-domain="forms" data-full-page="false" data-min-height="500px" data-form-id="47153"></div>
    
  )
}

export default Contact
