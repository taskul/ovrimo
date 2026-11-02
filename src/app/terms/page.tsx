import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument } from "@/components/legal-document";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Use | Ovrimo",
  description: "Terms of Use for ovrimo.com and Ovrimo games.",
  path: "/terms",
});

const toc = [
  { id: "scope", label: "Scope" },
  { id: "license", label: "License to play" },
  { id: "accounts", label: "Optional accounts" },
  { id: "purchases", label: "Purchases" },
  { id: "ads", label: "Ads" },
  { id: "progress", label: "Progress & in-game items" },
  { id: "conduct", label: "Acceptable use" },
  { id: "ip", label: "Intellectual property" },
  { id: "availability", label: "Changes & availability" },
  { id: "disclaimer", label: "Disclaimer" },
  { id: "liability", label: "Limitation of liability" },
  { id: "termination", label: "Termination" },
  { id: "apple", label: "Apple App Store" },
  { id: "law", label: "Governing law" },
  { id: "changes", label: "Changes to these Terms" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Terms of Use"
      title="Terms of Use"
      description="The rules for using ovrimo.com and the games published by Ovrimo LLC."
      updated="Last updated: November 1, 2026"
      toc={toc}
    >
      <p>
        These Terms of Use (&quot;Terms&quot;) are an agreement between you and {siteConfig.legalName}{" "}
        (&quot;Ovrimo&quot;, &quot;we&quot;, &quot;us&quot;). By using this website or downloading or
        playing one of our games, you agree to these Terms. If you don&apos;t agree, please don&apos;t
        use them.
      </p>

      <h2 id="scope">1. Scope</h2>
      <p>
        These Terms apply to <strong>www.ovrimo.com</strong>{" "}and to every game we publish (each a
        &quot;Game&quot;), including Color Cascade. Some Ovrimo apps have their own terms, which apply
        to that app instead:{" "}
        <a href="https://makevo.site/terms">Makevo</a>{" "}and{" "}
        <a href="https://www.modedo.app/terms">ModeDo</a>.
      </p>

      <h2 id="license">2. License to play</h2>
      <p>
        We grant you a personal, non-exclusive, non-transferable, revocable license to download and
        play the Games on devices you own or control, for your own non-commercial entertainment, in
        line with these Terms and the rules of the app store you got the Game from. You may not copy,
        modify, distribute, sell, rent, reverse-engineer or create derivative works of a Game, except
        where the law expressly allows it.
      </p>

      <h2 id="accounts">3. Optional accounts</h2>
      <p>
        You can play without an account. If you choose Sign in with Apple, you&apos;re responsible for
        activity under your account. We may suspend or delete accounts that break these Terms. You can
        delete your account at any time in the Game; see{" "}
        <Link href="/account-deletion">Account deletion</Link>. Cloud saves are a convenience; we work
        hard to keep them safe, but we can&apos;t guarantee that saved progress will never be lost.
      </p>

      <h2 id="purchases">4. Purchases</h2>
      <ul>
        <li>
          In-app purchases, such as &quot;Remove Ads&quot;, are sold through Apple&apos;s App Store,
          are subject to Apple&apos;s terms, and are charged to your Apple ID. Prices are shown in the
          Game before you buy.
        </li>
        <li>
          &quot;Remove Ads&quot; is a one-time purchase that removes ads shown between levels in the
          Game it was bought for. Optional reward videos remain available if you choose to watch them.
          It does not transfer between different Games.
        </li>
        <li>
          You can restore purchases on any device signed in to the same Apple ID using{" "}
          <strong>Restore purchases</strong>{" "}in the Game.
        </li>
        <li>
          Refunds are handled by Apple under its policies (
          <a href="https://reportaproblem.apple.com/">reportaproblem.apple.com</a>). If a purchase is
          refunded, its benefits may be removed.
        </li>
      </ul>

      <h2 id="ads">5. Ads</h2>
      <p>
        Free versions of the Games show third-party ads. We aren&apos;t responsible for
        advertisers&apos; content, products or websites, but we try to keep ads appropriate for a
        general audience. You can report an inappropriate ad through the ad&apos;s AdChoices icon or
        by contacting us.
      </p>

      <h2 id="progress">6. Progress and in-game items</h2>
      <p>
        Levels, stars, hints, undos and other in-game progress and items have no monetary value,
        can&apos;t be exchanged for money, and aren&apos;t your property. We may change, rebalance or
        reset game content to improve the Games.
      </p>

      <h2 id="conduct">7. Acceptable use</h2>
      <p>
        Don&apos;t cheat, exploit bugs, interfere with or try to gain unauthorized access to our
        website, services or servers, use automated tools to access them, send spam through our forms,
        or use our website or Games in a way that breaks the law or harms others.
      </p>

      <h2 id="ip">8. Intellectual property</h2>
      <p>
        This website and the Games, including their code, artwork, music, sounds, levels, text, names
        and logos, are owned by Ovrimo or its licensors and protected by intellectual property laws.
        Apart from the license above, no rights are granted to you.
      </p>

      <h2 id="availability">9. Changes and availability</h2>
      <p>
        We may update, change or stop offering any Game, feature, service or part of this website at
        any time. Some features (ads, purchases, cloud save) need an internet connection and
        third-party services that may be unavailable at times.
      </p>

      <h2 id="disclaimer">10. Disclaimer</h2>
      <p>
        This website and the Games are provided &quot;as is&quot; and &quot;as available&quot;. To the
        fullest extent permitted by law, we disclaim all warranties, express or implied, including
        merchantability, fitness for a particular purpose and non-infringement. We don&apos;t promise
        that they will be error-free or uninterrupted.
      </p>

      <h2 id="liability">11. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, Ovrimo will not be liable for any indirect,
        incidental, special, consequential or punitive damages, or for loss of data or progress,
        arising from your use of this website or the Games. Our total liability for any claim relating
        to them is limited to the amount you paid us for the Game or in-app purchases in the 12 months
        before the claim, or US $50 if you paid nothing. Some places don&apos;t allow these
        limitations, so they may not apply to you, and nothing in these Terms limits rights you have
        under consumer-protection laws that can&apos;t be waived.
      </p>

      <h2 id="termination">12. Termination</h2>
      <p>
        You can stop using the Games at any time by deleting them. We may end your license if you
        break these Terms. Sections 6 to 11 and 14 survive termination.
      </p>

      <h2 id="apple">13. Apple App Store</h2>
      <p>
        If you downloaded a Game from Apple&apos;s App Store: these Terms are between you and Ovrimo
        only, not Apple, and Ovrimo (not Apple) is responsible for the Game and its content. Apple has
        no obligation to provide maintenance or support. If the Game fails to conform to any
        applicable warranty, you may notify Apple, and Apple will refund the purchase price (if any);
        Apple has no other warranty obligation. Ovrimo, not Apple, is responsible for addressing any
        claims relating to the Game, including product liability, legal or regulatory compliance,
        consumer-protection and intellectual-property infringement claims. You confirm you&apos;re not
        located in a country subject to a U.S. Government embargo and you&apos;re not on any U.S.
        Government list of prohibited parties. Apple and its subsidiaries are third-party
        beneficiaries of these Terms and may enforce them against you. Your use of the Game must also
        comply with the App Store Terms of Service.
      </p>

      <h2 id="law">14. Governing law</h2>
      <p>
        {/* TODO(owner): replace [STATE] with the state where Ovrimo LLC is registered. */}
        These Terms are governed by the laws of the State of [STATE], USA, without regard to
        conflict-of-law rules, except where the law of your country of residence requires otherwise.
        Disputes will be resolved in the state or federal courts located in [STATE], unless your local
        law gives you the right to bring claims in your home courts.
      </p>

      <h2 id="changes">15. Changes to these Terms</h2>
      <p>
        We may update these Terms. We&apos;ll change the &quot;Last updated&quot; date and, for
        significant changes, tell you in the Game. Continuing to use the website or play after changes
        take effect means you accept them.
      </p>

      <h2 id="contact">16. Contact</h2>
      <p>
        {siteConfig.legalName}, via our <Link href="/contact">contact page</Link>{" "}or at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalDocument>
  );
}
