"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { quoteServiceOptions } from "@/data/services";

type FormState = {
  name: string;
  email: string;
  phone: string;
  zip: string;
  service: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  zip: "",
  service: "",
  message: "",
};

export function QuoteForm() {
  const [values, setValues] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "invalid" | "unavailable">(
    "idle",
  );

  function validate(form: FormState): Partial<FormState> {
    const next: Partial<FormState> = {};

    if (!form.name.trim()) {
      next.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }

    if (!form.zip.trim()) {
      next.zip = "Please enter your city or ZIP code.";
    }

    if (!form.service) {
      next.service = "Please select a service.";
    }

    if (!form.message.trim()) {
      next.message = "Please share a few details about the property.";
    }

    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("invalid");
      return;
    }

    setStatus("unavailable");
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-4"
      aria-describedby="quote-form-status"
    >
      <Field
        id="quote-name"
        label="Full name"
        value={values.name}
        error={errors.name}
        onChange={(value) => setValues((current) => ({ ...current, name: value }))}
        autoComplete="name"
      />
      <Field
        id="quote-email"
        label="Email"
        type="email"
        value={values.email}
        error={errors.email}
        onChange={(value) => setValues((current) => ({ ...current, email: value }))}
        autoComplete="email"
      />
      <Field
        id="quote-phone"
        label="Phone (optional)"
        type="tel"
        value={values.phone}
        error={errors.phone}
        onChange={(value) => setValues((current) => ({ ...current, phone: value }))}
        autoComplete="tel"
      />
      <Field
        id="quote-zip"
        label="City or ZIP code"
        value={values.zip}
        error={errors.zip}
        onChange={(value) => setValues((current) => ({ ...current, zip: value }))}
        autoComplete="postal-code"
      />
      <div>
        <label htmlFor="quote-service" className="mb-1.5 block text-sm font-semibold text-warm-ivory">
          Service needed
        </label>
        <select
          id="quote-service"
          value={values.service}
          onChange={(event) =>
            setValues((current) => ({ ...current, service: event.target.value }))
          }
          aria-invalid={Boolean(errors.service)}
          className="min-h-11 w-full border border-muted-beige bg-warm-ivory px-3 text-near-black"
        >
          <option value="">Select a service</option>
          {quoteServiceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service ? (
          <p className="mt-1 text-sm text-dusty-terracotta" role="alert">
            {errors.service}
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="quote-message" className="mb-1.5 block text-sm font-semibold text-warm-ivory">
          Property details
        </label>
        <textarea
          id="quote-message"
          rows={4}
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
          aria-invalid={Boolean(errors.message)}
          className="w-full border border-muted-beige bg-warm-ivory px-3 py-2 text-near-black"
        />
        {errors.message ? (
          <p className="mt-1 text-sm text-dusty-terracotta" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" className="w-full w480:w-auto">
        Request Your Cleaning Quote
      </Button>
      <p id="quote-form-status" className="text-sm text-soft-taupe" role="status">
        {status === "invalid"
          ? "Please correct the highlighted fields and try again."
          : status === "unavailable"
            ? "The quote form is ready, but submissions are not connected yet. A send destination has not been confirmed, so this request was not delivered."
            : "Required fields: name, email, city or ZIP, service, and property details."}
      </p>
    </form>
  );
}

type FieldProps = {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
};

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-warm-ivory">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        className="min-h-11 w-full border border-muted-beige bg-warm-ivory px-3 text-near-black"
      />
      {error ? (
        <p className="mt-1 text-sm text-dusty-terracotta" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
