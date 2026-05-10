'use client';

import { useState } from 'react';
import { ClipboardCheck, CheckCircle, XCircle, Lightbulb } from 'lucide-react';

interface Question {
  id: string;
  text: string;
  goodAnswer: boolean; // true = "yes" is the good answer
}

const questions: Question[] = [
  {
    id: 'repay-on-time',
    text: 'Do you repay your loans on time?',
    goodAnswer: true,
  },
  {
    id: 'track-expenses',
    text: 'Do you track your expenses?',
    goodAnswer: true,
  },
  {
    id: 'emergency-savings',
    text: 'Do you have emergency savings?',
    goodAnswer: true,
  },
  {
    id: 'multiple-apps',
    text: 'Do you borrow from multiple apps?',
    goodAnswer: false, // "no" is the good answer here
  },
];

function getTips(score: number) {
  if (score >= 75) {
    return [
      'Great job! You are practicing healthy financial habits.',
      'Consider building an emergency fund if you have not already.',
      'Keep monitoring your CRB report to maintain a good credit standing.',
    ];
  }
  if (score >= 50) {
    return [
      'You are on the right track but there is room for improvement.',
      'Focus on repaying loans on time to protect your CRB record.',
      'Start tracking your expenses if you are not already doing so.',
      'Avoid borrowing from multiple lenders to reduce your debt burden.',
    ];
  }
  if (score >= 25) {
    return [
      'Your financial health needs attention. Start with small changes.',
      'Prioritize repaying existing loans before taking on new debt.',
      'Begin tracking your expenses to understand where your money goes.',
      'Consider speaking to a financial counselor for personalized guidance.',
    ];
  }
  return [
    'Your financial health score suggests significant room for improvement.',
    'Start by stopping new borrowing and focus on repaying existing debt.',
    'Track every expense, even small ones, to find areas to save.',
    'Seek free financial counseling from trusted organizations.',
    'Check your CRB report regularly to understand your credit standing.',
  ];
}

export default function FinancialHealthChecklist() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({
    'repay-on-time': null,
    'track-expenses': null,
    'emergency-savings': null,
    'multiple-apps': null,
  });
  const [result, setResult] = useState<{ score: number; color: string } | null>(null);

  function setAnswer(id: string, value: boolean) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function calculate() {
    let score = 0;
    questions.forEach((q) => {
      const answer = answers[q.id];
      if (answer !== null && answer === q.goodAnswer) {
        score += 25;
      }
    });

    let color: string;
    if (score >= 75) {
      color = 'green';
    } else if (score >= 50) {
      color = 'amber';
    } else {
      color = 'red';
    }

    setResult({ score, color });
  }

  const scoreColorClasses: Record<string, string> = {
    green: 'text-green-600',
    amber: 'text-amber-600',
    red: 'text-red-600',
  };

  const badgeClasses: Record<string, string> = {
    green: 'bg-green-100 text-green-700 border-green-200',
    amber: 'bg-amber-100 text-amber-700 border-amber-200',
    red: 'bg-red-100 text-red-700 border-red-200',
  };

  const barClasses: Record<string, string> = {
    green: 'bg-green-500',
    amber: 'bg-amber-500',
    red: 'bg-red-500',
  };

  const tips = result ? getTips(result.score) : [];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
          <ClipboardCheck className="h-5 w-5" />
        </div>
        <h2 className="text-xl font-semibold text-slate-900">Financial Health Checklist</h2>
      </div>

      <div className="space-y-5">
        {questions.map((q) => (
          <div key={q.id} className="rounded-lg border border-slate-100 bg-slate-50 p-4">
            <p className="mb-3 text-sm font-medium text-slate-700">{q.text}</p>
            <div className="flex gap-3">
              <button
                onClick={() => setAnswer(q.id, true)}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                  answers[q.id] === true
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                <CheckCircle className="h-4 w-4" />
                Yes
              </button>
              <button
                onClick={() => setAnswer(q.id, false)}
                className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                  answers[q.id] === false
                    ? 'border-red-500 bg-red-50 text-red-700'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                <XCircle className="h-4 w-4" />
                No
              </button>
            </div>
          </div>
        ))}

        <button
          onClick={calculate}
          disabled={Object.values(answers).some((a) => a === null)}
          className="w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500/20 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          Calculate Score
        </button>
      </div>

      {result && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <div className="mb-4 flex items-center gap-3">
            <span className={`rounded-full border px-3 py-1 text-sm font-bold ${badgeClasses[result.color]}`}>
              {result.score}/100
            </span>
            <span className="text-sm font-medium text-slate-700">Financial Health Score</span>
          </div>

          {/* Progress bar */}
          <div className="mb-4 h-3 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full rounded-full transition-all ${barClasses[result.color]}`}
              style={{ width: `${result.score}%` }}
            />
          </div>

          {tips.length > 0 && (
            <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-blue-900">
                <Lightbulb className="h-4 w-4 text-blue-500" />
                Tips for You
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
          )}
        </div>
      )}

      <div className="mt-6 rounded-lg border border-slate-100 bg-slate-50 p-4">
        <p className="text-xs text-slate-500">
          This is an educational estimate only and not financial advice. This checklist is a simplified self-assessment and does not represent a comprehensive financial evaluation.
        </p>
      </div>
    </div>
  );
}
