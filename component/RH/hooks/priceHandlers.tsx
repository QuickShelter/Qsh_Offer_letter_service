import numberToWords from "number-to-words";
import { useEffect, useState } from "react";

export const formatToCurrencyString = (
  number?: number | string,
  numberOfDecimalPlaces?: number,
) => {
  if (number) {
    return parseFloat(`${number}`).toLocaleString("en-US", {
      style: "decimal",
      maximumFractionDigits:
        typeof numberOfDecimalPlaces !== "undefined"
          ? numberOfDecimalPlaces
          : 2,
      minimumFractionDigits:
        typeof numberOfDecimalPlaces !== "undefined"
          ? numberOfDecimalPlaces
          : 2,
    });
  }
  return "0";
};

 export  function NumberToWordsConverter({
    number,
    currency,
  }: {
    number?: number | string;
    currency?: string;
  }) {
    const words = numberToWords.toWords(number ? number : 0);
    const currencyText = currency ? `${currency} ` : ""; // Add currency if provided

    return (
      <span>
        ({words.toUpperCase()} {currencyText.toUpperCase()}
        {currency ? "ONLY" : ""})
      </span>
    );
  }

 export  function NumberToText({ number }: { number?: number | string }) {
    const words = numberToWords.toWords(number ? number : 0);

    return <span>{words.toUpperCase()}</span>;
  }


  type PaymentBreakdown = {
  totalAmount: number;
  downPayment: number;
  balance: number;
  installments: number;
  installmentAmount: number;
};

export function calculateInstallmentPlan(
  amount?: number,
  installments?: number
): PaymentBreakdown {
  // If either value is missing, return safe defaults
  if (!amount || !installments) {
    return {
      totalAmount: amount ?? 0,
      downPayment: 0,
      balance: 0,
      installments: installments ?? 0,
      installmentAmount: 0,
    };
  }

  // Installments cannot be less than 1
  if (installments < 1) installments = 1;

  // If only 1 installment → whole amount is down payment
  if (installments === 1) {
    return {
      totalAmount: amount,
      downPayment: amount/2,
      balance: amount/2,
      installments: 1,
      installmentAmount: amount/2,
    };
  }

  const downPayment = amount / installments;
  const balance = amount - downPayment;

  // Spread balance across the remaining (installments - 1)
  const installmentAmount = Number(
    (balance / (installments - 1)).toFixed(2)
  );

  return {
    totalAmount: amount,
    downPayment,
    balance,
    installments,
    installmentAmount,
  };
}

type FutureDates = Record<string, string | undefined>;

export function generateMilestones(
  installments: number,
  installmentAmount: number,
  futureDates: Record<string, string>
) {
  if (!installments || installments <= 1) return [];

  const milestoneCount = installments - 1;

  // Timeline rules:
  // 1–4 installments = 12 months
  // >4 installments = installments * 3 months
  const totalMonths = installments > 4 ? installments * 3 : 12;

  const milestones = [];

  for (let i = 1; i <= milestoneCount; i++) {
    const isLast = i === milestoneCount;

    // Even spacing across timeline
    const monthIndex = isLast
      ? totalMonths
      : Math.round((i * totalMonths) / installments);

    const monthKey = `${monthIndex}Months`;

    milestones.push({
      number: i + 1,
      amount: installmentAmount,
      monthIndex,
      dueDateKey: monthKey,
      dueDate: futureDates[monthKey] ?? null,
    });
  }

  return milestones;
}



export function useFutureDates(maxMonths: number = 36) {
  const [futureDates, setFutureDates] = useState<Record<string, string>>({});

  useEffect(() => {
    const currentDate = new Date();

    const addMonths = (date: Date, months: number): string => {
      const newDate = new Date(date);
      newDate.setMonth(newDate.getMonth() + months);
      return newDate.toISOString();
    };

    const dates: Record<string, string> = {};

    for (let i = 1; i <= maxMonths; i++) {
      dates[`${i}Months`] = addMonths(currentDate, i);
    }

    setFutureDates(dates);
  }, [maxMonths]);

  return futureDates;
}
