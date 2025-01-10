export const dimmyData = {
    "key1": "value",
    "key2": "value"
}

interface Attachment {
    id: string;              // Unique ID of the attachment
    has_preview: boolean;    // Indicates if a preview is available
    name: string;            // Name of the attachment file
    size: number;            // Size of the attachment in bytes
}

export interface Message {
    id: string;              // Unique ID of the message
    from: string;            // Sender's information (e.g., name and email)
    to: string;              // Recipient's email address
    cc: string | null;       // CC recipients (if any)
    subject: string;         // Subject of the email
    body_text: string;       // Plain text content of the email
    body_html: string;       // HTML content of the email
    created_at: string;      // Timestamp of when the message was created
    attachments: Attachment[]; // List of attachments
}


export interface CreateNewEmailResponse {
    email: string
    token: string
}

export interface CreateNewEmailRequest {
    key1: string;
    key2: string;
}