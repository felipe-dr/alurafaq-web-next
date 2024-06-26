import { getCMSContent } from "./cms-provider";
import { cmsSections } from "../../components/cms-sections";
import { Component } from "react";

export function CMSSectionRender({ pageName }) {
  const sections = getCMSContent(`${pageName}.pageContent[0].section`);

  return sections.map((sectionProps) => {
    const Component = cmsSections[sectionProps.componentName];
    const isVisible =
      sectionProps.visible === true || sectionProps.visible === undefined;

    if (!Component) return null;
    if (!isVisible) return null;

    return <Component key={sectionProps.id} {...sectionProps} />;
  });
}
