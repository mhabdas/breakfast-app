import React from "react";
import StyledFooter from "./Footer";
import Link from "../../utils/Link";

const Footer = () => (
  <StyledFooter>
    <p>
      &copy; 2018 Breakfast App made by
      <Link
        href="https://github.com/mhabdas"
        target="_blank"
        description="&nbsp;Marta Habdas"
        title="Marta Habdas"
        rel="noopener noreferrer"
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
        rel="noopener noreferrer"
      />
      from
      <Link
        href="https://www.flaticon.com/"
        title="Flaticon"
        target="_blank"
        description="&nbsp;www.flaticon.com&nbsp;"
        rel="noopener noreferrer"
      />
      is licensed by
      <Link
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
        description="&nbsp;CC 3.0 BY"
        rel="noopener noreferrer"
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
        rel="noopener noreferrer"
      />
      are licensed by
      <Link
        href="http://creativecommons.org/licenses/by/3.0/"
        title="Creative Commons BY 3.0"
        target="_blank"
        description="&nbsp;CC 3.0 BY"
        rel="noopener noreferrer"
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
        rel="noopener noreferrer"
      />
      ,&nbsp;
      <Link
        href="https://mymodernmet.com/breakfasts-around-the-world/"
        target="_blank"
        description="My Modern Met"
        title="My Modern Met"
        rel="noopener noreferrer"
      />
      ,&nbsp;
      <Link
        href="https://edition.cnn.com/travel/article/breakfast-food-around-the-world/index.html"
        target="_blank"
        description="CNN"
        title="CNN"
        rel="noopener noreferrer"
      />
      ,&nbsp;
      <Link
        href="https://www.buzzfeed.com/ailbhemalone/breakfasts-around-the-world"
        target="_blank"
        description="BuzzFeed"
        title="BuzzFeed"
        rel="noopener noreferrer"
      />
      ,&nbsp;
      <Link
        href="https://worldtravelfamily.com/breakfast-around-the-world-food-travel-blog/"
        target="_blank"
        description="World Travel Family"
        title="World Travel Family"
        rel="noopener noreferrer"
      />
      ,&nbsp;
      <Link
        href="https://www.thrillist.com/eat/nation/world-s-best-breakfast-the-best-traditional-breakfast-from-around-the-world-thrillist-nation"
        target="_blank"
        description="Thrillist"
        title="Thrillist"
        rel="noopener noreferrer"
      />
      ,&nbsp;
      <Link
        href="https://pulptastic.com/50-world-breakfasts/"
        target="_blank"
        description="Pulptastic"
        title="Pulptastic"
        rel="noopener noreferrer"
      />
      .
    </p>
  </StyledFooter>
);

export default Footer;
