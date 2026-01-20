import {
  featuresListOptions,
  handleFinishingName,
} from "@/component/RH/hooks/finishingTypehandlers";
import {
  calculateInstallmentPlan,
  formatToCurrencyString,
  generateMilestones,
  NumberToText,
  NumberToWordsConverter,
  useFutureDates,
} from "@/component/RH/hooks/priceHandlers";
import { RefObject, useMemo,  } from "react";
import * as Icon from "react-feather";

export const KanoOutrightLetter = ({ pdfRef, ...props }: props) => {
  const totalMonths =
    Number(props.installment) > 4 ? Number(props.installment) * 3 : 12;

  const futureDates = useFutureDates(totalMonths);
  const { installmentAmount, installments, balance } = calculateInstallmentPlan(
    Number(props.amount),
    Number(props.installment),
  );
  const milestones = generateMilestones(
    installments,
    installmentAmount,
    futureDates,
  );

  const minimumDownPayment = useMemo(() => {
    if (installments <= 4) return 20;
    if (installments === 5) return 25;
    if (installments === 6) return 35;
    return 20;
  }, [installments]);
  return (
    <div
      ref={pdfRef}
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        wordBreak: "break-word",
        overflowWrap: "break-word",
      }}
      className="w-[210mm] font-sans text-sm leading-[1.6]"
    >
      <div className=" h-[297mm] p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div>
              <img src="/hope.png" className="w-20 object-cover" alt="" />
            </div>

            <div className="block">
              <h2 className="text-[18px] text-primary font-bold m-0">
                RENEWED PROJECTS <br /> SPV LIMITED
              </h2>
              <p className=" font-bold text-[14px]">RC: 7329087</p>
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-2 text-xs font-bold">
              <Icon.Phone size={12} className="text-primary font-medium" />{" "}
              <p>(+234)02016335959, (+234)09169973322</p>{" "}
            </div>
            <div className="flex items-center gap-2 text-xs font-bold">
              <Icon.Mail size={12} className="text-primary  font-medium" />{" "}
              <p>info@renewedhopeproject.ng</p>{" "}
            </div>
            <div className="flex items-center gap-2 text-xs font-bold">
              <Icon.Globe size={12} className="text-primary font-medium" />{" "}
              <p>https://renewedhopehomes.fmhud.gov.ng</p>{" "}
            </div>
            <div className="flex items-center gap-2 text-xs font-bold">
              <Icon.MapPin size={12} className="text-primary font-medium" />{" "}
              <p>
                {" "}
                7b Ondo Street, Osborne Foreshore Estate, Ikoyi, Lagos.
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="border border-primary my-4" />
        <div>
          <p className="text-end font-semibold">{props.date}</p>
          <div className="max-w-60 text-sm font-semibold">
            <p className="mb-2">{props.name},</p>
            <p>{props.address}</p>
            <p className="my-4">Dear {props.firstName}</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold uppercase">
            PROVISIONAL OFFER LETTER FOR THE SALE OF {props.title} LOCATED AT{" "}
            {props.location}
          </h1>
          <p className="text-sm my-4">
            Sequel to your application for a housing unit, we are pleased to
            convey the approval of a provisional offer of a {props.title} in
            your favour located at the Renewed Hope Cities and Estates,{" "}
            {props.location}.
          </p>
          <ol className="list-none text-sm px-8 space-y-2">
            <li>
              <span className="font-semibold">1. PROPERTY DESCRIPTION:</span>{" "}
              {props.title} situated at Renewed Hope Cities and Estates,{" "}
              {props.location} with infrastructural amenities: (road network,
              drainage, electricity, water supply, shopping mall and
              recreational centre)
            </li>
            <li>
              <span className="font-semibold">2. ESTATE LOCATION:</span> The
              estate is situated at the Renewed Hope Housing Estate,{" "}
              {props.location}.
            </li>
            <li>
              <span className="font-semibold">3.Title:</span> CERTIFICATE OF
              OCCUPANCY. (Deed of Assignment will be issued to Subscribers).
            </li>
            <li>
              <span className="font-semibold">4. FINISHING TYPE:</span>{" "}
              {handleFinishingName(props.finishingType)}.
            </li>
            <div>
              <span className="font-semibold">5. FEATURES</span>{" "}
              <ul className="space-y-2 px-4">
                {featuresListOptions(props.finishingType)}.{" "}
              </ul>
            </div>
            <li className=" list-none mt-2">
              <p>
                <span className="font-bold">6. LEGAL DOCUMENTATION: </span>A
                Contract of Sale and Deed of Assignment shall be executed
                between the company and the purchaser upon receipt of the full
                purchase price. The Subscriber shall bear the cost of
                registration of deed of assignment or any instrument that
                confers title to the purchaser. Survey plan will be procured for
                interested subscribers at their cost
              </p>
            </li>

            <li>
              <span className="font-semibold">7. PROPERTY PRICE:</span> &#8358;
              {formatToCurrencyString(props.amount)}{" "}
              <NumberToWordsConverter currency="Naria" number={props.amount} />
            </li>
            <li>
              <span className="font-semibold">
                8.
                {installments === 1 ? (
                  <span>
                    PAYMENT TO BE MADE: &#8358;{" "}
                    {formatToCurrencyString(props.amount)}{" "}
                    <NumberToWordsConverter
                      number={props.amount}
                      currency="Naira"
                    />
                  </span>
                ) : (
                  <span className="font-bold">
                    <NumberToText number={totalMonths} /> ({totalMonths}) MONTHS
                    INSTALLMENT PAYMENT PLAN : {minimumDownPayment}% down
                    payment of the property price
                  </span>
                )}
              </span>
            </li>
            <li>
              <span className="font-semibold">9. DOCUMENTATION FEE:</span>{" "}
              {props.documentationFee}% of the property cost
            </li>
          </ol>
        </div>
      </div>
      <div className="h-[297mm] pt-4 p-6">
        <ol className="list-none text-sm px-8 space-y2">
          <li>
            <span className="font-bold">10. VALIDITY: </span>
            {installments === 1 ? (
              <span>
                This offer is only valid subject to the acceptance of same and
                receipt of the sum of &#8358;{" "}
                {formatToCurrencyString(installmentAmount)}{" "}
                <NumberToWordsConverter
                  number={installmentAmount}
                  currency="Naira"
                />{" "}
                within two (2) weeks from the date of this offer and compliance
                to the terms and conditions incorporated therein.
              </span>
            ) : (
              <span>
                This offer is only valid subject to the acceptance of same and
                receipt of your minimum down payment of {minimumDownPayment}% of
                the purchase price within{" "}
                <span className="font-bold">two (2) weeks</span> from the date
                of this offer and compliance to the terms incorporated
                therein{" "}
              </span>
            )}
          </li>

          <li className="mt-4">
            <span className="font-bold">11. REFUND: </span>
            Please note that refund is at the discretion of the developer and
            shall be less 15% of the total sum paid to the developer upon
            subsequent sale to a new purchaser.
          </li>
          <li className="mt-4">
            <span className="font-bold">12. PAYMENT TERMS: </span>
            <ul className="list-none flex items-start gap-3 flex-col mt-1">
              {installments === 1 ? (
                <li>
                  a. Payment of &#8358; {formatToCurrencyString(props.amount)}{" "}
                  <NumberToWordsConverter
                    number={props.amount}
                    currency="Naira"
                  />{" "}
                  within two weeks from the date on the letter upon acceptance
                  of provisional offer letter
                </li>
              ) : (
                <li>
                  a. Minimum down payment of {minimumDownPayment}% f the
                  property price to be paid within 2 weeks from the date of this
                  offer.
                </li>
              )}
              {installments > 1 && (
                <li>
                  b. Balance of {100 - minimumDownPayment}% to be paid within{" "}
                  {totalMonths} months from the date of the receipt of the first
                  installment
                </li>
              )}
            </ul>
          </li>
          <li className="mt-4">
            13. Kindly be informed that if the above payments are not received
            within 7 (seven) working days after the expected due dates, your
            allocation would be revoked
          </li>
        </ol>
        <p className="text-sm px-8 mt-2">
          <span className="font-semibold">14. OTHER TERMS AND CONDITION:</span>
          All subscribers covenant to abide by the terms and conditions
          contained in the final offer letter and the Contract of Sale, in
          addition to all conditions and terms imposed by the Kano State
          Government relating to payments of rates, taxes and such other
          statutory charges.
          <br />
          Kindly indicate your acceptance of this offer by signing in the space
          provided be herein and return the duly signed copy of this Provisional
          offer letter together with your cheque/draft or evidence of
          deposit/bank transfer made in favour of:
        </p>
        <div className="w-full  text-sm px-6 mt-4 space-y-4">
          {/* MODE OF PAYMENT */}
          <section>
            <div className="text-base font-semibold space-y">
              <p className=" ">Account Name: {props.accountName}</p>
              <p className=" ">Bank Name: {props.bankName}</p>
              <p className="">Account Number: {props.accountNumber}</p>
            </div>
          </section>
          {/* Closing */}
          <div className="space-y">
            <p>We thank you for your valued patronage</p>
            <p>Yours faithfully</p>
            <p className="mt-4 font-bold">FOR: RENEWED PROJECT SPV LIMITED</p>
          </div>

          {/* SIGNATURES */}
          <div className=" grid grid-cols-2 gap-8">
            {/* Florence */}
            <div className="flex flex-col items-start space-y">
              <img
                src="/test.png"
                alt="Florence signature"
                className="h-14 w-40"
                width={100}
                height={100}
              />
              <p className="font-semibold">Florence Alao</p>
              <p className="text-sm ">Legal Counsel/Company Secretary</p>
            </div>

            {/* Adegbenge */}
            <div className="flex flex-col items-start space-y">
              <img
                src="/scripts/urlyoutube.jpg"
                alt="Adegbenga signature"
                className="h-14 w-40 "
                width={100}
                height={100}
              />
              <p className="font-semibold">Adegbenga Alamu</p>
              <p className="text-sm ">Chief Operating Officer</p>
            </div>
          </div>

          {/* PURCHASER ACCEPTANCE */}
          <section className="space-y">
            <h3 className="font-bold">PURCHASER&apos;S ACCEPTANCE</h3>
            <p>
              I, Mr./Mrs./Dr./Chief
              .............................................................................
              hereby accept the above stated terms and conditions of sale.
            </p>

            <div className="flex items-center justify-between mt-6">
              <div className="flex-1">
                <p>
                  PURCHASER&apos;S SIGNATURE
                  .....................................................
                </p>
              </div>
              <div className="w-40">
                <p>DATE .......................................</p>
              </div>
            </div>
          </section>

          {/* NOTE */}
        </div>
      </div>
    </div>
  );
};

interface props {
  date?: string;
  name?: string;
  address?: string;
  title?: string;
  location?: string;
  finishingType?: string;
  amount?: string | number;
  installment?: string | number;
  documentationFee?: string | number;
  accountName?: string | number;
  accountNumber?: string | number;
  bankName?: string | number;
  pdfRef: RefObject<HTMLDivElement | null>;
  firstName?: string;
}
