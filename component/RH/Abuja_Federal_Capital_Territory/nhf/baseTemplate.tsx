import {
  featuresListOptions,
  handleFinishingName,
} from "@/component/hooks/finishingTypehandlers";
import {
  calculateInstallmentPlan,
  formatToCurrencyString,
  generateMilestones,
  NumberToText,
  NumberToWordsConverter,
  useFutureDates,
} from "@/component/hooks/priceHandlers";
import Image from "next/image";
import * as Icon from "react-feather";

export const FCTBaseNhfLetter = (props: props) => {
  return (
    <div className="">
      <div className=" h-[297mm] p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <Image
              src="/hope.png"
              width={70}
              height={40}
              className="w-[70px] h-10 "
              alt="rh logo"
            />
            <div className="block">
              <h2 className="text-[18px] text-primary font-bold m-0">
                RENEWED PROJECTS <br /> SPV LIMITED
              </h2>
              <p className=" font-bold text-[14px]">RC: 7329087</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold">
              <Icon.Phone size={12} className="text-primary font-medium" />{" "}
              <span>(+234)02016335959, (+234)09169973322</span>{" "}
            </div>
            <div className="flex items-center gap-2 text-xs font-bold">
              <Icon.Mail size={12} className="text-primary  font-medium" />{" "}
              <span>info@renewedhopeproject.ng</span>{" "}
            </div>
            <div className="flex items-center gap-2 text-xs font-bold">
              <Icon.Globe size={12} className="text-primary font-medium" />{" "}
              <span>https://renewedhopehomes.fmhud.gov.ng</span>{" "}
            </div>
            <div className="flex items-center gap-2 text-xs font-bold">
              <Icon.MapPin size={12} className="text-primary font-medium" />{" "}
              <span>
                {" "}
                7b Ondo Street, Osborne Foreshore Estate, Ikoyi, Lagos.
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="border border-primary my-8" />
        <div>
          <p className="text-end font-semibold">{props.date}</p>
          <div className="max-w-60 text-sm font-semibold">
            <p className="mb-2">{props.name}</p>
            <p>{props.address}</p>
            <p className="my-8">Dear {props.name}</p>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold capitalize">
            PROVISIONAL OFFER LETTER FOR THE SALE OF {props.title} LOCATED AT{" "}
            {props.location}
          </h1>
          <p className="text-sm my-4">
            We are pleased to offer you a unit of {props.title}. located at the
            Renewed Hope Housing City, {props.location} "Subject to Contract."
          </p>
          <ol className="list-decimal text-sm px-8 space-y-4">
            <li>
              <span className="font-semibold">PROPERTY DESCRIPTION:</span>{" "}
              {props.title} situated at Renewed Hope Housing City,{" "}
              {props.location} Nigeria with infrastructural amenities: (road
              network, drainage, electricity, water supply, shopping mall and
              recreational centre)
            </li>
            <li>
              <span className="font-semibold">ESTATE LOCATION:</span> The estate
              is situated at the Renewed Hope Housing Estate, {props.location}.
            </li>
            <li>
              <span className="font-semibold">Title:</span> DEVELOPMENT LEASE
              AGREEMENT. (Deed of Sublease will be issued to Subscribers).
            </li>
            <li>
              <span className="font-semibold">FINISHING TYPE:</span>{" "}
              {handleFinishingName(props.finishingType)}.
            </li>
            <div>
              4b. <span className="font-semibold">FEATURES</span>{" "}
              <ul className="space-y-2 px-4">
                {featuresListOptions(props.finishingType)}.{" "}
              </ul>
            </div>

            <li>
              <span className="font-semibold">COST OF PROPERTY:</span> &#8358;
              {formatToCurrencyString(props.amount)}{" "}
              <NumberToWordsConverter currency="Naria" number={props.amount} />
            </li>
          </ol>
        </div>
      </div>
      <div className="h-[297mm] pt-10 p-6">
        <ol start={6} className="list-decimal text-sm px-8 space-y-4">
          <li>
            <span className="font-semibold">DOCUMENTATION FEE:</span>{" "}
            {props.documentationFee} of the property cost
          </li>
          <li>
            <span className="font-semibold">LEGAL DOCUMENTATION:</span> A
            Contract of Sale shall be executed between the company and the
            purchaser upon receipt of the full purchase price. An executed deed
            of sublease/survey plan shall be issued to the Purchaser. The
            Purchaser shall bear the cost of survey plan and obtaining
            Certificate of Occupancy.
            <ol className="px-4 mt-4 list-[lower-alpha]" type="A">
              <li>
                <span className="font-semibold">VALIDITY:</span>
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
            <span className="font-semibold">PAYMENT TERMS:</span>
            <ol className="px-4 mt-4 list-[lower-alpha]" type="A">
              <li>
                Minimum down payment of {props.minimumDownpayment}% of purchase
                price upon acceptance of provisional offer letter.
              </li>
              <li>
                Balance of {100 - Number(props.minimumDownpayment)}% to be
                financed through the Rent to Own product of the National Housing
                Fund loan at an interest rate of {props.interestRate}% per annum
                for up to a tenor of {props.tenor} years subject to terms and
                conditions.
              </li>
            </ol>
          </li>
        </ol>
        <p className="text-sm px-8 mt-4">
          <span className="font-semibold"> OTHER TERMS AND CONDITION:</span>
          All subscribers covenant to abide by the terms and conditions
          contained in the final offer letter and the Contract of Sale, in
          addition to all conditions and terms imposed by the Federal Capital
          Authority relating to payments of rates and taxes and such other
          statutory charges
          <br />
          Kindly indicate your acceptance of this offer by signing in the space
          provided be herein and return the duly signed copy of this Provisional
          offer.
        </p>
        <div className="w-full bg-white text-sm px-6 py-10 space-y-8">
          {/* MODE OF PAYMENT */}
          <section>
            <h2 className="font-bold text-lg mb-3">MODE OF PAYMENT:</h2>
            <p className="mb-4">
              You can make payment on the platform using the following methods:
            </p>

            <ol className="list-[lower-alpha] space-y-3 ml-6">
              <li>
                <span className="font-semibold">Bank transfer:</span> Transfer
                funds directly from your bank account to the provided account
                when you initiate payment directly on the platform.
              </li>
              <li>
                <span className="font-semibold">Local card payment:</span> Pay
                conveniently using your local debit card.
              </li>
              <li>
                <span className="font-semibold">
                  International card payment:
                </span>{" "}
                For customers outside Nigeria, you can securely pay with an
                international credit or debit card.
              </li>
            </ol>
          </section>

          {/* NOTE */}
        </div>
      </div>
      <div className="h-[297mm] text-sm pt-10 p-6">
        <p className="text-red-600 font-medium">
          NOTE: Please make all payments through your personal wallets on your
          dashboard
        </p>

        {/* Closing */}
        <div className="space-y-2">
          <p>We thank you for your valued patronage</p>
          <p>Yours faithfully</p>

          <p className="mt-4 font-bold">FOR: RENEWED PROJECT SPV LIMITED</p>
        </div>

        {/* SIGNATURES */}
        <div className="mt-10 grid grid-cols-2 gap-8">
          {/* Florence */}
          <div className="flex flex-col items-start space-y-2">
            <Image
              src="/scripts/urlFacebook.png"
              alt="Florence signature"
              className="h-14 object-contain"
              width={100}
              height={100}
            />
            <p className="font-semibold">Florence Alao</p>
            <p className="text-sm text-gray-600">
              Legal Counsel/Company Secretary
            </p>
          </div>

          {/* Adegbenge */}
          <div className="flex flex-col items-start space-y-2">
            <Image
              src="/scripts/urlyoutube.jpg"
              alt="Adegbenga signature"
              className="h-14 w-40 object-contain"
              width={100}
              height={100}
            />
            <p className="font-semibold">Adegbenga Alamu</p>
            <p className="text-sm text-gray-600">Chief Operating Officer</p>
          </div>
        </div>

        {/* PURCHASER ACCEPTANCE */}
        <section className="mt-10 space-y-3">
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
}
