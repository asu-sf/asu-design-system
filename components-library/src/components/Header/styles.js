/* eslint-disable react/prop-types */
import { cx, css } from "@emotion/css";
import { forwardRef } from "preact/compat";

import {
  focusStyle,
  containerSize,
  primaryNavTopPadding,
  BreakpointXl,
  BreakpointLg,
} from "../../theme";
import { buttonStyles } from "../Button/styles";
import { loginStyles } from "../Login/styles";
import { logoStyles } from "../Logo/styles";
import { navStyles } from "../Nav/styles";
import {
  navbarStyles,
  navbarContainerStyles,
  navbarTogglerStyles,
} from "../Navbar/styles";
import { navItemStyles } from "../NavItem/styles";
import { searchStyles } from "../Search/styles";
import { titleStyles } from "../Title/styles";

const Header = ({ children, breakpoint, ...props }) => {
  return (
    <>
      <header
        {...props}
        class={cx(
          props.class,
          css`
            *,
            *:before,
            *:after {
              box-sizing: border-box;
            }

            :focus {
              outline: 0;
              box-shadow: 0 0 8px #00baff !important;
            }

            a {
              cursor: pointer;
              text-decoration: none;
            }

            padding: 0;
            display: flex;
            flex-direction: column;
            position: fixed;
            width: 100%;
            z-index: 999;
            background: #ffffff;
            border-bottom: 1px solid #d0d0d0;
            transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
            top: 0;
            left: 0;

            div,
            h1 {
              font-family: Arial, sans-serif;
            }

            &.scrolled {
              transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
            }
          `,
          navbarStyles(breakpoint),
          navStyles(breakpoint), // add the nav and button styles
          buttonStyles,
          navbarContainerStyles(breakpoint),
          logoStyles(breakpoint),
          universalStyles(breakpoint),
          searchStyles(breakpoint),
          titleStyles(breakpoint),
          loginStyles(breakpoint),
          navbarTogglerStyles(breakpoint),
          navItemStyles(breakpoint)
        )}
      >
        {children}
      </header>
    </>
  );
};

/**
 * Universal Nav styles and component
 */
const universalStyles = breakpoint => css`
  .shadow {
    display: none;
  }
  .universal-nav {
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    background-color: #e8e8e8;
    height: 24px;
    transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);

    > div {
      width: 100%;
      max-width: ${containerSize};
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
    }

    .nav-grid {
      align-items: center;
    }

    @media (max-width: ${breakpoint}) {
      display: none;
      padding: 0;
      transition: none;
      height: auto;

      &.mobile-open {
        z-index: 998;
        width: 100%;
        display: flex;
        justify-content: center;
        + .navbar-component .navbar-toggler {
          border-radius: 400rem;
          width: 2rem;
          height: 2rem;
        }
      }

      .nav-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: row;
        justify-items: start;
        width: 100%;

        > a,
        div {
          color: #191919;
          margin-right: 0;
          text-align: center;
          width: 100%;
          height: auto;
          font-size: 0.875rem;
          padding: 1rem 1.5rem;
          border-top: 1px solid #d0d0d0;
          display: block;

          :nth-child(even) {
            border-left: 1px solid #d0d0d0;
          }

          &.sr-only {
            display: none;
          }
        }

        .login-status a {
          color: #191919;
        }
      }
    }
  }

  @media (max-width: ${breakpoint}) {
    .shadow.mobile-open {
      position: fixed;
      bottom: 155px;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #d0d0d0;
      z-index: 1700;
      display: block;
      background: linear-gradient(
        180deg,
        rgba(232, 232, 232, 0) 0%,
        rgba(232, 232, 232, 1) 100%
      );
    }
  }

  @media (min-width: ${parseInt(breakpoint.split("p")[0], 10) + 1}px) {
    // Scroll behaviors.
    &.scrolled {
      .universal-nav {
        height: 0;
        overflow: hidden;
      }
      a.unit-name {
        display: none;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
      a.subunit-name {
        font-size: 1.5em;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
        margin: 12px 0;
      }
      .title {
        padding-bottom: 0;
        margin: 12px 0;
      }
      .navbar-logo img {
        height: 64px;
        margin: 12px 1rem 12px 0;
        transition: 0.5s cubic-bezier(0.19, 1, 0.19, 1);
      }
    }

    .universal-nav {
      &.search-open {
        height: 48px;
      }

      .nav-grid {
        display: flex;
      }
    }
  }
`;

const UniversalNav = forwardRef((props, ref) => {
  return (
    <>
      <div className={`shadow ${props.open ? "mobile-open" : ""}`} />
      <div
        class={cx(
          "universal-nav",
          props.open ? "mobile-open" : "",
          props.searchOpen ? "search-open" : ""
        )}
        ref={ref}
      >
        <div>{props.children}</div>
      </div>
    </>
  );
});

const UniversalNavLinks = ({ children, ...props }) => {
  return (
    <div
      class={cx(
        "nav-grid",
        props.class,
        css`
          > a {
            display: inline-flex;
            font-size: 0.75rem;
            padding: 0.25rem 0.5rem;
            color: #484848;
            margin: 0;
            position: relative;
            padding-top: 0;
            padding-bottom: 0;
            ${focusStyle}

            &:hover {
              text-decoration: underline;
            }
          }

          > a.sr-only-focusable {
            position: relative;
          }
        `
      )}
    >
      {children}
    </div>
  );
};

export {
  Header,
  UniversalNav,
  UniversalNavLinks,
  primaryNavTopPadding,
  BreakpointLg,
  BreakpointXl,
};
