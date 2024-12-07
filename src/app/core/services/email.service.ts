import { Injectable } from '@angular/core';
import { IEmailTemplate } from '@data/interfaces/emailtemplate';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  /***
   * Populate an email using provided template and parameters 
   * Open email from link
   * ***/
  createEmailWithTemplate(template: IEmailTemplate, parameters: Record<string,any>) : void {
    // Populate the email body
    const emailBody = this.populateBody(template.emailBody, parameters);
    // Retrieve recipients list from parameters
    const recipients = parameters['recipients'] || '';
    // Create mailto link
    const mailToLink = `mailto:${encodeURIComponent(recipients)}?subject=${encodeURIComponent(template.emailSubject)}&body=${encodeURIComponent(emailBody)}`
    this.openEmail(mailToLink);
  }

  /*** 
   * Populate an email using provided string parameters 
   * Open email from link
   * ***/
  createEmail(recipients? : string, emailSubject?: string, emailBody?: string ) {
    const mailToLink = `mailto:${encodeURIComponent(recipients!)}?subject=${encodeURIComponent(emailSubject!)}&body=${encodeURIComponent(emailBody!)}`
    this.openEmail(mailToLink);
  }

  /*** 
   * Open email from link
   * ***/
  openEmail(mailToLink: string) {
    if(mailToLink)
      window.location.href = mailToLink;
  }

  /*** 
   * Replace placeholder values in template definition using parameter values
   * ***/  
  private populateBody(templateBody: string, parameters: Record<string, string>): string {
    return templateBody.replace(/{{(.*?)}}/g, (_, key) => parameters[key.trim()] || '');
  }

}
