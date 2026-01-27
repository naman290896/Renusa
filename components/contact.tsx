"use client";

import { Mail, Phone, MapPin } from "lucide-react";

const entries = [
  {
    icon: MapPin,
    label: "Address",
    detail: "Vidhya Palace, Indore, Madhya Pradesh 452005",
    href: "https://www.google.com/maps?sca_esv=f29ca39476e4bd13&sxsrf=ANbL-n6j8sPp_NcIRcU25InWWOcr-nCIiA:1769514345635&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAaAhgCIhNyZW51c2EgZm9vZHMgaW5kb3JlMgYQABgNGB4yBRAAGO8FMggQABiABBiiBDIFEAAY7wUyCBAAGIAEGKIEMggQABiABBiiBEjwDFCgBFiPDHABeAGQAQCYAd8BoAH2CaoBAzItNrgBA8gBAPgBAZgCB6ACmQrCAgoQABiwAxjWBBhHwgITEAAYgAQYpgMY-AUYqAMYiwMYDcICBxAAGIAEGA3CAhAQABiABBimAxioAxiLAxgNwgIKEAAYgAQYiwMYDcICCxAAGIAEGIYDGIoFwgIHECEYoAEYCpgDAIgGAZAGA5IHBTEuMC42oAfaJLIHAzItNrgHmArCBwUxLjMuM8gHFIAIAA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KTn1rOGl_WI5MQSlaL1Ar1mq&daddr=Vidhya+Palace,+Indore,+Madhya+Pradesh+452005",
  },
  {
    icon: Phone,
    label: "Phone",
    detail: "+91 930 044 1770",
    href: "tel:+919300441770",
  },
  {
    icon: Mail,
    label: "Email",
    detail: "ssenterprises.bharat@gmail.com",
    href: "mailto:ssenterprises.bharat@gmail.com",
  },
] as const;

export function Contact() {
  return (
      <div className="flex flex-col gap-10 sm:gap-12">
        <h2 class="text-3xl sm:text-4xl font-semibold">
  Contact Us
</h2>

        {entries.map(({ icon: Icon, label, detail, href }) => (
          <div key={label} className="flex gap-4 sm:gap-5">
            <div className="shrink-0 mt-0.5">
              <Icon className="h-6 w-6 text-blue-600" strokeWidth={2} />
            </div>
            <div className="min-w-0">
              <div className="text-blue-600 font-semibold text-[1.05rem]">
                {label}
              </div>
              {href ? (
                <a
                  href={href}
                  className="mt-1.5 text-foreground hover:underline font-medium text-base sm:text-lg block break-all"
                >
                  {detail}
                </a>
              ) : (
                <p className="mt-1.5 text-foreground font-medium text-base sm:text-lg leading-snug">
                  {detail}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
  );
}
