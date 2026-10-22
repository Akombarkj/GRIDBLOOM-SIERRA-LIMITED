"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  community: string;
  connectionType: string;
  load: string;
  message: string;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  community: "",
  connectionType: "Residential",
  load: "Lighting and basic appliances",
  message: "",
};

export default function ConnectionForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your request right now.");
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message: result.message || "Your connection request has been sent successfully.",
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "An unexpected error occurred.";
      setStatus({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="First name"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last name</label>
          <input
            id="lastName"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Last name"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+232..."
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="community">Community</label>
          <input
            id="community"
            name="community"
            value={form.community}
            onChange={handleChange}
            placeholder="Community or district"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="connectionType">Connection type</label>
          <select id="connectionType" name="connectionType" value={form.connectionType} onChange={handleChange}>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Institutional</option>
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="load">Estimated load</label>
          <select id="load" name="load" value={form.load} onChange={handleChange}>
            <option>Lighting and basic appliances</option>
            <option>Small shop or market</option>
            <option>Institution or public service</option>
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your electricity needs"
          required
        />
      </div>

      {status.type !== "idle" && (
        <p className={`form-status ${status.type}`} aria-live="polite">
          {status.message}
        </p>
      )}

      <button className="primary-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}
