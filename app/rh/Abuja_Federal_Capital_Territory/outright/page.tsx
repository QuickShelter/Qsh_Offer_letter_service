"use client"

import { BaseOutrightLetter } from "@/component/RH/Abuja_Federal_Capital_Territory/outright/baseTemplate";

const Page = () => {
  return (
    <div>
      <BaseOutrightLetter
      date="Dec 6, 2025"
      address="Plot 9 no 6 umaru danalaje street makera kakuri Kaduna Nigeria  "
      name="Smauel Adeniyi"
      title="3 BEDROOM FLATS AT KARSANA DISTRICT PHASE 3"
      location="KARSANA, FEDERAL CAPITAL TERRITORY, ABUJA, NIGERIA"
      amount={100000}
      finishingType="partly_finished"
      installment={5}
      documentationFee={2.5}
      />
    </div>
  );
};

export default Page;
