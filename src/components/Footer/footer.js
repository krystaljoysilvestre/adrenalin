import React from 'react';

import * as F from './style.js';

const Footer = () => {
  return (
    <F.Wrapper>
      <F.Logo src="./adrenalin.svg" alt="logo" />

      <F.Navigation>
        <F.Link>
          <a href="/privacy">Privacy</a>
        </F.Link>
        <F.Link>
          <a href="/sitemap">Sitemap</a>
        </F.Link>
        <F.Link>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </F.Link>
        <F.Link>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </F.Link>
        <F.Link>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </F.Link>
        <F.Link>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </F.Link>
      </F.Navigation>
    </F.Wrapper>
  );
};

export default Footer;
