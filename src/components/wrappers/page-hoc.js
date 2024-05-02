import CMSProvider from "../../infra/cms/cms-provider";

export function pageHOC(Component) {
  return function Wrapper(props) {
    return (
      <CMSProvider cmsContent={props.cmsContent}>
        <Component {...props} />
      </CMSProvider>
    );
  };
}
