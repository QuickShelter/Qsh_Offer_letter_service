import {
  featuresListOptions,
  handleFinishingName,
} from "@/component/RH/hooks/finishingTypehandlers";
import {
  formatToCurrencyString,
  NumberToWordsConverter,
} from "@/component/RH/hooks/priceHandlers";
import { RefObject } from "react";
import * as Icon from "react-feather";

export const QshelterHelpToOwnLetter = (props: props) => {
  return (
    <div className="w-[210mm]" ref={props.ref}>
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
              <p> 7b Ondo Street, Osborne Foreshore Estate, Ikoyi, Lagos.</p>{" "}
            </div>
          </div>
        </div>
        <div className="border border-primary my-4" />
        <div>
          <p className="text-end font-semibold">{props.date}</p>
          <div className="max-w-60 text-sm font-semibold">
            <p className="mb-2">{props.name}</p>
            <p>{props.address}</p>
            <p className="my-4">Dear {props.name}</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold uppercase">
            PROVISIONAL OFFER LETTER FOR THE SALE OF {props.title} LOCATED AT{" "}
            {props.location}
          </h1>
          <p className="text-sm my-4">
            We are pleased to offer you a unit of {props.title}. located at the
            Renewed Hope Housing City, {props.location} "Subject to Contract."
          </p>
          <ol className="list-none text-sm px-8 space-y-2">
            <li>
              <span className="font-semibold">1. PROPERTY DESCRIPTION:</span>{" "}
              {props.title} situated at Renewed Hope Housing City,{" "}
              {props.location} Nigeria with infrastructural amenities: (road
              network, drainage, electricity, water supply, shopping mall and
              recreational centre)
            </li>
            <li>
              <span className="font-semibold">2. ESTATE LOCATION:</span> The
              estate is situated at the Renewed Hope Housing Estate,{" "}
              {props.location}.
            </li>
            <li>
              <span className="font-semibold">Title:</span>3. DEVELOPMENT LEASE
              AGREEMENT. (Deed of Sublease will be issued to Subscribers).
            </li>
            <li>
              <span className="font-semibold">4. FINISHING TYPE:</span>{" "}
              {handleFinishingName(props.finishingType)}.
            </li>
            <div>
              <span className="font-semibold">4b. FEATURES</span>{" "}
              <ul className="space-y-2 px-4">
                {featuresListOptions(props.finishingType)}.{" "}
              </ul>
            </div>

            <li>
              <span className="font-semibold">5. COST OF PROPERTY:</span>{" "}
              &#8358;
              {formatToCurrencyString(props.amount)}{" "}
              <NumberToWordsConverter currency="Naria" number={props.amount} />
            </li>
            <li>
              <span className="font-semibold">6. DOCUMENTATION FEE:</span>{" "}
              {props.documentationFee}% of the property cost
            </li>
          </ol>
        </div>
      </div>
      <div className="h-[297mm] pt-10 p-6">
        <ol className="list-none text-sm px-8 space-y2">
          <li>
            <span className="font-semibold">7. LEGAL DOCUMENTATION:</span> A
            Contract of Sale shall be executed between the company and the
            purchaser upon receipt of the full purchase price. An executed deed
            of sublease/survey plan shall be issued to the Purchaser. The
            Purchaser shall bear the cost of survey plan and obtaining
            Certificate of Occupancy.
            <ol className="px-4 mt-4 list-[lower-alpha]" type="A">
              <li>
                <span className="font-semibold">a. VALIDITY:</span>
                This offer is only valid subject to the acceptance of same and
                receipt of your minimum down payment of{" "}
                {props.minimumDownpayment}% of the purchase price within two (2)
                weeks from the date of this offer and compliance to the terms
                incorporated therein.
                <span className="font-semibold">
                  {" "}
                  (Please note that refund is at the discretion of the developer
                  and shall be less 15% of the total sum paid t o the developer
                  upon subsequent sale to a new purchaser).
                </span>
              </li>
            </ol>
          </li>
          <li>
            <span className="font-semibold">8. PAYMENT TERMS:</span>
            <ol className="px-4 mt-2 list-">
              <li>
                a. Minimum down payment of {props.minimumDownpayment}% of
                purchase price upon acceptance of provisional offer letter.
              </li>
              <li>
                b. Balance of {100 - Number(props.minimumDownpayment)}% to be
                financed through the Rent to Own product of the Family Homes
                Fund Loan Scheme at an interest rate of {props.interestRate}%
                per annum for up to a tenor of {props.tenor} years subject to
                terms and conditions.
              </li>
            </ol>
          </li>
        </ol>
        <p className="text-sm px-8 mt-2">
          <span className="font-semibold"> OTHER TERMS AND CONDITION:</span>
          All subscribers covenant to abide by the terms and conditions
          contained in the final offer letter and the Contract of Sale, in
          addition to all conditions and terms imposed by the Federal Capital
          Authority relating to payments of rates and taxes and such other
          statutory charges
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
                src="/scripts/urlFacebook.png"
                alt="Florence signature"
                className="h-14 object-contain"
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
                className="h-14 w-40 object-contain"
                width={100}
                height={100}
              />
              <p className="font-semibold">Adegbenga Alamu</p>
              <p className="text-sm ">Chief Operating Officer</p>
            </div>
          </div>

          {/* PURCHASER ACCEPTANCE */}
          <section className="space-y">
            <h3 className="font-bold">PURCHASER'S ACCEPTANCE</h3>
            <p>
              I, Mr./Mrs./Dr./Chief
              .............................................................................
              hereby accept the above stated terms and conditions of sale.
            </p>

            <div className="flex items-center justify-between mt-6">
              <div className="flex-1">
                <p>
                  PURCHASER'S SIGNATURE
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
  documentationFee?: string | number;
  minimumDownpayment?: string | number;
  interestRate?: string | number;
  tenor?: string | number;
  accountName?: string | number;
  accountNumber?: string | number;
  bankName?: string | number;
  ref: RefObject<HTMLDivElement | null>;
}
