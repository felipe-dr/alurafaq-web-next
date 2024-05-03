import { getCMSContent } from "./cms-provider";
import { cmsSections } from "../../components/cms-sections";
import { Component } from "react";

export function CMSSectionRender({ pageName }) {
  const sections = getCMSContent(`${pageName}.pageContent[0].section`);

  if (!Component) return null;

  return sections.map((sectionProps) => {
    const Component = cmsSections[sectionProps.componentName];
    return <Component key={sectionProps.id} {...sectionProps} />;
  });
}
