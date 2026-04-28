"use client";

import { useState } from "react";

import { siteConfig } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ErrorState = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function isValidEmail(value: string) {
  return /\S+@\S+\.\S+/.test(value);
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<ErrorState>({});
  const [state, setState] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: ErrorState = {};

    if (!form.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!isValidEmail(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) {
      nextErrors.subject = "Please add a subject.";
    }
    if (!form.message.trim()) {
      nextErrors.message = "Please add a message.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setState("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setState("success");
        setForm(initialForm);
      } else {
        setState("error");
      }
    } catch (err) {
      setState("error");
    }
  }

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(2,6,23,0.35)] sm:p-8">
      <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
        <Field
          label="Name"
          id="name"
          value={form.name}
          error={errors.name}
          onChange={(value) => setForm((current) => ({ ...current, name: value }))}
        />
        <Field
          label="Email"
          id="email"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={(value) => setForm((current) => ({ ...current, email: value }))}
        />
        <Field
          label="Subject"
          id="subject"
          value={form.subject}
          error={errors.subject}
          onChange={(value) =>
            setForm((current) => ({ ...current, subject: value }))
          }
        />
        <Field
          label="Message"
          id="message"
          multiline
          value={form.message}
          error={errors.message}
          onChange={(value) =>
            setForm((current) => ({ ...current, message: value }))
          }
        />
        <button
          type="submit"
          className="inline-flex justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          Send message
        </button>
      </form>
      {state === "success" ? (
        <p className="mt-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
          Your message has been sent successfully. We will be in touch!
        </p>
      ) : null}
      {state === "error" ? (
        <p className="mt-4 rounded-2xl border border-amber-300/25 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
          Please correct the highlighted fields and try again.
        </p>
      ) : null}
    </div>
  );
}

type FieldProps = {
  label: string;
  id: keyof FormState;
  value: string;
  error?: string;
  type?: string;
  multiline?: boolean;
  onChange: (value: string) => void;
};

function Field({
  label,
  id,
  value,
  error,
  type = "text",
  multiline = false,
  onChange,
}: FieldProps) {
  const className =
    "mt-2 w-full rounded-2xl border bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 " +
    (error
      ? "border-amber-300/70"
      : "border-white/10 focus:border-cyan-300/60");

  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-slate-100">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          rows={6}
          className={className}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={className}
        />
      )}
      {error ? <p className="mt-2 text-sm text-amber-200">{error}</p> : null}
    </div>
  );
}
