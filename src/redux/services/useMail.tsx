import { Message } from "../common/types";
import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { setEmail as setEmailAction, setMailById as setMailByIdAction,setMails as setMailsAction } from "@/redux/slicers/mail";

type UseMailServiceReturnType = {
  readonly email: string;
  readonly setEmail: (email: string) => void;
  readonly mails: Message[];
  readonly selectedMail: Message | null; // Include selectedMail in the return type
  readonly getMailById: (mailId: string) => void; // Get mail by ID function
  readonly setMails: (mails: Message[]) => void
};

const useMailService = (): UseMailServiceReturnType => {
  const dispatch = useAppDispatch();

  return {
    email: useAppSelector((state) => state.mail.email),
    setEmail: (email: string) => {
      dispatch(setEmailAction(email));
    },
    setMails:(mails:Message[])=>{
        dispatch(setMailsAction(mails))
    },
    mails: useAppSelector((state) => state.mail.mails),
    selectedMail: useAppSelector((state) => state.mail.selectedMail), 
    getMailById: (mailId: string) => {
      dispatch(setMailByIdAction(mailId)); 
    },
  };
};

export default useMailService;
