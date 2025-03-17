import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterEl>
      <div className="footer-content">
        <p>&copy; 2025 Jdados. Todos os direitos reservados.</p>
      </div>
    </FooterEl>
  );
};

export default Footer;
const FooterEl = styled.footer`
text-align: center;
`