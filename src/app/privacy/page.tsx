import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument } from "@/components/legal-document";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy | Ovrimo",
  description:
    "How Ovrimo LLC handles information on ovrimo.com and in Ovrimo games.",
  path: "/privacy",
});

const toc = [
  { id: "scope", label: "Scope" },
  { id: "summary", label: "Summary" },
  { id: "website", label: "This website" },
  { id: "device", label: "Games: data on your device" },
  { id: "account", label: "Games: optional account" },
  { id: "purchases", label: "Games: purchases" },
  { id: "ads", label: "Games: advertising" },
  { id: "analytics", label: "Games: gameplay statistics" },
  { id: "sharing", label: "Who we share data with" },
  { id: "retention", label: "Retention & deletion" },
  { id: "products", label: "Product-specific details" },
  { id: "rights", label: "Your rights & choices" },
  { id: "children", label: "Children" },
  { id: "changes", label: "Changes & contact" },
];

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      description="What information Ovrimo LLC handles on this website and in our games, and the choices you have."
      updated="Last updated: November 1, 2026"
      toc={toc}
    >
      <p>
        This Privacy Policy explains what information {siteConfig.legalName} (&quot;Ovrimo&quot;,
        &quot;we&quot;, &quot;us&quot;) handles on this website and in the games we publish (each a
        &quot;Game&quot;), together with the services built into them.
      </p>

      <h2 id="scope">1. Scope</h2>
      <p>
        This policy covers <strong>www.ovrimo.com</strong>{" "}and every <strong>Ovrimo game</strong>,
        including Color Cascade. Some Ovrimo apps have their own privacy policy, which applies to that
        app instead. They are listed in <a href="#products">Section 11</a>.
      </p>

      <h2 id="summary">2. Summary</h2>
      <ul>
        <li>
          You don&apos;t need an account to play our Games. We don&apos;t ask for your name, email
          address, phone number, contacts, photos or precise location.
        </li>
        <li>Game progress and settings are stored on your device.</li>
        <li>
          If you choose <strong>Sign in with Apple</strong>{" "}in a Game, we store a random account
          identifier from Apple and a small cloud save (your highest unlocked level and purchase
          status) so you can restore it later. You can delete it at any time.
        </li>
        <li>
          Our Games show ads from Google AdMob. Where the law requires it, we ask for your consent
          first, and you can change your choices in the Game&apos;s settings.
        </li>
        <li>Purchases are handled by Apple. We never see your payment details.</li>
        <li>
          On this website, we only receive what you send us through the contact form or the updates
          sign-up.
        </li>
        <li>We don&apos;t sell your personal information.</li>
      </ul>

      <h2 id="website">3. This website</h2>
      <ul>
        <li>
          <strong>Contact form:</strong>{" "}your name, email address, subject and message, so we can
          reply. They are stored in our database, which is hosted by Neon, Inc.
        </li>
        <li>
          <strong>Updates sign-up:</strong>{" "}your email address, so we can send you product news. To
          stop receiving updates, contact us and we&apos;ll remove it.
        </li>
        <li>
          <strong>Hosting:</strong>{" "}the site is hosted by Vercel, Inc., which processes technical data
          such as your IP address, browser type and the pages you request in order to deliver and
          secure the site.
        </li>
        <li>
          <strong>Cookies:</strong>{" "}we don&apos;t use advertising or analytics cookies on this site.
          The only cookie is a sign-in cookie used by Ovrimo staff in the site&apos;s admin area.
        </li>
      </ul>

      <h2 id="device">4. Games: data stored on your device</h2>
      <p>
        Each Game stores on your device: your level progress, stars, daily-challenge results, any
        puzzle in progress, settings (sound, music, haptics, accessibility), whether you&apos;ve
        bought &quot;Remove Ads&quot;, your privacy choices, simple counters used to space out ads,
        and a random install identifier used for gameplay statistics. This data stays on your device
        unless you use the features described below, and it&apos;s deleted when you delete the Game.
      </p>

      <h2 id="account">5. Games: optional account &amp; cloud save</h2>
      <p>
        Signing in is optional and is only used to back up your progress. If you choose{" "}
        <strong>Sign in with Apple</strong>:
      </p>
      <ul>
        <li>
          <strong>What Apple shares with us:</strong>{" "}a unique account identifier, and a token that
          proves you signed in. We do <strong>not</strong>{" "}request your name or email address.
        </li>
        <li>
          <strong>What we store, per Game:</strong>{" "}your highest unlocked level, whether you own
          &quot;Remove Ads&quot;, the App Store transaction identifier we use to confirm that purchase
          with Apple, and the dates these were last updated. We also store an Apple authorization
          token so we can revoke our access when you delete your account.
        </li>
        <li>
          <strong>Why:</strong>{" "}so that after reinstalling a Game, or on another device, signing in
          restores your unlocked levels and Remove Ads status. We don&apos;t use this data for
          advertising or analytics.
        </li>
        <li>
          <strong>Where:</strong>{" "}on servers operated for us by Cloudflare, Inc., which may process
          data in the United States and other countries.
        </li>
      </ul>
      <p>
        You can delete your account at any time in the Game (
        <strong>Settings → Account → Delete account</strong>). See{" "}
        <Link href="/account-deletion">Account deletion</Link>.
      </p>

      <h2 id="purchases">6. Games: purchases</h2>
      <p>
        In-app purchases such as &quot;Remove Ads&quot; are processed by Apple through the App Store
        under Apple&apos;s terms and privacy policy. We never receive your card details or your Apple
        ID. Apple tells the Game whether a purchase is active. If you&apos;re signed in, our server
        asks Apple to confirm the purchase using its transaction identifier before saving it to your
        account. Purchase data is not used for advertising or sent to analytics services.
      </p>

      <h2 id="ads">7. Games: advertising</h2>
      <p>
        Our free Games show ads served by <strong>Google AdMob</strong>{" "}(Google LLC). To show and
        measure ads, Google may collect and process information such as your IP address (which may be
        used to estimate general location), device and operating-system information, ad interactions
        and performance data, diagnostic data, and, only if you allow it in Apple&apos;s App Tracking
        Transparency prompt, your device&apos;s advertising identifier (IDFA). Learn how Google uses
        this information at{" "}
        <a href="https://policies.google.com/technologies/partner-sites">
          policies.google.com/technologies/partner-sites
        </a>{" "}
        and in <a href="https://policies.google.com/privacy">Google&apos;s Privacy Policy</a>.
      </p>
      <p>
        In the European Economic Area, the United Kingdom, Switzerland and other places where it&apos;s
        required, the Game shows Google&apos;s consent form before personalized ads are used. You can
        review or change your choices at any time in the Game under{" "}
        <strong>Settings → Privacy choices</strong>. If you decline, you may still see
        non-personalized ads. Ads are limited to content suitable for a general audience.
      </p>

      <h2 id="analytics">8. Games: gameplay statistics</h2>
      <p>
        Each Game counts gameplay events on your device (for example, levels started and completed,
        hints and undos used, ads requested or completed, session length) so we can make levels
        fairer. These statistics leave your device only if we have enabled our analytics provider (
        <strong>Mixpanel, Inc.</strong>) <strong>and</strong>{" "}you allow it in{" "}
        <strong>Settings → Share anonymous stats</strong>. Where consent is required (such as the EEA
        and UK) this is off until you turn it on. When sent, statistics are linked only to the random
        install identifier, never to your name, email, advertising identifier or account, and we ask
        Mixpanel not to derive your location from your IP address.
      </p>

      <h2 id="sharing">9. Who we share data with</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google (AdMob, User Messaging Platform)</td>
              <td>Showing and measuring ads in Games; collecting consent</td>
              <td>As described in Section 7</td>
            </tr>
            <tr>
              <td>Apple (App Store, Sign in with Apple)</td>
              <td>Purchases; optional sign-in</td>
              <td>Purchase status, transaction identifiers, sign-in tokens</td>
            </tr>
            <tr>
              <td>Cloudflare</td>
              <td>Hosting our cloud-save service</td>
              <td>Account identifier and cloud save (Section 5)</td>
            </tr>
            <tr>
              <td>Mixpanel (only if enabled and allowed)</td>
              <td>Aggregated gameplay statistics</td>
              <td>Gameplay events with a random install identifier</td>
            </tr>
            <tr>
              <td>Vercel and Neon</td>
              <td>Hosting this website and its database</td>
              <td>Website technical data; contact messages and sign-up emails (Section 3)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        We may also disclose information if required by law, or to protect our rights or users&apos;
        safety. If Ovrimo is involved in a merger or acquisition, information may be transferred as
        part of that transaction, subject to this policy. We do not sell or &quot;share&quot; personal
        information for cross-context behavioral advertising as those terms are defined in California
        law, except to the extent Google&apos;s ad services are considered such sharing; you can limit
        this through Privacy choices and Apple&apos;s tracking settings.
      </p>

      <h2 id="retention">10. Retention &amp; deletion</h2>
      <ul>
        <li>
          <strong>Game data on your device:</strong>{" "}kept until you delete the Game, or until you use{" "}
          <strong>Settings → Reset progress</strong>{" "}(which resets progress but keeps purchases and
          privacy choices).
        </li>
        <li>
          <strong>Account and cloud save:</strong>{" "}kept until you delete your account. Deletion
          removes your account and cloud saves for all Ovrimo games from our servers immediately, and
          we revoke our Sign in with Apple access.
        </li>
        <li>
          <strong>Gameplay statistics (if sent):</strong>{" "}kept in aggregated form for up to 24 months.
        </li>
        <li>
          <strong>Contact messages:</strong>{" "}kept as long as needed to answer you and keep a record
          of the conversation. <strong>Updates sign-up:</strong>{" "}until you ask us to remove it.
        </li>
        <li>
          <strong>Google, Apple and our hosting providers</strong>{" "}keep data according to their own
          policies.
        </li>
      </ul>

      <h2 id="products">11. Product-specific details</h2>
      <h3 id="color-cascade">Color Cascade</h3>
      <ul>
        <li>
          <strong>Ads:</strong>{" "}Google AdMob rewarded videos (optional) and interstitial ads between
          levels after level 10. The one-time &quot;Remove Ads&quot; purchase removes them, except
          optional reward videos.
        </li>
        <li>
          <strong>Cloud save (if signed in):</strong>{" "}highest unlocked level and Remove Ads status.
        </li>
        <li>
          <strong>Sharing a world image:</strong>{" "}when you share a restored world, the image is
          created on your device and sent only where you choose in the share sheet.
        </li>
        <li>
          <strong>Device permissions:</strong>{" "}none required.
        </li>
      </ul>
      {/* Add a section here for each new game. */}

      <h3 id="makevo">Makevo</h3>
      <p>
        Makevo has its own privacy policy, which applies to the Makevo app and website:{" "}
        <a href="https://makevo.site/privacy-policy">makevo.site/privacy-policy</a>.
      </p>

      <h3 id="modedo">ModeDo</h3>
      <p>
        ModeDo has its own privacy policy, which applies to the ModeDo app and website:{" "}
        <a href="https://www.modedo.app/privacy">modedo.app/privacy</a>.
      </p>

      <h2 id="rights">12. Your rights &amp; choices</h2>
      <p>
        Depending on where you live (for example under the EU/UK GDPR or US state privacy laws), you
        may have the right to access, correct, delete or receive a copy of your personal information,
        to object to or restrict certain processing, and to withdraw consent. You can:
      </p>
      <ul>
        <li>
          change ad consent in a Game under <strong>Settings → Privacy choices</strong>, and limit ad
          tracking in iOS <strong>Settings → Privacy &amp; Security → Tracking</strong>;
        </li>
        <li>
          turn gameplay statistics off in <strong>Settings → Share anonymous stats</strong>{" "}(when
          available);
        </li>
        <li>
          delete your Game account in <strong>Settings → Account → Delete account</strong>;
        </li>
        <li>
          contact us through our <Link href="/contact">contact page</Link>{" "}or at{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}for any other request.
          We&apos;ll respond within the time the law requires. You may also complain to your local
          data protection authority.
        </li>
      </ul>
      <p>
        Where the GDPR applies, we rely on: performance of our contract with you (providing the Game,
        cloud save and purchases, and answering your messages); consent (personalized ads, gameplay
        statistics where required, product updates); and our legitimate interests (non-personalized
        ads that keep our Games free, security and fixing problems). Data may be processed in the
        United States and other countries; where required, transfers are covered by appropriate
        safeguards such as the EU Standard Contractual Clauses used by our providers.
      </p>

      <h2 id="children">13. Children</h2>
      <p>
        Our Games and this website are made for a general audience and are not directed at children
        under 13 (or the equivalent minimum age in your country). We do not knowingly collect personal
        information from children. If you believe a child has provided us personal information,
        contact us and we&apos;ll delete it.
      </p>

      <h2 id="changes">14. Changes &amp; contact</h2>
      <p>
        We may update this policy. We&apos;ll change the &quot;Last updated&quot; date above and, for
        significant changes, tell you in the Game. Questions or requests: {siteConfig.legalName}, via
        our <Link href="/contact">contact page</Link>{" "}or at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalDocument>
  );
}
