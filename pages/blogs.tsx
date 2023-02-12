import Heading from "components/designs/Heading";
import More from "components/designs/More";
import Page from "components/utility/Page";
import Projects from "components/designs/Designs";
import React from "react";

function blogs() {
  return (
    <Page
      currentPage="blogs"
      meta={{
        desc: "Solution-driven web developer adept at contributing to highly collaborative work environment and finding solutions",
      }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default blogs;
