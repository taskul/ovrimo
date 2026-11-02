import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument } from "@/components/legal-document";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Support | Ovrimo",
  description:
    "Help with Ovrimo games: restoring purchases, saved progress, ads, privacy choices and accounts.",
  path: "/support",
});

const toc = [
  { id: "restore", label: "Restore Remove Ads" },
  { id: "progress", label: "Keep your progress" },
  { id: "ads", label: "Why you see ads" },
  { id: "privacy-choices", label: "Ad privacy choices" },
  { id: "delete", label: "Delete your account" },
  { id: "refunds", label: "Refunds" },
  { id: "contact", label: "Contact us" },
];

export default function SupportPage() {
  return (
    <LegalDocument
      eyebrow="Support"
      title="Help & support"
      description="Answers to common questions about Ovrimo games. Still stuck? Contact us and tell us which game and device you're using."
      toc={toc}
    >
      <p>
        For help with Makevo or ModeDo, visit <a href="https://makevo.site">makevo.site</a>{" "}or{" "}
        <a href="https://www.modedo.app">modedo.app</a>, or{" "}
        <Link href="/contact">contact us</Link>.
      </p>

      <h2 id="restore">I bought &quot;Remove Ads&quot;. How do I get it back?</h2>
      <p>Purchases belong to your Apple ID, not to the device. On a new phone or after reinstalling the game:</p>
      <ol>
        <li>Sign in to the App Store with the Apple ID you used to buy it.</li>
        <li>Open the game. It usually recognizes the purchase automatically.</li>
        <li>
          If not, go to <strong>Settings → Ads → Restore purchases</strong>.
        </li>
      </ol>
      <p>You don&apos;t need an Ovrimo account to restore a purchase.</p>

      <h2 id="progress">How do I keep my progress if I reinstall or change phones?</h2>
      <p>
        Progress is saved on your device. To keep it safe, go to <strong>Settings → Account</strong>{" "}
        and choose <strong>Sign in with Apple</strong>. The game then saves your highest unlocked
        level (and your Remove Ads status) to your account. After you reinstall and sign in again,
        that level and every level before it are unlocked.
      </p>
      <p>
        Signing in is optional. Without an account, progress stays on your device only, and deleting
        the game deletes it.
      </p>

      <h2 id="ads">Why do I see ads?</h2>
      <p>
        Ads keep our games free. They only appear between levels, never during a puzzle, and not in
        the first levels of a game. Videos that give a reward (like an extra hint) are always your
        choice. &quot;Remove Ads&quot; removes the ads between levels permanently; optional reward
        videos stay available if you want them.
      </p>
      <p>
        Saw an inappropriate ad? Tap the ⓘ / AdChoices icon in the ad&apos;s corner to report it to
        Google, and let us know through our <Link href="/contact">contact page</Link>.
      </p>

      <h2 id="privacy-choices">How do I change my ad privacy choices?</h2>
      <p>
        In the game, go to <strong>Settings → Privacy choices</strong>. Where the law requires it
        (for example in the EU and UK), the consent form lets you change your choices at any time.
        See our <Link href="/privacy">Privacy Policy</Link>{" "}for details.
      </p>

      <h2 id="delete">How do I delete my account?</h2>
      <p>
        In the game, go to <strong>Settings → Account → Delete account</strong>. This permanently
        deletes your saved progress and account from our servers. See{" "}
        <Link href="/account-deletion">Account deletion</Link>{" "}for other options.
      </p>

      <h2 id="refunds">Can I get a refund?</h2>
      <p>
        Purchases are processed by Apple, so refunds are handled by Apple. Request one at{" "}
        <a href="https://reportaproblem.apple.com/">reportaproblem.apple.com</a>.
      </p>

      <h2 id="contact">Contact us</h2>
      <p>
        For anything else, use our <Link href="/contact">contact page</Link>{" "}or email{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalDocument>
  );
}
