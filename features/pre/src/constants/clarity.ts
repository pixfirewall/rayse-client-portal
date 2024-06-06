import type { ClarityStepProps, ClarityMetrics } from '../types'

export const CLARITY_STEPS: Array<ClarityStepProps> = [
  {
    number: 1,
    days: 2,
    activities: 18,
    details: [
      {
        title: `Consultation`,
        body: `In this all-important first step, we partner expectations and information
          with expertise to answer questions, anticipate and elevate your home-buying experience ahead.`,
      },
      {
        title: `Home Requirements`,
        body: `Together we’ll align on what you seek in a home and discuss the services,
          processes, and strategize how to get you there.`,
      },
      {
        title: `Buyer's Agreement`,
        body: `Working with full transparency and a shared commitment up front to eliminate surprises,
          we’ll walk through and sign an agreement detailing the terms of our partnership.`,
      },
      {
        title: `Financing`,
        body: `We’ll determine pre-approval and financing strategies, review mortgage sources and variations in services,
          the debt-to-income ratio and PMI vs. MIP, interest rate fluctuations and locking,
          closing costs and credit scores, and connect you with recommended lenders.`,
      },
      {
        title: `Search Setup`,
        body: `At the end of step one, our consultation stage, you’ll have everything you need
          to start touring homes effectively and efficiently.`,
      },
    ],
  },
  {
    number: 2,
    days: 15,
    activities: 45,
    details: [
      {
        title: `Tours & Offers`,
        body: `Our collaboration assures that you will be viewing a select set of homes that best meet your criteria,
          thoughtfully directing your time and energy investment. We’ll work together to create a compelling offer,
          negotiate terms and liaise with the seller’s agent to secure the property.`,
      },
      {
        title: `Under Evaluation`,
        body: `Through the touring process, I’ll take care of everything we need to get us to a place of proper evaluation,
          from screening new listings to scheduling showings and noting what to look for to investigating
          neighborhoods and answering inquiries.`,
      },
      {
        title: `Offer(s) Submitted`,
        body: `Once we’ve found a property that inspires an offer, I’ll guide us through the complex document preparation
          and negotiation process. You’ll have a lot of questions to consider and decisions to make—some exciting,
          some difficult. I’m your advocate in all of them.`,
      },
      {
        title: `Homes(s) Rejected`,
        body: `Often the most important thing an agent can do for you is to advise you not to make an offer on a home,
          or to negotiate from a place of power to walk away. Maybe you just didn’t feel like the home was the right fit,
          it’s all part of the process.`,
      },
    ],
  },
  {
    number: 3,
    days: 30,
    activities: 36,
    details: [
      {
        title: `Contract`,
        body: `At this point, we’ve secured a contract with the seller. I’ll take you from here to the closing process,
          including providing a timeline and action plan and facilitating communication between all parties,
          connecting you with experts and inspections and navigating contractual requirements, negotiations and approval.`,
      },
      {
        title: `Open Escrow/Title`,
        body: `From confirming the signed contract to coordinating with buyers and escrow/title for deposit monies
          to initiating the financing process with the lender and ordering appraisal, I’ll see you through the transaction.`,
      },
      {
        title: `Disclosures`,
        body: `I’ll review all disclosures and reports in detail—streamlining and clarifying for your optimum ability
          to approve, noting items for close attention or further discussion. I’ll address your questions or concerns
          with the listings agent and report back, obtain any additional written disclosures from the seller
          and assist in signing, providing copies to all parties.`,
      },
      {
        title: `Property Inspection`,
        body: `Meticulous, expert, thorough inspection is a key determinant to the future you want (or don’t want) with
          this home. We’ll map out what we need to investigate and by who, and I’ll connect and schedule appointments
          with the inspectors and listing agents. We’ll review findings, discuss negotiations for repairs or credits,
          draft addenda and contingency removals.`,
      },
      {
        title: `Pest Inspection`,
        body: `Termites or other pests have the potential to eat away a family’s life savings.
          I will communicate investigations, schedule appointments, gain access for our inspector and see you
          through all findings to signing.`,
      },
      {
        title: `Additional Inspection`,
        body: `Sometimes piece of mind come from second opinions and thorough investigations.
          I’ll help you find confidence by ordering any additional inspection we may need.`,
      },
      {
        title: `Appraisal`,
        body: `I will schedule the appraisal and meet the appraiser at the property; provide them with insights,
          information and notable property features; review the complete report and discuss discrepancies with you;
          and negotiate or revisit a low appraisal with the listing agent, seller and lender if needed.`,
      },
      {
        title: `Financing`,
        body: `For your final financing, I’ll draft contingency removal documents for you to review and sign.
          From there I’ll confirm financing and appraisal signoff with the lender and provide contingency removal
          to the listing agent.`,
      },
    ],
  },
  {
    number: 4,
    days: 5,
    activities: 16,
    details: [
      {
        title: `Closing`,
        body: `After all due diligence in the transaction has been completed and underwriting of the loan is underway,
          we prepare for a few final steps, review final documents—and move you into your new home!`,
      },
      {
        title: `Utilities`,
        body: `I’ll coordinate with the seller’s agent the alignment of the closing and move-in dates.
          Then we ensure the smooth transfer of utilities and any vendor services, as well as setting up postal forwarding.`,
      },
      {
        title: `Funding`,
        body: `For the final remaining paperwork, I’ll lead you through the loan documents, closing disclosure review,
          confirmation of financing and purchase terms, signing with the escrow and title team and submitting to the lender
          for final review and approval. The day prior to closing, I’ll confirm with them that the loan has been funded;
          the day of closing I’ll confirm with you that you’re on record with the final documents and are now
          the official owners.`,
      },
      {
        title: `Moving`,
        body: `Time to move in, which I’ll facilitate by confirming the set up of property accounts and moving details;
          picking up the keys and other items from the listing agent; checking on the property status; and meeting you
          to drop of the keys and celebrate.`,
      },
    ],
  },
]

export const CLARITY_METRICS: Array<ClarityMetrics> = [
  {
    days: 0,
    hours: 0,
    activities: 0,
    outcomes: 0,
  },
  {
    days: 2,
    hours: 6,
    activities: 18,
    outcomes: 20,
  },
  {
    days: 17,
    hours: 20,
    activities: 63,
    outcomes: 55,
  },
  {
    days: 47,
    hours: 36,
    activities: 79,
    outcomes: 80,
  },
  {
    days: 53,
    hours: 44,
    activities: 95,
    outcomes: 96,
  },
]
