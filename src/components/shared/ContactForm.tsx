"use client";

import { AlertCircle, CheckCircle } from "@/components/shared/Icon";
import { buttonStyles } from "@/components/shared/buttonStyles";
import { serviceCategories } from "@/lib/data/services";
import { getEmptyFormData, submitContactForm } from "@/lib/services/contact";
import { cn } from "@/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const NOT_SURE = "Not sure";

const fieldClass =
  "w-full rounded-[10px] border border-line-strong bg-surface px-4 text-fg placeholder:text-muted outline-none transition-[border-color,box-shadow] duration-[120ms] hover:bg-surface-2 focus:border-gold focus:shadow-[0_0_0_3px_rgba(233,185,73,0.35)]";
const invalidClass = "border-error";
const labelClass = "text-[15px] leading-5 font-semibold";

type Errors = { name?: string; email?: string; message?: string };

function validate(data: ReturnType<typeof getEmptyFormData>): Errors {
  const errors: Errors = {};
  if (!data.name.trim()) errors.name = "Enter your name";
  if (!data.email.trim()) errors.email = "Enter your email address";
  else if (!EMAIL_PATTERN.test(data.email.trim())) errors.email = "Enter a valid email address, for example name@company.ca";
  if (!data.message.trim()) errors.message = "Tell us a little about your business";
  return errors;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <motion.p
          id={id}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="flex items-start gap-2 text-sm leading-[21px] font-medium text-error"
        >
          <AlertCircle className="mt-[3px] h-4 w-4 shrink-0" />
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export function ContactForm() {
  const [formData, setFormData] = useState({ ...getEmptyFormData(), service: NOT_SURE });
  const [tried, setTried] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "mailto" | "error">("idle");
  const [sendError, setSendError] = useState("");
  const successRef = useRef<HTMLDivElement>(null);
  const summaryRef = useRef<HTMLDivElement>(null);

  const errors = tried ? validate(formData) : {};
  const errorCount = Object.keys(errors).length;

  useEffect(() => {
    if (status === "sent") successRef.current?.focus();
  }, [status]);

  const update = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [field]: e.target.value });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTried(true);
    if (Object.keys(validate(formData)).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setStatus("submitting");
    const result = await submitContactForm({ ...formData, service: formData.service === NOT_SURE ? "" : formData.service });
    if (result.success) {
      setStatus(result.usedMailto ? "mailto" : "sent");
    } else {
      setSendError(result.error ?? "");
      setStatus("error");
    }
  }

  function reset() {
    setFormData({ ...getEmptyFormData(), service: NOT_SURE });
    setTried(false);
    setStatus("idle");
  }

  const card = "rounded-[20px] border border-line bg-surface p-5 md:p-10 lg:rounded-3xl lg:p-12";

  if (status === "sent") {
    return (
      <motion.div
        ref={successRef}
        tabIndex={-1}
        role="status"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        className={cn(card, "flex flex-col items-start gap-6 outline-none")}
      >
        <CheckCircle className="h-11 w-11" color="#7FCB9A" />
        <p className="font-serif text-[28px] leading-[34px] font-medium md:text-4xl md:leading-[42px]">
          Thank you. Your message has been sent.
        </p>
        <p className="max-w-[520px] text-lg leading-[29px] text-muted">Frank will reply to the email you provided.</p>
        <button type="button" onClick={reset} className={buttonStyles("secondary", "lg", "h-[52px] px-6 text-base")}>
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={cn(card, "flex flex-col gap-6 md:gap-[26px]")}>
      {errorCount > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="flex items-start gap-3.5 rounded-xl border border-error bg-surface-2 px-[18px] py-4 outline-none"
        >
          <AlertCircle className="mt-px h-[22px] w-[22px] shrink-0" />
          <p>
            {errorCount === 1
              ? "There is 1 field to fix before this can be sent."
              : `There are ${errorCount} fields to fix before this can be sent.`}
          </p>
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="f-name" className={labelClass}>Name</label>
          <input
            id="f-name"
            autoComplete="name"
            value={formData.name}
            onChange={update("name")}
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "f-name-error" : undefined}
            className={cn(fieldClass, "h-[52px]", errors.name && invalidClass)}
          />
          <FieldError id="f-name-error" message={errors.name} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="f-email" className={labelClass}>Email</label>
          <input
            id="f-email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={update("email")}
            placeholder="name@company.ca"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "f-email-error" : undefined}
            className={cn(fieldClass, "h-[52px]", errors.email && invalidClass)}
          />
          <FieldError id="f-email-error" message={errors.email} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="f-company" className={labelClass}>
            Company <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="f-company"
            autoComplete="organization"
            value={formData.company}
            onChange={update("company")}
            placeholder="Company name"
            className={cn(fieldClass, "h-[52px]")}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="f-service" className={labelClass}>Service of interest</label>
          <div className="relative">
            <select
              id="f-service"
              value={formData.service}
              onChange={update("service")}
              className={cn(fieldClass, "h-[52px] cursor-pointer appearance-none pr-11")}
            >
              {serviceCategories.map((c) => (
                <option key={c.slug} value={c.title}>
                  {c.title}
                </option>
              ))}
              <option value={NOT_SURE}>{NOT_SURE}</option>
            </select>
            <svg aria-hidden="true" className="pointer-events-none absolute top-4 right-4 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="#A89F95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="f-message" className={labelClass}>Message</label>
        <textarea
          id="f-message"
          rows={6}
          value={formData.message}
          onChange={update("message")}
          placeholder="Tell us a little about your business and what you need help with"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "f-message-error" : undefined}
          className={cn(fieldClass, "min-h-[168px] resize-y py-3.5 leading-6", errors.message && invalidClass)}
        />
        <FieldError id="f-message-error" message={errors.message} />
      </div>

      {status === "error" && <p role="alert" className="text-sm text-error">{sendError}</p>}
      {status === "mailto" && (
        <p role="status" className="text-sm text-muted">Your email app should open with your message ready to send.</p>
      )}

      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:gap-5">
        <button type="submit" disabled={status === "submitting"} className={buttonStyles("primary", "lg", "w-full disabled:opacity-60 md:w-auto")}>
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>
        <p className="text-sm leading-[21px] text-muted">We reply to the email you provide.</p>
      </div>
    </form>
  );
}
