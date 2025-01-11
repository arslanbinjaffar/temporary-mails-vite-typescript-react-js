import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "@/components/ui/card"
  
  export default function FAQSection() {
    return (
      <div className="container mx-auto py-8 px-4">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Frequently Asked Questions</CardTitle>
            <CardDescription>
              Find answers to common questions about our temporary email service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl font-semibold">
                  1. What is Temporary Email?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  A temporary email is an email address that can be used for a specific period of time and is usually anonymous. These addresses are designed for temporary needs such as registrations and verifications.
                </AccordionContent>
              </AccordionItem>
  
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl font-semibold">
                  2. How Long is a Temporary Email Address Valid?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Our temporary email addresses are valid for [e.g., 10 minutes, 1 hour, 24 hours] after creation. Once the time period expires, the email address and all its messages are automatically deleted.
                </AccordionContent>
              </AccordionItem>
  
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-xl font-semibold">
                  3. Can I Send Emails with a Temporary Email Address?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Some temporary email services only support receiving emails, while others also support sending emails. With our service, you can.
                </AccordionContent>
              </AccordionItem>
  
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-xl font-semibold">
                  4. Is Using Temporary Email Safe?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Yes, our temporary email service is safe and anonymous. We do not collect personal information, and since the email address is temporary, you are protected from unwanted emails.
                </AccordionContent>
              </AccordionItem>
  
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-xl font-semibold">
                  5. When Can I Use Temporary Email?
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-lg space-y-4">
                    <p>Temporary email addresses can be used in the following situations:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Registering on websites or services</li>
                      <li>Creating temporary accounts on forums and social media sites</li>
                      <li>Signing up for newsletters</li>
                      <li>Whenever you prefer not to give out your personal email address</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
  
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-xl font-semibold">
                  6. Can I Save My Temporary Email Address?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Temporary email addresses are not permanent and will be automatically deleted after the designated period. Therefore, you cannot save them.
                </AccordionContent>
              </AccordionItem>
  
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-xl font-semibold">
                  7. Is Your Temporary Email Service Free?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Yes, our temporary email service is completely free. [If you have a paid version, provide details here.]
                </AccordionContent>
              </AccordionItem>
  
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-xl font-semibold">
                  8. Can My Temporary Email Address Be Deleted Before It Expires?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Temporary email addresses are generally active for the designated period. However, due to system load, some addresses may be deleted earlier. Be sure to check your important messages within this time frame.
                </AccordionContent>
              </AccordionItem>
  
              <AccordionItem value="item-9">
                <AccordionTrigger className="text-xl font-semibold">
                  9. How Can I View Messages Sent to My Temporary Email?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  After creating your temporary email address, you can view your messages in the designated inbox on our website. Messages will automatically appear in this inbox.
                </AccordionContent>
              </AccordionItem>
  
              <AccordionItem value="item-10">
                <AccordionTrigger className="text-xl font-semibold">
                  10. What Types of Messages Cannot Be Received with Your Temporary Email Service?
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  Some services may block sending messages to temporary email addresses. In such cases, you may not receive emails. Additionally, our spam and malicious content filtering systems may automatically block suspicious messages.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    )
  }
  
  