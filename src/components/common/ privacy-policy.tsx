import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 md:p-6 p-3 ">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Welcome to tempmailto.org. Your privacy is critically important to
              us. This Privacy Policy explains how we collect, use, and
              safeguard your information when you use our service. By using our
              website, you consent to the practices described herein.
            </p>
          </div>

          {/* Collection and Utilization of Personal Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Collection and Utilization of Personal Information
            </h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              At tempmailto.org, we do not collect personally identifiable
              information such as your name, email address, or phone number
              unless explicitly provided. However, certain technical details may
              be automatically collected when you visit our site. This includes,
              but is not limited to:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device information</li>
              <li>Date and time of your visit</li>
              <li>Pages viewed and time spent on the site</li>
            </ul>
            <p className="text-lg leading-relaxed">
              This information is used solely for analytical purposes to enhance
              our services and ensure smooth functionality. For example,
              analyzing traffic trends helps us optimize server performance and
              user experience.
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Cookies</h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              Cookies are small text files stored on your device by your
              browser. These files help us:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Remember user preferences</li>
              <li>Analyze site usage and performance</li>
              <li>Provide a customized browsing experience</li>
            </ul>
            <p className="text-lg leading-relaxed">
              We use both session and persistent cookies. Session cookies expire
              when you close your browser, while persistent cookies remain on
              your device until deleted. You can manage cookie preferences
              through your browser settings. For more details, please refer to
              our Cookie Policy.
            </p>
          </section>

          {/* Temporary Email Service */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Temporary Email Service</h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              Our core service involves providing temporary email addresses to
              help you protect your primary email from spam and unwanted
              messages. All emails received through our service are stored
              temporarily and are automatically deleted after a specified
              period. This ensures:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Your inbox remains uncluttered.</li>
              <li>Personal data is not stored permanently.</li>
              <li>Your privacy is protected by design.</li>
            </ul>
            <p className="text-lg leading-relaxed">
              Emails processed through our system are not shared with third
              parties, and we do not access their content beyond what is
              necessary for service functionality.
            </p>
          </section>

          {/* Data Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Data Security</h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              We take data security seriously. Our systems are designed with
              industry-standard measures to prevent unauthorized access, misuse,
              or data loss. These include:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Regular security audits</li>
              <li>Firewall and intrusion detection systems</li>
              <li>Access controls and authentication protocols</li>
            </ul>
            <p className="text-lg leading-relaxed">
              While we strive to protect your information, no method of
              transmission or storage is completely secure. We encourage users
              to exercise caution and report any suspicious activity.
            </p>
          </section>

          {/* Compliance with Laws */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Compliance with Laws</h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              tempmailto.org complies with applicable data protection
              regulations, including GDPR and CCPA. Users have the right to:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Access their data</li>
              <li>Request data deletion</li>
              <li>Know how their data is used</li>
            </ul>
            <p className="text-lg leading-relaxed">
              If you are located in the European Union or California, specific
              rights and protections may apply to your data. For more details,
              contact us at the email provided below.
            </p>
          </section>

          {/* Updates to Privacy Policy */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Updates to Privacy Policy
            </h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              This Privacy Policy may be updated periodically to reflect changes
              in our practices or for other operational, legal, or regulatory
              reasons. We encourage you to review this page regularly to stay
              informed about how we protect your information. Changes are
              effective upon posting.
            </p>
          </section>

          {/* Contact Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              If you have any questions or concerns about our Privacy Policy or
              data handling practices, feel free to contact us at:
            </p>
            <p className="text-lg leading-relaxed">
              <a
                href="mailto:admin@tempmailto.org"
                className="text-primary hover:underline font-medium"
              >
                admin@tempmailto.org
              </a>
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
