import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument } from "@/components/legal-document";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Delete your account | Ovrimo",
  description: "How to delete your Ovrimo game account and its saved data.",
  path: "/account-deletion",
});

export default function AccountDeletionPage() {
  return (
    <LegalDocument
      eyebrow="Your data"
      title="Delete your account"
      description="How to delete the optional account used by Ovrimo games, and what happens to your data."
      updated="Applies to every Ovrimo game."
    >
      <h2>In the game (fastest)</h2>
      <ol>
        <li>
          Open the game and go to <strong>Settings → Account</strong>.
        </li>
        <li>
          Tap <strong>Delete account</strong>{" "}and confirm.
        </li>
      </ol>
      <p>
        Your account and all cloud-saved data are deleted from our servers immediately. This includes
        your saved levels and your Remove Ads status for every Ovrimo game. We also ask Apple to
        revoke the game&apos;s Sign in with Apple access.
      </p>

      <h2>Without the game</h2>
      <p>
        If the game is no longer installed, send a request through our{" "}
        <Link href="/contact">contact page</Link>{" "}or to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>{" "}and ask us to delete your
        account. We&apos;ll confirm the request and complete it within 30 days. You can also stop
        sharing your Apple ID with our games at any time: on your iPhone, go to{" "}
        <strong>Settings → [your name] → Sign in with Apple</strong>{" "}(or{" "}
        <strong>Password &amp; Security → Sign in with Apple</strong>{" "}on some iOS versions).
      </p>

      <h2>What happens to purchases?</h2>
      <p>
        Deleting your account does not cancel or refund purchases. &quot;Remove Ads&quot; stays tied
        to your Apple ID, and you can always get it back with <strong>Restore purchases</strong>{" "}in
        the game, with or without an account.
      </p>

      <h2>What we keep</h2>
      <p>
        Nothing linked to your deleted account. Data stored only on your device (like your local
        progress) stays there until you delete the game. Advertising and payment partners (Google and
        Apple) keep data according to their own policies. See our{" "}
        <Link href="/privacy">Privacy Policy</Link>.
      </p>
    </LegalDocument>
  );
}
