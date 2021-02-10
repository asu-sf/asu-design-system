

import { forwardRef } from "preact/compat";
import { css } from "@emotion/css";


/**
 * Logo
 */
const logoStyles = breakpoint => css`
  .navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    padding: 0;
    margin: 0;

    .horiz {
      display: none;
      transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
    }

    .vert {
      @media (min-width: 992px) {
        display: block;
        height: 72px;
        width: auto;
        margin: 1.5rem 1rem 1.5rem 0;
      }
    }

    img {
      height: 80px;
    }

    @media (max-width: ${breakpoint}) {
      img {
        float: none;
        height: 32px;
      }

      .vert {
        display: none;
      }
      .horiz {
        display: block;
        height: 32px;
        width: auto;
        margin-bottom: 1rem;
        margin-left: 2rem;
      }
    }
  }

  &.scrolled .primary-nav .navbar-brand d img {
    height: 64px;
  }

  @media (max-width: ${breakpoint}) {
    &.scrolled .primary-nav .navbar-brand d img {
      height: 28px;
    }

    &.scrolled .navbar-brand .horiz {
      margin-bottom: 0.5rem;
    }
  }
`;

const Logo = forwardRef(({brandLink, src, mobileSrc, alt, ...props}, ref) => {
  return (
    <a href={brandLink} class="navbar-brand" ref={ref} {...props} >
      <img class="vert" src={src} alt={alt} />
      <img class="horiz" src={mobileSrc} alt={alt} />
    </a>
  );
});

export { Logo, logoStyles}
