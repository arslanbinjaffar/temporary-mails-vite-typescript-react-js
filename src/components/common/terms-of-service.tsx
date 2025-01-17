import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsOfService() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Terms of Service</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 md:p-6 p-3">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              Welcome to tempmailto.org. Please read the following terms
              carefully before using this website. By using the Site, you agree
              to the following terms and conditions.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">1. Use of Services</h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              tempmailto.org provides users with temporary email services. By
              using this service, you agree not to engage in any illegal or
              malicious activity. Additionally, you agree not to use this
              service beyond its intended scope or for any unauthorized
              purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">2. User Responsibility</h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              When using tempmailto.org, you are responsible for securely
              storing your own username and password. Additionally, you agree
              not to share any illegal, dangerous, or harmful content while
              using the Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              3. Intellectual Property Rights
            </h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              All content of tempmailto.org (text, graphics, logos, etc.) is
              owned by the Site and is protected by copyright laws. Unauthorized
              use is prohibited.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">4. Changes to Services</h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              tempmailto.org reserves the right to change, suspend, or terminate
              any aspect of the Services at any time without prior notice.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              5. Termination of User Account
            </h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              tempmailto.org reserves the right, at its discretion, to suspend
              or terminate any user's account at any time for any reason.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">6. Amendments</h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              These Terms of Service may be unilaterally modified at any time
              without prior notice. Changes will be effective upon publication
              on the Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">7. Contact</h2>
            <Separator className="my-2" />
            <p className="text-lg leading-relaxed">
              If you have any questions or concerns regarding these Terms of
              Service, please contact us at:{" "}
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
