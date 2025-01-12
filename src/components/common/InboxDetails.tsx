import { ArrowLeft, Trash2, FileCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Message } from "@/redux/common/types";

interface EmailDetailProps {
  message: Message;
  onBack: () => void;
}

const EmailDetail = ({ message, onBack }: EmailDetailProps) => {
  return (
    <div className="bg-[#1C1C1E] flex flex-col max-w-6xl mx-auto rounded-t-md shadow-lg overflow-hidden">
      {/* Header Section */}
      <div className="bg-[#2C2C2E] px-6 py-4 flex items-center justify-between">
        <Button
          variant="ghost"
          className="text-white hover:bg-white/10 flex items-center gap-2"
          onClick={onBack}
        >
          <ArrowLeft className="w-5 h-5" />
          BACK TO LIST
        </Button>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 flex items-center gap-2"
          >
            <Trash2 className="w-5 h-5" />
            Delete
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 flex items-center gap-2"
          >
            <FileCode className="w-5 h-5" />
            Source
          </Button>
        </div>
      </div>

      {/* Email Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-8 flex-grow overflow-y-auto">
        {/* Sender Info */}
        <div className="flex items-start gap-4 mb-8">
          <Avatar className="w-14 h-14 bg-[#2C2C2E] border-2 border-[#00FFA3]">
            <AvatarFallback className="text-[#00FFA3] bg-transparent">
              {message.from[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-white text-lg font-semibold">
                  {message.from}
                </h2>
                <p className="text-gray-400 text-sm">To: {message.to}</p>
                {message.cc && (
                  <p className="text-gray-400 text-sm">CC: {message.cc}</p>
                )}
              </div>
              <div className="text-right">
                <p className="text-gray-400 text-sm">Date:</p>
                <p className="text-white text-sm">{message.created_at}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subject */}
        <div className="mb-6">
          <p className="text-gray-400 mb-2 text-sm">Subject:</p>
          <p className="text-white text-lg font-medium">{message.subject}</p>
        </div>

        {/* Message Content */}
        <div className="text-white mb-6">
          {message.body_html ? (
            <div
              dangerouslySetInnerHTML={{ __html: message.body_html }}
              className="prose prose-invert break-words"
            />
          ) : (
            <p>{message.body_text}</p>
          )}
        </div>

        {/* Attachments Section */}
        {message.attachments.length > 0 && (
          <div>
            <p className="text-gray-400 mb-2 text-sm">Attachments:</p>
            <ul className="space-y-4">
              {message.attachments.map((attachment) => (
                <li
                  key={attachment.id}
                  className="flex justify-between items-center bg-[#2C2C2E] px-6 py-3 rounded-lg shadow-md"
                >
                  <span className="text-white text-sm">{attachment.name}</span>
                  <div className="flex items-center gap-6">
                    <span className="text-gray-400 text-sm">
                      {(attachment.size / 1024).toFixed(2)} KB
                    </span>
                    {attachment.has_preview && (
                      <Button
                        variant="outline"
                        className="text-[#00FFA3] text-sm"
                      >
                        Preview
                      </Button>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailDetail;
