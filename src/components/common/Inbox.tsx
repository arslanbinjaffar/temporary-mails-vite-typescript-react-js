import { useGetMessageByEmailQuery } from "@/redux/services/tempMailApi";
import { Button } from "../ui/button";
import useMailService from "@/redux/services/useMail";
import { ChevronRight, Copy, RefreshCw, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Message } from "@/redux/common/types";
import { useToast } from "@/hooks/use-toast";

const Inbox = () => {
  const { toast } = useToast();
  const { email, setMails } = useMailService();
  const { data, isLoading, refetch } = useGetMessageByEmailQuery(email);
  const navigate = useNavigate();

  const handleRefresh = () => {
    refetch();
    toast({
      title: "Refreshed Inbox",
    });
  };

  useEffect(() => {
    if (data) {
      setMails(data as Message[]);
    }

    const refetchTimer = setInterval(() => {
      if (navigator.onLine) {
        refetch();
      }
    }, 10000);

    const handleNetworkChange = () => {
      if (!navigator.onLine) {
        console.log("Offline: Pausing refetch");
        clearInterval(refetchTimer);
      }
    };

    window.addEventListener("online", handleNetworkChange);
    window.addEventListener("offline", handleNetworkChange);

    return () => {
      clearInterval(refetchTimer);
      window.removeEventListener("online", handleNetworkChange);
      window.removeEventListener("offline", handleNetworkChange);
    };
  }, [data]);

  return (
    <section className="w-full bg-[#1C1C1E] px-4">
      <div className="max-w-6xl mx-auto">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button
            variant="outline"
            className="bg-white/5 hover:bg-white/10 text-white border-0"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copy
          </Button>
          <Button
            variant="outline"
            onClick={handleRefresh}
            className="bg-white/5 hover:bg-white/10 text-white border-0"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Inbox Table */}
        <div className="bg-[#2C2C2E] rounded-lg overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#1C1C1E] text-white py-4 px-6">
            <div className="col-span-4 font-medium">SENDER</div>
            <div className="col-span-6 font-medium">SUBJECT</div>
            <div className="col-span-2 font-medium text-right pr-4">VIEW</div>
          </div>

          {/* Loading Spinner */}
          {isLoading ? (
            <div className="flex justify-center items-center py-8">
              <Mail className="animate-spin w-8 h-8 text-gray-400" />
            </div>
          ) : (
            // Messages
            data &&
            data.map((email) => (
              <div
                key={email.id}
                className="grid grid-cols-12 items-center px-6 py-4 hover:bg-white/5 transition-colors border-b border-white/5 cursor-pointer"
                onClick={() => navigate(`/${email.id}`)}
              >
                <div className="col-span-4 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00FFA3]" />
                  <div>
                    <p className="font-semibold text-white truncate">
                      {email.from.split(" ")[0]}
                    </p>
                    <p className="text-sm text-gray-400 truncate">
                      {email.from.split(" ")[1]}
                    </p>
                  </div>
                </div>
                <div className="col-span-6">
                  <p className="text-white text-base font-medium truncate">
                    {email.subject}
                  </p>
                </div>
                <div className="col-span-2 text-right pr-4">
                  <ChevronRight className="w-5 h-5 text-gray-400 ml-auto" />
                </div>
              </div>
            ))
          )}

          {(!data || data.length === 0) && !isLoading && (
            <div className="flex flex-col items-center justify-center py-20 px-4">
              <div className="relative w-16 h-16 mb-4">
                <Mail className="w-16 h-16 text-gray-400" />
              </div>

              <h3 className="text-xl font-medium text-white mb-2">
                Your inbox is empty
              </h3>
              <p className="text-gray-400">Waiting for incoming emails</p>
            </div>
          )}
        </div>

        {/* Information Section */}
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">
            What is Disposable Temporary E-mail?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Disposable email - is a free email service that allows to receive
            email at a temporary address that self-destructed after a certain
            time elapses. It is also known by names like : tempmail,
            10minutemail, throwaway email, fake-mail or trash-mail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inbox;
