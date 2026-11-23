"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
    const t = useTranslations("ContactPage.form");

    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [range, setRange] = useState("packaging");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<FormState>("idle");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    company,
                    email,
                    phone,
                    range,
                    message,
                }),
            });

            if (!response.ok) {
                throw new Error("Request failed");
            }

            setStatus("success");
            setName("");
            setCompany("");
            setEmail("");
            setPhone("");
            setRange("packaging");
            setMessage("");
        } catch {
            setStatus("error");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-surface-warm border border-gray-200 rounded-sm p-6 sm:p-8 md:p-10 shadow-sm space-y-6"
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label
                        htmlFor="contact-name"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-2"
                    >
                        {t("nameLabel")} *
                    </label>
                    <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t("namePlaceholder")}
                        className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-red transition-colors"
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-company"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-2"
                    >
                        {t("companyLabel")}
                    </label>
                    <input
                        id="contact-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={t("companyPlaceholder")}
                        className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-red transition-colors"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label
                        htmlFor="contact-email"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-2"
                    >
                        {t("emailLabel")} *
                    </label>
                    <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t("emailPlaceholder")}
                        className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-red transition-colors"
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-2"
                    >
                        {t("phoneLabel")}
                    </label>
                    <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t("phonePlaceholder")}
                        className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-red transition-colors"
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="contact-range"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-2"
                >
                    {t("rangeLabel")}
                </label>
                <select
                    id="contact-range"
                    value={range}
                    onChange={(e) => setRange(e.target.value)}
                    className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-brand-red transition-colors"
                >
                    <option value="packaging">{t("ranges.packaging")}</option>
                    <option value="customSourcing">{t("ranges.customSourcing")}</option>
                    <option value="other">{t("ranges.other")}</option>
                </select>
            </div>

            <div>
                <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-800 mb-2"
                >
                    {t("messageLabel")} *
                </label>
                <textarea
                    id="contact-message"
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("messagePlaceholder")}
                    className="w-full bg-white border border-gray-300 rounded-sm px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-red transition-colors resize-y"
                />
            </div>

            {status === "success" && (
                <div className="p-4 rounded-sm bg-emerald-50 border border-emerald-200 text-sm text-emerald-900">
                    {t("successMessage")}
                </div>
            )}

            {status === "error" && (
                <div className="p-4 rounded-sm bg-red-50 border border-red-200 text-sm text-red-900">
                    {t("errorMessage")}
                </div>
            )}

            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-red text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm hover:opacity-90 disabled:opacity-60 transition-opacity cursor-pointer"
            >
                {status === "submitting" ? t("submitting") : t("submit")}
            </button>
        </form>
    );
}