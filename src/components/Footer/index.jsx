import React from 'react';
import StyledFooter from './Footer';
import Link from '../../utils/Link';

const Footer = () => (
  <StyledFooter>
    <p>
      &copy; 2018 Breakfast App made by
      <Link
        href="https://github.com/mhabdas"
        target="_blank"
        description="&nbsp;Marta Habdas"
        title="Marta Habdas"
      />
      .
    </p>
    <p>
      Icons made by
      <Link
        href="http://www.freepik.com"
        title="Freepik"
        target="_blank"
        description="&nbsp;Freepik&nbsp;"
      />
      from
      <Link
        href="https://www.flaticon.com/"
        title="Flaticon"
        target="_blank"
        description="&nbsp;www.flaticon.com&nbsp;"
      />
      is licensed by
      <Link
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
        description="&nbsp;CC 3.0 BY"
      />
      .
    </p>
    <p>
      All photos via
      <Link
        href="https://commons.wikimedia.org/wiki/Main_Page"
        target="_blank"
        description="&nbsp;Wikimedia Commons&nbsp;"
        title="Wikimedia Commons"
      />
      are licensed by
      <Link
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
        description="&nbsp;CC 3.0 BY"
      />
      .
    </p>
    <p>
      Content sources:
      <Link
        href="https://www.independent.co.uk/life-style/food-and-drink/features/what-people-eat-for-breakfast-around-the-world-a6730126.html"
        target="_blank"
        description="Independent"
        title="Independent"
      />
      .
    </p>
  </StyledFooter>
);

export default Footer;
