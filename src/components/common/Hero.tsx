import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useCreateNewEmailMutation } from "@/redux/services/tempMailApi";
import { dimmyDataForCreateNewMail } from "@/redux/common/apiUrls";
import useMailService from "@/redux/services/useMail";
import { Copy, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { QRCodeSVG } from "qrcode.react";
const Hero = () => {
  const { toast } = useToast();
  const [showQrCode, setShowQrCode] = useState(false);
  const [createNewEmail, { data, isLoading, isSuccess }] =
    useCreateNewEmailMutation();
  const { email, setEmail } = useMailService();
  const getLocalStorageEmail = localStorage.getItem("email");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createNewEmail(dimmyDataForCreateNewMail);
  };

  const handleCopy = () => {
    if (email) {
      navigator.clipboard.writeText(email);
      toast({
        title: "Email copied",
      });
    }
  };

  useEffect(() => {
    if (isSuccess && data?.email) {
      setEmail(data.email);
      localStorage.setItem("email", data.email);
    }
    if (getLocalStorageEmail) {
      setEmail(getLocalStorageEmail);
    }
    if (email == "") {
      createNewEmail(dimmyDataForCreateNewMail);
    }
  }, [isSuccess, data]);

  return (
    <section className="py-8 bg-[#1C1C1E] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">
          Your Temporary Email Address
        </h1>

        <div className="relative w-full bg-[#2C2C2E] rounded-lg p-4 mb-8">
          <div className="flex items-center justify-center gap-2 flex-wrap md:justify-between">
            <p className="text-white text-lg flex-grow px-4 py-2">
              {isLoading ? "loading....." : email || "No email available"}
            </p>
            <div className="flex gap-2">
              <Button
                title="copy email"
                variant="ghost"
                size="icon"
                className="bg-[#2C2C2E] hover:bg-[#3C3C3E] text-white"
                onClick={() => setShowQrCode(!showQrCode)}
              >
                <QrCode className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-[#2C2C2E] hover:bg-[#3C3C3E] text-white"
                onClick={handleCopy}
              >
                <Copy className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        {showQrCode && (
          <QRCodeSVG
            value={email}
            className="w-full shadow-lg border p-3 my-3"
          />
        )}
        <Button
          type="button"
          onClick={handleSubmit}
          className="w-full md:w-auto mx-auto px-8 py-6 text-lg font-medium bg-[#00FFA3] text-black hover:bg-[#00FFA3]/90 rounded-lg flex items-center justify-center"
        >
          Get New Email
        </Button>

        <p className="text-gray-400 text-center mt-8 max-w-2xl mx-auto text-sm">
          Forget about spam, advertising mailings, hacking and attacking robots.
          Keep your real mailbox clean and secure. Temp Mail provides temporary,
          secure, anonymous, free, disposable email address.
        </p>
      </div>
    </section>
  );
};

export default Hero;
