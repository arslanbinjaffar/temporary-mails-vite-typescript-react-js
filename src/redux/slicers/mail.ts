import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store/store';
import { Message } from '../common/types';

// Define a type for the slice state
interface MailState {
    email: string;
    mails: Message[];
    selectedMail: Message | null;
}

const initialState: MailState = {
    email: "",
    mails: [],
    selectedMail: null,
};

export const mailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setMailById: (state, action: PayloadAction<string>) => {
            const mail = state.mails.find((mail) => mail.id === action.payload);
            state.selectedMail = mail || null;
        },
        setMails: (state, action: PayloadAction<Message[]>) => {
            state.mails = action.payload;
        }
    },
});

export const { setEmail, setMailById, setMails } = mailSlice.actions;

// Selector to get the mail state
export const mailState = (state: RootState) => state.mail;

export default mailSlice.reducer;
