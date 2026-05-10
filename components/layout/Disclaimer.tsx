import { AlertCircle } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 sm:p-5">
      <div className="flex gap-3">
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
        <div>
          <p className="text-sm font-semibold text-amber-800">Disclaimer</p>
          <p className="mt-1 text-sm leading-relaxed text-amber-700">
            CRB Explained Kenya is an independent informational platform. We are not affiliated with any Credit Reference Bureau, bank, SACCO, mobile lender, financial institution, CBK, or government agency. Information provided is educational only and should not be considered financial, legal, or credit advice.
          </p>
        </div>
      </div>
    </div>
  );
}
