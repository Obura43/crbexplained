'use client';

import { useState } from 'react';
import { PiggyBank, Lightbulb } from 'lucide-react';

export default function EmergencyFundCalculator() {
  const [monthlyExpenses, setMonthlyExpenses] = useState('');
  const [targetMonths, setTargetMonths] = useState('3');
  const [result, setResult] = useState<{
    recommended: number;
    months: number;
  } | null>(null);

  const tips = [
    'Start small -- even saving KES 500 per month builds a safety net over time.',
    'Keep your emergency fund in a separate account you can access quickly.',
    'Aim for at least 1 month of expenses first, then build toward 3-6 months.',
    'Only use emergency savings for genuine emergencies, not planned expenses.',
    'Replenish your fund as soon as possible after using it.',
  ];

  function calculate() {
    const expenses = parseFloat(monthlyExpenses);
    const months = parseFloat(targetMonths);

    if (!expenses || expenses <= 0 || !months || months <= 0) {
      return;
    }

    const recommended = expenses * months;
    setResult({ recommended, months });
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
          <PiggyBank className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-semibold text-slate-900">Emergency Fund Calculator</h2>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="monthly-expenses" className="block text-sm font-medium text-slate-700">
            Monthly Expenses (KES)
          </label>
          <input
            id="monthly-expenses"
            type="number"
            min="0"
            placeholder="e.g. 30000"
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          />
        </div>

        <div>
          <label htmlFor="target-months" className="block text-sm font-medium text-slate-700">
            Savings Target (months of expenses)
          </label>
          <select
            id="target-months"
            value={targetMonths}
            onChange={(e) => setTargetMonths(e.target.value)}
            className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
          >
            <option value="1">1 month</option>
            <option value="2">2 months</option>
            <option value="3">3 months (recommended minimum)</option>
            <option value="4">4 months</option>
            <option value="5">5 months</option>
            <option value="6">6 months (recommended)</option>
            <option value="9">9 months</option>
            <option value="12">12 months</option>
          </select>
        </div>

        <button
          onClick={calculate}
          className="w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/20 sm:w-auto"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <h3 className="mb-1 text-sm font-medium text-emerald-700">Recommended Emergency Fund</h3>
          <p className="text-2xl font-bold text-emerald-900">
            KES {result.recommended.toLocaleString()}
          </p>
          <p className="mt-1 text-sm text-emerald-700">
            This covers {result.months} month{result.months !== 1 ? 's' : ''} of your estimated expenses.
          </p>
        </div>
      )}

      <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-5">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-blue-900">
          <Lightbulb className="h-4 w-4 text-blue-500" />
          Savings Guidance Tips
        </h3>
        <ul className="mt-3 space-y-2">
          {tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
              {tip}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-lg border border-slate-100 bg-slate-50 p-4">
        <p className="text-xs text-slate-500">
          This is an educational estimate only and not financial advice. Your actual emergency fund needs may vary based on your circumstances.
        </p>
      </div>
    </div>
  );
}
