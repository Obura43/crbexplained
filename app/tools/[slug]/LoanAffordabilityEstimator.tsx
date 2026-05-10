'use client';

import { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function LoanAffordabilityEstimator() {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [existingDebt, setExistingDebt] = useState('');
  const [desiredRepayment, setDesiredRepayment] = useState('');
  const [result, setResult] = useState<{ ratio: number; color: string; label: string } | null>(null);

  function calculate() {
    const income = parseFloat(monthlyIncome);
    const debt = parseFloat(existingDebt);
    const repayment = parseFloat(desiredRepayment);

    if (!income || income <= 0 || repayment === undefined || isNaN(repayment)) {
      return;
    }

    const available = income - (debt || 0);
    if (available <= 0) {
      setResult({ ratio: 100, color: 'red', label: 'Your existing debt exceeds your income.' });
      return;
    }

    const ratio = (repayment / available) * 100;
    let color: string;
    let label: string;

    if (ratio < 30) {
      color = 'green';
      label = 'This looks manageable. The desired repayment is well within your available income.';
    } else if (ratio <= 50) {
      color = 'amber';
      label = 'This is on the higher side. Consider reducing the repayment amount or paying off existing debt first.';
    } else {
      color = 'red';
      label = 'This may be too high. Borrowing at this level could strain your finances. Consider a smaller loan or reducing existing debt.';
    }

    setResult({ ratio, color, label });
  }

  const colorClasses: Record<string, string> = {
    green: 'bg-green-50 border-green-200 text-green-800',
    amber: 'bg-amber-50 border-amber-200 text-amber-800',
    red: 'bg-red-50 border-red-200 text-red-800',
  };

  const badgeClasses: Record<string, string> = {
    green: 'bg-green-100 text-green-700',
    amber: 'bg-amber-100 text-amber-700',
    red: 'bg-red-100 text-red-700',
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
          <Calculator className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-semibold text-slate-900">Loan Affordability Estimator</h2>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="monthly-income" className="block text-sm font-medium text-slate-700">
            Monthly Income (KES)
          </label>
          <input
            id="monthly-income"
            type="number"
            min="0"
            placeholder="e.g. 50000"
            value={monthlyIncome}
            onChange={(e) => setMonthlyIncome(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          />
        </div>

        <div>
          <label htmlFor="existing-debt" className="block text-sm font-medium text-slate-700">
            Existing Monthly Debt Payments (KES)
          </label>
          <input
            id="existing-debt"
            type="number"
            min="0"
            placeholder="e.g. 10000"
            value={existingDebt}
            onChange={(e) => setExistingDebt(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          />
        </div>

        <div>
          <label htmlFor="desired-repayment" className="block text-sm font-medium text-slate-700">
            Desired Monthly Loan Repayment (KES)
          </label>
          <input
            id="desired-repayment"
            type="number"
            min="0"
            placeholder="e.g. 8000"
            value={desiredRepayment}
            onChange={(e) => setDesiredRepayment(e.target.value)}
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
        <div className={`mt-6 rounded-xl border p-5 ${colorClasses[result.color]}`}>
          <div className="mb-2 flex items-center gap-2">
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${badgeClasses[result.color]}`}>
              {result.ratio.toFixed(1)}%
            </span>
            <span className="text-sm font-medium">Affordability Ratio</span>
          </div>
          <p className="text-sm leading-relaxed">{result.label}</p>
          <div className="mt-3 text-xs text-slate-500">
            Calculation: Desired Repayment / (Income - Existing Debt) = {result.ratio.toFixed(1)}%
          </div>
        </div>
      )}

      <div className="mt-6 rounded-lg border border-slate-100 bg-slate-50 p-4">
        <p className="text-xs text-slate-500">
          This is an educational estimate only and not financial advice. Always consult a qualified financial advisor before making borrowing decisions.
        </p>
      </div>
    </div>
  );
}
