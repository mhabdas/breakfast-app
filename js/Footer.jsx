import React from 'react';
import styled from 'styled-components';
import { Link } from './style';

// Footer

const StyledFooter = styled.footer`
  text-align: center;
  color: #3D5A80;
  background-color: lightgrey;

  p {
    font-size: .75rem;
    :first-child {
    padding-top: 1rem;
    }
    :last-child {
      padding-bottom: 1rem;
    }
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <p>
        &copy; 2018 Breakfast App made by
        <Link href="https://github.com/mhabdas" target="_blank">
        &nbsp;Marta Habdas
        </Link>
        .
      </p>
      <p>
        Icons made by
        <Link href="http://www.freepik.com" title="Freepik" target="_blank">
        &nbsp;Freepik&nbsp;
        </Link>
        from
        <Link href="https://www.flaticon.com/" title="Flaticon" target="_blank">
        &nbsp;www.flaticon.com&nbsp;
        </Link>
        is licensed by
        <Link
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
          &nbsp;CC 3.0 BY
        </Link>
        .
      </p>
      <p>
        All photos via
        <Link href="https://commons.wikimedia.org/wiki/Main_Page" target="_blank">
        &nbsp;Wikimedia Commons&nbsp;
        </Link>
        are licensed by
        <Link
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
          target="_blank"
        >
        &nbsp;CC 3.0 BY
        </Link>
        .
      </p>
      <p>
        Content sources:
        <Link href="https://www.independent.co.uk/life-style/food-and-drink/features/what-people-eat-for-breakfast-around-the-world-a6730126.html" target="_blank">
        Independent
        </Link>
        .
      </p>
    </StyledFooter>
  );
}

export default { Footer };
