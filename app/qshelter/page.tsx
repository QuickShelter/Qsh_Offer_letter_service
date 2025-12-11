"use client";

import {
  decodeBase64,
  hashSHA512Client,
} from "@/component/RH/hooks/letterFunctions";
import { QshelterHelpToOwnLetter } from "@/component/RH/qshelter/help-to-ownTemplate";
import { QshelterNhfLetter } from "@/component/RH/qshelter/nhfTemplate";
import { QshelterOutrightLetter } from "@/component/RH/qshelter/outright";
import { QshelterRtoLetter } from "@/component/RH/qshelter/rtoTemplate";
import { DataResponse } from "@/component/RH/type";
import moment from "moment";
import { useSearchParams } from "next/navigation";

import React, { Suspense, useRef, useState } from "react";
import generatePDF, { Margin } from "react-to-pdf";

function OfferPage() {
  const componentRef = useRef<HTMLDivElement>(null);
  const queryParams = useSearchParams();
  const paramsData = queryParams.get("data");
  const [hash, setHash] = useState<string>("");
  const [application, setapplication] = useState<DataResponse>();
  React.useEffect(() => {
    if (!paramsData) return;
    const decoded = decodeBase64(paramsData);
    if (!decoded) return;
    try {
      const formatedapplication: DataResponse = JSON.parse(decoded);
      setapplication(formatedapplication);

      const input = `${formatedapplication?.application.id}-${
        formatedapplication?.property.id
      }-${
        formatedapplication?.wallet.id
      }-${formatedapplication?.user.first_name.slice(
        -3
      )}-${formatedapplication?.user.last_name.slice(-3)}`;

      hashSHA512Client(input).then(setHash);
    } catch (error) {
      console.error("Invalid application data:", error);
    }
  }, [paramsData]);

  React.useEffect(() => {
    if (application && hash === application?.hash) {
      generatePDF(componentRef, {
        filename: `${application.user.first_name} Offer letter`,
        page: {
          format: "letter",
          margin: Margin.NONE,
        },
      });
    }
  }, [application, hash]);

  const dataPayload = {
    date: moment(application?.application.created_at).format("ll"),
    address: application?.user.address,
    name: `${application?.user.first_name} ${application?.user.last_name}`,
    title: `${application?.property.title}`,
    location: `${application?.property.address}`,
    amount: application?.application.total_price,
    finishingType: application?.application.is_finished_property
      ? "finished"
      : application?.application.property_finished_type
      ? application.application.property_finished_type
      : "custom",
    minimumDownPayment: application?.mortgage.equity_percent,
    documentationFee: 2.5,
    interestRate: application?.mortgage.interest_per_annum,
    tenor: 30,
    accountName: application?.wallet.account_name,
    accountNumber: application?.wallet.account_number,
    bank: application?.wallet.bank_name,
    installment: application?.application.contribution,
  };

  return (
    <div className="p-8">
      <h3>Downloading Offer Letter...</h3>
      <div>
        <div className=" fixed left-full top-0">
          {application?.application?.plan === "rto" ? (
            <QshelterRtoLetter
              date={dataPayload.date}
              address={dataPayload.address}
              name={dataPayload.name}
              title={dataPayload.title}
              location={dataPayload.location}
              amount={dataPayload.amount}
              finishingType={dataPayload.finishingType}
              minimumDownpayment={dataPayload.minimumDownPayment}
              documentationFee={dataPayload.documentationFee}
              interestRate={dataPayload.interestRate}
              tenor={dataPayload.tenor}
              accountName={dataPayload.accountName}
              bankName={dataPayload.bank}
              accountNumber={dataPayload.accountNumber}
              ref={componentRef}
            />
          ) : application?.application.plan === "nhf" ? (
            <QshelterNhfLetter
              date={dataPayload.date}
              address={dataPayload.address}
              name={dataPayload.name}
              title={dataPayload.title}
              location={dataPayload.location}
              amount={dataPayload.amount}
              finishingType={dataPayload.finishingType}
              minimumDownpayment={dataPayload.minimumDownPayment}
              documentationFee={dataPayload.documentationFee}
              interestRate={dataPayload.interestRate}
              tenor={dataPayload.tenor}
              accountName={dataPayload.accountName}
              bankName={dataPayload.bank}
              accountNumber={dataPayload.accountNumber}
              ref={componentRef}
            />
          ) : application?.application.plan === "help_to_own" ? (
            <QshelterHelpToOwnLetter
              date={dataPayload.date}
              address={dataPayload.address}
              name={dataPayload.name}
              title={dataPayload.title}
              location={dataPayload.location}
              amount={dataPayload.amount}
              finishingType={dataPayload.finishingType}
              minimumDownpayment={dataPayload.minimumDownPayment}
              documentationFee={dataPayload.documentationFee}
              interestRate={dataPayload.interestRate}
              tenor={dataPayload.tenor}
              accountName={dataPayload.accountName}
              bankName={dataPayload.bank}
              accountNumber={dataPayload.accountNumber}
              ref={componentRef}
            />
          ) : application?.application.plan === "buyoutrightly" ? (
            <QshelterOutrightLetter
              date={dataPayload.date}
              address={dataPayload.address}
              name={dataPayload.name}
              title={dataPayload.title}
              location={dataPayload.location}
              amount={dataPayload.amount}
              finishingType={dataPayload.finishingType}
              installment={dataPayload.installment}
              documentationFee={dataPayload.documentationFee}
              accountName={dataPayload.accountName}
              bankName={dataPayload.bank}
              accountNumber={dataPayload.accountNumber}
              ref={componentRef}
            />
          ) : (
            <div ref={componentRef}> Invalid Link</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<h3>Downloading Offer Letter...</h3>}>
      <OfferPage />
    </Suspense>
  );
}
