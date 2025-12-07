"use client"

import { FCTBaseRtoLetter } from "@/component/RH/Abuja_Federal_Capital_Territory/rto/baseTemplate";

const Page = () => {
  return (
    <div>
      <FCTBaseRtoLetter
      date="Dec 6, 2025"
      address="Plot 9 no 6 umaru danalaje street makera kakuri Kaduna Nigeria  "
      name="Smauel Adeniyi"
      title="3 BEDROOM FLATS AT KARSANA DISTRICT PHASE 3"
      location="KARSANA, FEDERAL CAPITAL TERRITORY, ABUJA, NIGERIA"
      amount={100000}
      finishingType="partly_finished"
   minimumDownpayment={20}
      documentationFee={2.5}
      interestRate={7}
      tenor={30}
      />
    </div>
  );
};

export default Page;
