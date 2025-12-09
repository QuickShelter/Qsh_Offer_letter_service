import { constants } from "../utlis/constants";

export const featuresListOptions = (features?: string) => {
  const featureList =
    features === "custom"
      ? constants.custommFeatures.map((item, index) => {
          return <li key={index} className="list-none">&#8226; {item}</li>;
        })
      : features === "partly_finished"
      ? constants.partly_finishedFeatures.map((item, index) => {
          return <li key={index} className=" list-none" >&#8226; {item}</li>;
        })
      : constants.finishedFeatures.map((item, index) => {
          return <li key={index} className="list-none">&#8226; {item}</li>;
        });

  return featureList;
};

export const handleFinishingName = (features?: string) => {
  const finishingName =
    features === "custom"
      ? "Custom Built House "
      : features === "partly_finished"
      ? "Partly Finished House "
      : "Finished House";
  return finishingName;
};
