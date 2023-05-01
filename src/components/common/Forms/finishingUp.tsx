import { useFormReducer } from "context/formContext";
import { useMemo } from "react";

const FinishingUp = () => {
  const { dispatch, state } = useFormReducer();
  const planDuration = useMemo(() => {
    if (state.planDuration === "monthly") {
      return "mo";
    } else {
      return "yr";
    }
  }, [state.planDuration]);

  type addonType =
    | "arcade"
    | "pro"
    | "advanced"
    | "onlineService"
    | "largerStorage"
    | "customizableProfile";
  const planPrice = useMemo(() => {
    return state.prices[state.planDuration][state.plan];
  }, [state.planDuration, state.plan]);

  return (
    <div className="flex flex-col items-start  gap-8 w-full">
      <div className="bg-blue-50 w-full p-4 flex flex-col gap-4 rounded-lg">
        <header className="flex flex-row justify-between items-center ">
          <div>
            <h2 className="text-primary-marineBlue  capitalize font-bold">
              {state.plan} ({state.planDuration})
            </h2>
            <p className="underline text-neutral-coolGray">Change</p>
          </div>
          <span className="font-bold text-primary-marineBlue">
            ${planPrice}/{planDuration}
          </span>
        </header>
        <hr className="bg-neutral-coolGray w-full  self-center" />
        <div className=" flex flex-col gap-2">
          {state.addons.map((addon: any, index) => {
            return (
              <div
                className="flex flex-row items-center justify-between"
                key={addon}
              >
                <p className="text-neutral-coolGray">{addon}</p>
                <span className="text-primary-marineBlue">
                  +${state.prices[state.planDuration][addon as addonType]}/{planDuration}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full p-2">
        <p className="text-neutral-coolGray">
          Total per {state.planDuration === "monthly" ? "month" : "year"}
        </p>
        <span className="font-bold text-[1rem] text-primary-purplishBlue">
          +$12/{planDuration}
        </span>
      </div>
    </div>
  );
};

export default FinishingUp;
