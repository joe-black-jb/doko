import { Suspense } from "react";
import Loading from "./loading";
import Delay from "./delay";
import { logger } from "@/utils/utils";

export interface Props {
  label?: string;
}

export default async function Dashboard() {
  logger.info("fetchData");

  // const { label } = props;
  const data = await fetchData();
  logger.info(`data: ${JSON.stringify(data)}`);
  // logger.info(`data: ${data}`);

  return (
    <Suspense fallback={<Loading />}>
      <h1 className="text-red-200">Dashboard!</h1>
      {/* <div>{label}</div> */}
      <div>{data.props.label}</div>
      <Delay />
    </Suspense>
  );
}

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const fetchData = async () => {
  logger.info("fetchData");
  logger.info("fetchData");

  const label = "label";

  return {
    props: {
      label,
    },
  };
};
