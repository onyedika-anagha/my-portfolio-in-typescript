import { PropsWithChildren } from "react";
import PagePiling from "../../components/components/PagePiling";
import { getInitialView } from "../../utils/helper/helper";

export type FooProps = {
  variant: number;
};
function PageSection(props: PropsWithChildren<FooProps>) {
  return (
    <div className={`page-section variant-${props.variant}`}>
      {props.children}
    </div>
  );
}
const Home = () => {
  const initialView = getInitialView();
  const onViewChange = (view: string | number) => {
    // eslint-disable-next-line no-restricted-globals
    history.replaceState({}, "", `${window.location.origin}?view=${view}`);
  };
  return (
    <PagePiling
      initialView={initialView}
      onViewChange={onViewChange}>
      <PageSection variant={1}>
        <h1>Home Page</h1>
        <p>On a real personal website, you'd put an intro here!</p>
        <p>
          <a href="https://weimingwu.medium.com/23fcde868ed9">
            If you're lost, maybe check out the companion article here?
          </a>
        </p>
      </PageSection>
      <PageSection variant={2}>
        <h1>About</h1>
        <p>Personally, I'd put something about myself here.</p>
      </PageSection>
      <PageSection variant={3}>
        <h1>Resume</h1>
        <p>Kinda makes sense to put a resume too.</p>
      </PageSection>
      <PageSection variant={4}>
        <h1>Portfolio</h1>
        <p>A portfolio of previous work is always nice.</p>
      </PageSection>
    </PagePiling>
  );
};

export default Home;