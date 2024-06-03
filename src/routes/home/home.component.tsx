import { PropsWithChildren } from "react";
import { getInitialView, isSmallScreen } from "../../utils/helper/helper";
import { selectInfo } from "../../store/data/data.selector";
import { useSelector } from "react-redux";
import Preloader from "../../components/preloader/preloader.component";
import HomeSM from "../../components/home/home.sm.component";
import HomeLg from "../../components/home/home-lg.component";

export type FooProps = {
  variant: number;
};
export function PageSection(props: PropsWithChildren<FooProps>) {
  return (
    <div className={`page-section variant-${props.variant}`}>
      {props.children}
    </div>
  );
}
const Home = () => {
  const initialView = getInitialView();
  const siteInfo = useSelector(selectInfo);
  
  if (siteInfo.user == null) return <Preloader />;

return isSmallScreen ? <HomeSM/> : <HomeLg initialView={initialView} />
};

export default Home;
