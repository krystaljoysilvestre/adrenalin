import React from 'react';

import * as H from './style.js';

const Header = props => {
  return (
    <H.Wrapper>
      <H.Logo
        onClick={() => props.onLogoClick()}
        src="./adrenalin.svg"
        alt="logo"
      />

      <H.Navigation>
        <H.Link>
          <a href="/culture">Culture</a>
        </H.Link>
        <H.Link>
          <a href="/work">Work</a>
        </H.Link>
        <H.Link>
          <a href="/clients">Clients</a>
        </H.Link>
        <H.Link>
          <a href="/services">Services</a>
        </H.Link>
        <H.Link>
          <a href="/careers">Careers</a>
        </H.Link>
        <H.Link>
          <a href="/contact">Contact</a>
        </H.Link>
      </H.Navigation>
    </H.Wrapper>
  );
};

export default Header;
