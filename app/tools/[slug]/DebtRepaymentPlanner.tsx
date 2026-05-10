'use client';

import { useState } from 'react';
import { CalendarClock } from 'lucide-react';

export default function DebtRepaymentPlanner() {
  const [totalDebt, setTotalDebt] = useState('');
  const [monthlyRepayment, setMonthlyRepayment] = useState('');
  const [annualInterest, setAnnualInterest] = useState('');
  const [result, setResult] = useState<{
    months: number;
    totalPaid: number;
    totalInterest: number;
  } | null>(null);

  function calculate() {
    const debt = parseFloat(totalDebt);
    const repayment = parseFloat(monthlyRepayment);
    const annualRate = parseFloat(annualInterest) || 0;

    if (!debt || debt <= 0 || !repayment || repayment <= 0) {
      return;
    }

    const monthlyRate = annualRate / 100 / 12;
    let balance = debt;
    let months = 0;
    let totalPaid = 0;
    let totalInterest = 0;

    // Simulate month-by-month repayment
    while (balance > 0 && months < 600) {
      const interestThisMonth = balance * monthlyRate;
      totalInterest += interestThisMonth;
      balance = balance + interestThisMonth - repayment;
      totalPaid += repayment;
      months++;

      // If the remaining balance is less than the repayment, settle
      if (balance <= 0) {
        totalPaid += balance; // adjust overpayment
        break;
      }
    }

    if (months >= 600) {
      // Unable to repay within 50 years
      setResult(null);
      return;
    }

    setResult({ months, totalPaid: totalPaid > 0 ? totalPaid : debt, totalInterest });
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
          <CalendarClock className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-semibold text-slate-900">Debt Repayment Planner</h2>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="total-debt" className="block text-sm font-medium text-slate-700">
            Total Debt Amount (KES)
          </label>
          <input
            id="total-debt"
            type="number"
            min="0"
            placeholder="e.g. 100000"
            value={totalDebt}
            onChange={(e) => setTotalDebt(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          />
        </div>

        <div>
          <label htmlFor="monthly-repayment" className="block text-sm font-medium text-slate-700">
            Monthly Repayment Amount (KES)
          </label>
          <input
            id="monthly-repayment"
            type="number"
            min="0"
            placeholder="e.g. 5000"
            value={monthlyRepayment}
            onChange={(e) => setMonthlyRepayment(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          />
        </div>

        <div>
          <label htmlFor="annual-interest" className="block text-sm font-medium text-slate-700">
            Estimated Annual Interest Rate (%)
          </label>
          <input
            id="annual-interest"
            type="number"
            min="0"
            step="0.1"
            placeholder="e.g. 12"
            value={annualInterest}
            onChange={(e) => setAnnualInterest(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          />
        </div>

        <button
          onClick={calculate}
          className="w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/20 sm:w-auto"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-5">
          <h3 className="mb-3 text-sm font-semibold text-blue-900">Estimated Repayment Summary</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-blue-700">Time to repay:</span>
              <span className="font-semibold text-blue-900">
                {result.months} month{result.months !== 1 ? 's' : ''} (~{(result.months / 12).toFixed(1)} years)
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-blue-700">Approximate total paid:</span>
              <span className="font-semibold text-blue-900">
                KES {Math.round(result.totalPaid).toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-blue-700">Total interest paid:</span>
              <span className="font-semibold text-blue-900">
                KES {Math.round(result.totalInterest).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 rounded-lg border border-slate-100 bg-slate-50 p-4">
        <p className="text-xs text-slate-500">
          This is an educational estimate only and not financial advice. Actual repayment timelines may differ based on loan terms, compounding frequency, and fees.
        </p>
      </div>
    </div>
  );
}
