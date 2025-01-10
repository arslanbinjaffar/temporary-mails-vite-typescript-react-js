import { ArrowLeft, Trash2, FileCode } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Message } from '@/redux/common/types';

interface EmailDetailProps {
  message: Message;
  onBack: () => void;
}

const EmailDetail = ({ 
  message,
  onBack
}: EmailDetailProps) => {
  return (
    <div className="bg-[#1C1C1E] flex flex-col max-w-6xl mx-auto rounded-t-md">
      <div className="bg-[#2C2C2E] px-6 py-4 flex items-center justify-between">
        <Button
          variant="ghost"
          className="text-white hover:bg-white/10"
          onClick={onBack}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          BACK TO LIST
        </Button>
        <div className="flex gap-6">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            <Trash2 className="w-5 h-5 mr-2" />
            Delete
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
          >
            <FileCode className="w-5 h-5 mr-2" />
            Source
          </Button>
        </div>
      </div>

      {/* Email Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 flex-grow">
        {/* Sender Info */}
        <div className="flex items-start gap-4 mb-8">
          <Avatar className="w-12 h-12 bg-[#2C2C2E] border-2 border-[#00FFA3]">
            <AvatarFallback className="text-[#00FFA3] bg-transparent">
              {message.from[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-white text-lg font-medium">
                  {message.from}
                </h2>
                <p className="text-gray-400">To: {message.to}</p>
                {message.cc && (
                  <p className="text-gray-400">CC: {message.cc}</p>
                )}
              </div>
              <div className="text-right">
                <p className="text-gray-400">Date:</p>
                <p className="text-white">{message.created_at}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subject */}
        <div className="mb-6">
          <p className="text-gray-400 mb-2">Subject:</p>
          <p className="text-white">{message.subject}</p>
        </div>

        {/* Message Content */}
        <div className="text-white mb-6">
          {message.body_html ? (
            <div
              dangerouslySetInnerHTML={{ __html: message.body_html }}
              className="prose prose-invert"
            />
          ) : (
            <p>{message.body_text}</p>
          )}
        </div>

        {/* Attachments */}
        {message.attachments.length > 0 && (
          <div>
            <p className="text-gray-400 mb-2">Attachments:</p>
            <ul className="space-y-4 flex">
              {message.attachments.map((attachment) => (
                <li
                  key={attachment.id}
                  className="flex justify-between items-center bg-[#2C2C2E] px-4 py-3 rounded-lg"
                >
                  <span className="text-white">{attachment.name}</span>
                  <div className="flex items-center gap-6">
                    <span className="text-gray-400 text-sm">
                      {(attachment.size / 1024).toFixed(2)} KB
                    </span>
                    {attachment.has_preview && (
                      <Button variant="outline" className="text-[#00FFA3]">
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
