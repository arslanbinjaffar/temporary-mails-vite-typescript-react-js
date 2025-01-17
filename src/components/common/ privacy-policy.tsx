import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 md:p-6 p-3">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              At tempmailto.org, we highly prioritize the privacy of our
              visitors. This privacy policy outlines the types of information we
              gather on our website and how we utilize this data. We encourage
              you to carefully review this policy.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Collection and Utilization of Personal Information
            </h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              tempmailto.org refrains from gathering personally identifiable
              information (e.g., name, email address, phone number) from its
              users. However, certain data may be automatically collected during
              your site visit, including IP address, browser type, visit
              duration, and similar technical details.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Cookies</h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              tempmailto.org utilizes cookies, which are small text files stored
              on visitors' devices according to their browser settings. These
              files aid in remembering user preferences and how visitors
              interact with the site. For further details on cookie usage,
              please refer to our Cookie Policy.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Updates</h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              Our privacy policy may undergo occasional updates. We advise
              visiting this page regularly to stay informed about any
              alterations. Any modifications to the privacy policy will be
              promptly posted on this page, with changes taking effect upon
              posting.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              Should you have any inquiries or concerns regarding our privacy
              policy, please feel free to reach out to us at{" "}
              <a
                href="mailto:admin@tempmailto.org"
                className="text-primary hover:underline font-medium"
              >
                admin@tempmailto.org
              </a>
              .
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
