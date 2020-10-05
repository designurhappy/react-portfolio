import React from 'react';

function Footer() {
    return (
        <footer>
            {/* <div className='flex-row'> */}
            <div className="linkedin">
                    <a
                        href="https://www.linkedin.com/in/alicia-ross-designurhappy/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            <div className="github">
                    <a
                        href="https://github.com/designurhappy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i>
                    </a>
                </div>
  </footer>
    );
}
export default Footer;