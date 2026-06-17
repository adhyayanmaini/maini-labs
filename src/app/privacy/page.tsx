import React from "react";
import { ArrowLeft, ShieldCheck, Mail, FileText, Lock, Globe } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg-dark text-white font-sans selection:bg-brand-red/30 selection:text-white">
      {/* Premium background radial glows */}
      <div className="absolute top-0 left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-red/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-red-light/5 blur-[150px] pointer-events-none" />

      {/* Header Container */}
      <header className="sticky top-0 z-40 bg-black/60 border-b border-white/5 backdrop-blur-md py-6">
        <div className="mx-auto max-w-5xl px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-sm font-medium text-text-muted hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-brand-red-light" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Compliance & Legal
            </span>
          </div>
        </div>
      </header>

      {/* Content Container */}
      <main className="mx-auto max-w-4xl px-6 py-16 relative z-10">
        <div className="border-b border-white/10 pb-8 mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gradient-silver">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-text-muted">
            Last Updated: June 17, 2026. Effective Date: June 17, 2026.
          </p>
        </div>

        {/* Quick Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-xl border border-white/5 bg-card-dark">
            <Lock className="h-5 w-5 text-brand-red-light mb-3" />
            <h3 className="text-sm font-bold text-white mb-2">Secure Processing</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              We encrypt all telemetry data, voice transcripts, and contact records end-to-end.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-white/5 bg-card-dark">
            <Globe className="h-5 w-5 text-blue-400 mb-3" />
            <h3 className="text-sm font-bold text-white mb-2">TCPA & SMS Rules</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              We require double opt-in consent for all automated voice calls and SMS text interactions.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-white/5 bg-card-dark">
            <FileText className="h-5 w-5 text-emerald-400 mb-3" />
            <h3 className="text-sm font-bold text-white mb-2">Zero Sale of Data</h3>
            <p className="text-xs text-text-muted leading-relaxed">
              We do not lease, trade, or sell your personal information or contact details to third parties.
            </p>
          </div>
        </div>

        {/* Legal Text Sections */}
        <div className="space-y-10 text-sm text-text-muted leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Overview</h2>
            <p>
              Ascend AI ("Company", "we", "us", or "our") provides business process automation services, including artificial intelligence (AI) voice dialers, AI SMS messaging engines, and database synchronization tools. This Privacy Policy describes how we collect, process, secure, and disclose personal data when you interact with our website, use our software interfaces, or speak with our AI agent representatives.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Information We Collect</h2>
            <p className="mb-3">
              We collect information to deliver and optimize our intelligent automation systems. This falls into three categories:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Information You Provide Directly:</strong> Name, work email, phone number, company website, calendar availability, and business infrastructure requirements provided during form submissions or appointment bookings.
              </li>
              <li>
                <strong className="text-white">AI Automation Records:</strong> Recordings, transcription files, sentiment scores, and logs generated when you or your customers call or text an AI Voice Agent or SMS Assistant deployed on our infrastructure.
              </li>
              <li>
                <strong className="text-white">Technical Usage Data:</strong> IP addresses, browser cookies, browser characteristics, device types, operating systems, and page navigation history collected via standard telemetry tags.
              </li>
            </ul>
          </section>

          <section className="p-6 rounded-xl border border-brand-red/20 bg-brand-red/[0.02] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-red" />
            <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <span>⚠️ Important: Voice Recording and SMS Consent Disclosures</span>
            </h2>
            <p className="text-xs leading-relaxed mb-3">
              By calling, receiving a call from, or exchanging text messages with an Ascend AI phone number (or any number operated on behalf of an Ascend AI client company), you explicitly consent to the following:
            </p>
            <ul className="list-disc pl-6 text-xs space-y-2">
              <li>
                <strong className="text-white">Phone Recording Consent:</strong> Conversations with AI voice agents may be dynamically recorded, transcribed, and analyzed. Transcripts are retained to qualify prospects and sync conversation details with user CRM databases.
              </li>
              <li>
                <strong className="text-white">SMS Consent & TCPA Compliance:</strong> By submitting your telephone number through our site or opting into text notifications, you consent to receive recurring automated SMS communications (which may include booking reminders, lead qualification follow-ups, and service alerts). Message and data rates may apply. You can reply <strong className="text-white">"STOP"</strong> at any time to opt-out. Consent to receive text messages is not a condition of purchase.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. How We Use Information</h2>
            <p className="mb-3">
              We process information in accordance with the following business purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To initialize, deploy, and maintain custom voice/text automation pipelines.</li>
              <li>To synchronize lead status updates, transcripts, and calendar appointments with your HubSpot or Salesforce CRM records.</li>
              <li>To verify the credentials, authorization status, and intent of incoming business prospects.</li>
              <li>To train, debug, and optimize language models and speech synthesis algorithms for improved context and conversational accuracy (utilizing anonymized transcripts).</li>
              <li>To enforce our terms of service, detect spam, and secure server environments.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Sharing and Disclosing Information</h2>
            <p className="mb-3">
              We share data only with trusted partner sub-processors required to execute our system workflows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-white">Speech Synthesis & LLM Providers:</strong> API endpoints (such as OpenAI, Anthropic, or ElevenLabs) required to generate AI text responses and voice synthesis in real-time.
              </li>
              <li>
                <strong className="text-white">Telecommunications Gateways:</strong> Providers (such as Twilio or Vapi) required to route SMS messages and connect cellular/SIP trunking lines.
              </li>
              <li>
                <strong className="text-white">CRM & Calendar Integrations:</strong> Direct API transfers (e.g. HubSpot, Salesforce, GoHighLevel, Calendly) authorized by our clients to record scheduling bookings.
              </li>
            </ul>
            <p className="mt-3">
              We do not license or sell telemetry lists, client phone numbers, or conversation transcripts to data brokers, ad networks, or third-party marketing services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Data Retention & Security</h2>
            <p className="mb-3">
              We implement industry-grade technical safeguards to protect information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All database connections and website sessions run under TLS/SSL v1.3 encryption protocols.</li>
              <li>Lead detail transcripts stored on our servers are encrypted at rest using AES-256 protocols.</li>
              <li>We perform weekly dependency scanning and security evaluations to identify potential package vulnerabilities.</li>
            </ul>
            <p className="mt-3">
              We retain personal data only as long as necessary to fulfill configuration services or comply with legal audits. Transcripts are automatically purged or archived upon client request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Your Rights (GDPR & CCPA Compliance)</h2>
            <p>
              Depending on your location, you may possess specific statutory rights regarding your personal information, including the right to request access to the data we store, request correction of inaccurate records, or request complete deletion of your records. To execute any of these rights, please contact our privacy compliance officer at the email address below.
            </p>
          </section>

          <section className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-base font-bold text-white">Contact Our Legal Team</h3>
              <p className="text-xs text-text-muted mt-1">
                For questions regarding data practices, call recordings, or TCPA consent:
              </p>
            </div>
            <a
              href="mailto:support@ascendai.com"
              className="inline-flex items-center gap-2 text-brand-red-light font-bold hover:text-white transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>support@ascendai.com</span>
            </a>
          </section>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="bg-surface-dark border-t border-white/5 py-8 mt-16 text-center text-xs text-text-muted relative z-10">
        <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Ascend AI Corp. All rights reserved.</span>
          <Link href="/" className="transition-colors hover:text-white">
            Return to Homepage
          </Link>
        </div>
      </footer>
    </div>
  );
}
