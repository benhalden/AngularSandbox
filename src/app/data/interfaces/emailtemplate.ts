export interface IEmailTemplate {
    emailTemplateId: string;
    emailTemplateDescription?: string; // Optional description for the template 
    emailSubject: string; // Email subject
    emailBody: string; // HTML or plain text content with placeholders     
}