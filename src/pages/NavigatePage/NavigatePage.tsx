import { Navigate, useLocation, useMatches, useParams } from "react-router-dom";
import INavigatePageProps from "./NavigatePage.types";

const NavigatePage = ({ to }: INavigatePageProps) => {
  const { id } = useParams();
  const location = useLocation();
  const matches = useMatches();
  console.log(location);
  console.log("matches", matches);
  if (id) return;
  return <Navigate to={to} />;
};

export default NavigatePage;
