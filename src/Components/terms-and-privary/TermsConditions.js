import React from "react";

function TermsConditions() {
  const descListData = [
    {
      title: "Overview:",
      desc: "The Company will provide the Client with a paid subscription to the Service for a period as outlined in Annexure A (“Billing Period”), which will enable the Client to perform the following services for each of the specified number of retail locations authorized by (and associated with) the Client as outlined in Annexure A. 1. Submit business listing and related information to various first party and third party local and national websites, mobile applications, social networks, and Sekel Tech powered website, including mobile site, that participate in the Service (the “Publisher Partners”),2. Deliver text, image or video based content that adhere to Company’s policies and guidelines on Publisher Partner websites (the “Publisher Partner Sites”) via placement of one or more Sekel Tech Platform widgets (the “Windows”), 3. Allocate and track number of phone calls resulting from the content delivered using virtual numbers delivered as outlined in Annexure A, and 4. Access to a Dashboard (the “Dashboard”) that provides ability to: Upload and manage content outlined in (i) and (ii) above on an ongoing basis, and Basic reporting, such as views and actions (when available),on the content delivered via Windows.",
    },
    {
      title: "Business content:",
      desc: "Client will provide all information related to its business listings, products and services including pricing, description,availability and images. Client will administer and update the Service using the Dashboard with such information on a regular basis to keep the information accurate and current at all times, but in no event within 48-hours on a change being undertaken in its outlet to ensure an optimization of results achievable from the Service.Such content when displayed to Publisher Partners will not alter the search ranking of the associated business listings on the Publisher Partner Sites.",
    },
    {
      title: "Windows:",
      desc: "Client may designate text or image based content (in adherence to the Company’s policies and guidelines) using the Dashboard on an ongoing basis to be delivered on various Publisher Partner Sites via widget placements provided by the Service. This content does not promote you on spaces on Publisher Partner Sites specially designated for advertising. Client may also include such widgets on its own website or mobile site during the term of this Agreement.",
    },
    {
      title: "Call tracking using virtual phone numbers: ",
      desc: "Phone monitoring capabilities using virtual phone numbers provided by the Service incorporates technology from third-party technology providers. Company will deliver a list of virtual phone numbers on a city by city basis (as stated in Annexure A) via the Dashboard based on timelines as outlined in Section 4.1. Once available, Client must associate each virtual phone number to one of its locations or content placements via the Dashboard and enable tracking or recording (in accordance with all applicable laws and consent of all parties involved in the conversations) to monitor the phone calls resulting from the content delivered via the Service. Virtual phone numbers provided must not be used for any purpose or in the context of any content outside that of the Service.",
    },
    {
      title: "Limitations:",
      desc: "You hereby acknowledge and agree that: 1. the Publisher Partner Sites that participate in the Service are subject to change at any time and that Publisher Partner Sites can be added and/or removed from the Service at any time, 2. all content submitted by you for display on Publisher Partner Sites shall be subject to Company’s and Publisher Partners’ review & monitoring processes (including automated or manual processes), website design layout constraints, character limits, quality standards and other applicable policies, and that any such content may be rejected, in whole or in part, by the Company and/or a Publisher Partner at any time in its sole discretion, or modified at any time to comply with such policies, 3. the Company does not guarantee that any specific listing or content will be displayed on any Publisher Partner Site, 4. the appearance and/or location of any Window placement may change at any time, and 5. the availability and the quality of service associated with virtual phone numbers depends on the services provided by third-party technology provider partners and hence cannot be guaranteed over the entire duration. The Company shall have no liability for any change in the Publisher Partner Sites, for any decision by a Publisher Partner to reject or modify any content submitted by you, or for any other decision, change or other action described in clauses (A), (B), (C) or (D) above.",
    },
    {
      title:
        "Optional paid services offered by Publisher Partners or third party vendors:",
      desc: "For any additional services that the Company helps negotiate with Publisher Partners or third party vendors (e.g. services that help improve visibility for the Client’s business listings on Publisher Partner Site), you will directly enter into an agreement with the applicable Publisher Partner or third party vendor. Company may charge a commission for facilitating such services from Publisher Partner Sites and/or third party vendors. Company will not be involved beyond the sale of such services and are will not be liable for any issues associated with the usage of such services.",
    },
  ];
  const feesListData = [
    {
      title: "Fees: ",
      desc: "By registering for the Service, you agree to all fee and payment terms (associated with services summarized herein in Annexure A)that are quoted to Client by a Company’s sales representative and reflected in a receipt. Any Service fees mentioned are exclusive of all applicable taxes and levies. Additional telecom charges, such as SMS and call charges, may apply on actual basis if they exceed the default quotas.",
    },
    {
      title: "Payment Terms: ",
      desc: "All payments must be made in advance and payable at Bangalore in favor of Sekel Tech (India) Private Limited Any and all late payments shall accrue interest at the rate of one and one half percent (1.5%) per month. In addition, you are responsible for paying any reasonable expenses and all legal fees that we incur in connection with collecting late amounts.",
    },
    {
      title: "Renewal:",
      desc: "Unless terminated pursuant to Section 4, a fresh invoice for the next Billing Period will be sent to the Client 30 days prior to the end of the current Billing Period. Company reserves the right to revise pricing and Billing Period for its Service, and all such changes, when applicable, will be communicated as part of or along with the invoice to the Client.",
    },
  ];
  const serviceListData = [
    {
      title: "License:",
      desc: "The Company hereby grants the Client a limited, non-exclusive, non-transferable right and license to access and use the Service solely in connection with Client’s business needs. This license will terminate in the event this Agreement expires or is terminated pursuant to Section 4, in which case Client will immediately cease any further use of the Service.",
    },
    {
      title: "Ownership:",
      desc: "This is an Agreement for access to the Services, and, except with respect to the license set forth in Section 3.1 hereof, Client is not granted a license to any software by this Agreement. The Service is the copyrighted work of the Company and/or its various partners.The Company will be the sole owner of all right, title, and interest in and to the network, platform, Service, website code and any analytics or similar data or insights extracted or derived from their operation, including, without limitation, all intellectual property rights therein.",
    },
    {
      title: "Trademarks:",
      desc: "The trademarks, service marks, logos and any designs used or displayed on the Service are trademarks and/or service marks owned by the Company or its licensors. Nothing in this Agreement shall be construed as granting, by implication, estoppel, or otherwise, any license or right to use any of the Company’s trademarks displayed on the Service without the Company’s prior, written permission in each instance. The appearance of any third-party trademarks does not in any way imply any connection, license, approval or other such relationship of any kind with such third party.",
    },
    {
      title: "Usage Restrictions:",
      desc: "Client’s use of the Service is limited solely to those rights granted in Section 3.1. Client shall not copy, prepare derivative works, decompile or reverse engineer the Service. Client will not remove any trademark, copyright, or other proprietary rights notices which appears on the Service. In addition, Client will not use the Service for any unlawful, fraudulent, improper or abusive purpose or in any way, which interferes with the Company’s ability to provide the Service to other customers, prevents or restricts other clients from using the Services, or damages any of Company’s or other client’s property. Prohibited uses include, but are not limited to uses in connection with the following.Impersonating any person or entity, including pretending to be anyone, or any entity, you are not, including impersonating or misrepresenting yourself as another person (including a celebrity), entity, or a civic or government leader, or otherwise misrepresenting your affiliation with a person or entity.Creating a false identity or otherwise attempting to mislead others as to the identity of the sender or the origin of any communication made using the Service.Harvesting or collecting any personal information about others without their consent or in violation of applicable law.Behavior that is obscene, threatening, harassing, defamatory, libelous, deceptive, fraudulent, malicious, infringing, or invasive of another’s privacy.Sending unsolicited and/or bulk messages or advertisements, including voicemails or facsimiles.Unauthorized access to the Service, other accounts, or computer systems or networks connected to the Service, through password mining or any other means.Transmitting any material that may infringe the intellectual property rights or other rights of third parties.Violating any TRAI or other governmental regulations regarding the transmission of technical data through the Service.Violation or non-adherence to any extant laws of the land governing the business associated with this Agreement.",
    },
    {
      title: "License to Client Content: ",
      desc: "Client hereby grants Company a non-exclusive, worldwide, royalty-free, transferable, perpetual, irrevocable right and license to use, copy, publish, distribute, syndicate, reformat and update (for example, to standardize formats) any and all content that Client provides in connection with its use of the Service. Company may sublicense this right to any Publisher Partners and other online partners. This license will survive any termination or expiration of this Agreement.",
    },
    {
      title: "License to Client Marks:",
      desc: "Client hereby grants Company a non-exclusive, worldwide, paid-up, royalty-free, transferable (in the event of a sale or other change of control of Company’s business) right and license to use Client’s marks on any of Company’s websites or other marketing materials to indicate your participation in the Service. Company may sublicense this right to any of Publisher Partners and other online partners. In the event of any termination or expiration of this Agreement, Company will use commercially reasonable efforts to remove your marks from Company’s websites and marketing materials within a reasonable period of time, and to instruct Company’s online partners to do the same.",
    },
  ];
  const termListData = [
    {
      title: "Term:",
      desc: "This Agreement is effective as of the date you register for the Service and shall remain in full force and effect until terminated by either Party in accordance with this Section 4. The standard delivery period of the Service, except for call tracking for which the standard delivery period is 45 days, is 7 days from the date of acceptance of this Agreement or the receipt of all payments related to this Agreement, whichever is later.",
    },
    {
      title: "Termination by Client:",
      desc: "Client may terminate this Agreement at and disconnect the Service at any time for convenience upon prior notice of not less than 30 days, to the Company (which may be provided by email).",
    },
    {
      title: "Termination by Company: ",
      desc: "We may terminate this Agreement and disconnect your Service at any time for convenience at any time upon notice (which we may provide by email). Further, the Company may at any time, and without additional notice terminate, modify, suspend, disconnect, discontinue, or block access to some or all of the features of the Service if: 1. Company determines that Client use of the Service violates or has at any time violated this Agreement or any other applicable agreement. 2. Company determines that such action is necessary to maintain or improve the Service, to prevent fraud or misrepresentation by affirmative acts and/or omissions, to protect other Clients, users or third parties, or for any other good cause. 3. Company chooses to discontinue or modify the scope of its Service with due notices to all concerned. 4. For any other reason that the Company deems it necessary or advisable to restrict Client access to the Service, including but not limited to compliance with requests by law enforcement or other government agencies.",
    },
    {
      title: "Survival:",
      desc: "Upon any termination or expiration of this Agreement, Client will pay Company the Fees for each month that has commenced prior to the effective date of such termination or expiration. The following provisions shall survive any termination of this Agreement: Section 3.4 (“License to Client Content”), this Section 4.4 (“Survival”), Section 5 (“Disclaimer and Limitation of Liability”), Section 6 (“Indemnification”), Section 7 (“Representations and Warranties”) and Section 8 (“General Provisions”).",
    },
    {
      title: "Upon termination: ",
      desc: "Upon termination, the Company may immediately deactivate or delete all related accounts, information and files and/or revoke any further access to the Service and related accounts, information and files.",
    },
  ];
  const disclaimerListData = [
    {
      title: "Disclaimer:",
      desc: "The Service and any other services provided by the Company in connection with this Agreement are supplied on an “AS IS” and “AS AVAILABLE” basis. To the fullest extent under applicable law, Company makes no, and disclaims all, warranties (including, but not limited to, any implied warranties of merchantability, fitness for a particular purpose and non-infringement), guarantees, and representations, whether express, implied, oral or otherwise. Company and other websites, databases and/or third party programs contained within the Service may contain bugs, errors, problems and/or other limitations. Company has no liability, whatsoever, to you or any third party, for any other party’s security methods and privacy protection procedures and/or any party’s use of, or inability to use, Company websites, databases and/or programs. Company disclaims any and all warranties, express and implied, that any other party’s security methods, privacy protection procedures and/or any party’s use of Company’s website, databases and/or programs will be uninterrupted or error-free.",
    },
    {
      title: "Limitation of Liability:",
      desc: "1.  In no event shall Company or any Publisher Partner be responsible for any consequential, incidental, special, punitive, exemplary or indirect damages arising from or relating to this Agreement or otherwise, including, without limitation, lost revenue or profits, even if Company has been advised of the possibility of such damages. 2. The Company will not be liable or considered in breach of the Agreement, on account of a delay or failure to perform under the Agreement, as a result of causes or conditions that are beyond Company’s control. 3. In addition, and notwithstanding anything contained herein to the contrary, Company’s liability under any cause of action arising from or in connection with this Agreement or otherwise shall be limited to Rupees Ten Thousand (Rs. 10,000/-) only. To the extent any liability of Company cannot be disclaimed, excluded or limited under applicable law, such liability shall be disclaimed, excluded and limited to the fullest extent permitted under applicable law.",
    },
  ];
  const indeListData = [
    {
      title: "",
      desc: "Client will defend, indemnify, and hold harmless, Company, its third party licensors and Publisher Partners, and its affiliates, and each of its and their respective officers, directors, members, managers, employees, sub-licensees, contractors and agents (collectively, “Indemnified Parties”) from and against any and all claims, actions, losses, liability, damages, fines, costs, and expenses (including reasonable legal fees and expenses) arising from or related to: (a) any breach of the Agreement by you (including, but not limited to, any representations and warranties made herein); (b) any violation of any law or regulation arising from or in connection with your participation in the Service; (c) any allegation arising from or relating to any content provided by you, including, but not limited to, any allegation that any content provided by or on behalf of you infringes or otherwise violates any trademark, trade name, service mark, copyright, license, trade secret, right of privacy or publicity or other intellectual property or proprietary right of any third party, constitutes false advertising, is defamatory and/or is in violation of any law or regulation; (d) any claim by any third party related to you or your products or services; and/or (e) any third party dispute with you, any injury suffered by a third party at your place of business or any other related issue.",
    },
  ];
  const warrantyListData = [
    {
      title: "",
      desc: "Company warrants that it will use commercially reasonable efforts to maintain the Service operational 99.9% of the time, excluding downtime for maintenance, upgrades, repairs and emergency outages. You represent, warrant and covenant that at all times during the term of this Agreement: 1. the individual accepting this Agreement is authorized to act on behalf of you and to bind you to this Agreement; 2. you have the full power and authority to conduct your business, to enter into this Agreement, and to perform your obligations under this Agreement; 3. your execution, delivery and performance of this Agreement will not conflict with or violate: (i) any provision of law, rule or regulation to which you are subject; (ii) any order, judgment or decree applicable to you; (iii) any provision of your organizational documents; or (iv) any agreement or other instrument applicable to you; 4. you will comply with all applicable laws, rules, regulations, court orders, judgments and decrees, including without limitation those governing account collection, export control, consumer protection, unfair competition, anti-discrimination, securities laws, and false advertising; and 5. you will be solely liable for any communications or transmissions sent through the Service and that the Company has no control over the content of any transmission.",
    },
  ];
  const provisionListData = [
    {
      title: "Confidentiality:",
      desc: "Except as may be required by law and otherwise set forth in this Agreement, none of the Parties shall issue a publicity release or public announcement or otherwise make any disclosure concerning this Agreement, the transactions contemplated hereby, Confidential Information of the Company or any other information received from any other Party, without the prior written approval of the other Parties; provided, however, that nothing in this Agreement shall restrict the recipient of such information from disclosing information: 1.that is already publicly available; 2.that was already known to such recipient prior to its disclosure in connection with the transactions contemplated by this Agreement; 3. that may be required or appropriate in response to any litigation or potential litigation, provided that such recipient will use reasonable efforts to notify the provider of such information in advance of such disclosure so as to permit the provider of such information to seek a protective order or otherwise contest such disclosure, and such recipient will use reasonable efforts to cooperate, at the expense of such provider, with such provider in pursuing any such protective order; 4.to such recipient’s officers, directors, shareholders, advisors, employees, members, partners, controlling persons, auditors or counsel on a confidential basis; or 5. to Persons from whom releases, consents or approvals are required, or to whom notice is required to be provided, pursuant to the transactions contemplated by this Agreement. 6.If any announcement is required by law to be made by any Party, prior to making such an announcement, such Party will, where practicable, deliver a draft of such announcement to the other Parties and shall give the other parties reasonable opportunity to comment thereon.",
    },
    {
      title: "Notices:",
      desc: "All notices to Company shall be sent to the Company’s registered address, attention Director. Any notices to Client may be effected by sending an email to the email address specified in Client’s Inbox (as specified in Annexure B) or by posting a message to Client’s Inbox, and shall be deemed received when sent (for email) or twenty-four (24) hours after having been posted (for messages in Client’s Inbox).",
    },
    {
      title: "Policies:",
      desc: "Client’s participation in the Service shall be subject to all applicable Company policies including, without limitation, the Privacy Policies posted on any Web Site on which Client listings are published, and any applicable Web Site specification requirements (collectively, “Policies”). The Policies may be modified by Company at any time. The latest Policies can be found on any of Company’s websites. You should review the Policies regularly. By your continued participation in a Service, you agree to all of the associated terms and conditions contained within the Policies effective at that time.",
    },
    {
      title: "Force Majeure:",
      desc: "In the event that either Party is prevented from performing, or is unable to perform, any of its obligations under this Agreement due to any cause beyond the reasonable control of the Party invoking this provision, the affected Party’s performance shall be excused and the time for performance shall be extended for the period of delay or inability to perform due to such occurrence.",
    },
    {
      title: "Waiver:",
      desc: "The waiver by either Party of a breach or a default of any provision of this Agreement by the other Party shall not be construed as a waiver of any succeeding breach of the same or any other provision, nor shall any delay or omission on the part of either Party to exercise or avail itself of any right, power or privilege that it has, or may have hereunder, operate as a waiver of any right, power or privilege by such Party.",
    },
    {
      title: "Independent Contractors:",
      desc: "Nothing contained in this Agreement shall be deemed to imply or constitute either Party as the agent or representative of the other Party, or both Parties as joint ventures or partners for any purpose.",
    },
    {
      title: "Governing Law:",
      desc: "This Agreement shall be governed by, and construed in accordance with, the laws of India, and subject to the courts at Bangalore.",
    },
    {
      title: "Severability:",
      desc: "Nothing herein contained shall be construed so as to require the commission of any act contrary to law, and wherever there is any conflict between any provision of this Agreement and any present or future statute, law, ordinance or regulation, the latter shall prevail, but in such event, the provision of this Agreement affected shall be curtailed and limited only to the extent necessary to bring it within legal requirements.",
    },
    {
      title: "Entire Agreement:",
      desc: "This Agreement constitutes the entire Agreement between the Parties with regard to the subject matter hereof. Company may modify the terms of this Agreement at any time without liability as the Service evolves, and your use of the Service after notice that the terms of this Agreement have changed constitutes your acceptance of the new terms.",
    },
    {
      title: "Headings:",
      desc: "Captions and headings contained in this Agreement have been included for ease of reference and convenience and shall not be considered in interpreting or construing this Agreement.",
    },
    {
      title: "Costs, Expenses and Legal Fees:",
      desc: "If either Party commences any action or proceeding against the other Party to enforce or interpret this Agreement, the prevailing Party in such action or proceeding shall be entitled to recover from the other Party the actual costs, expenses and reasonable legal fees (including all related costs and expenses), incurred by such prevailing Party in connection with such action or proceeding and in connection with obtaining and enforcing any judgment or order thereby obtained. The Parties have carefully read all of the provisions of this Agreement and will fully and faithfully comply with such provisions.",
    },
  ];
  const annAListData = [
    {
      title: "",
      desc: "Summary of Subscribed Services & Payment Terms Billing period, payment terms and scope of deliverables, including number of business locations supported and number of virtual phone numbers by city, are as outlined in agreed commercial offer.",
    },
  ];
  const annBListData = [
    {
      title: "",
      desc: "Key Client Contacts Contact information of business and technical contacts as provided by the Client.",
    },
  ];
  return (
    <div className="font-mulish text-left mx-auto pt-8 lg:pt-20 pb-8 lg:pb-10">
      <div className="container">
        <div className="space-y-4 pb-4">
          <h2 className="text-2xl font-medium text-secondary">{`Last Updated: 19 November 2014`}</h2>
          <p className="text-xl text-secondary not-italic ">{` BEFORE YOU USE THIS WEBSITE OR ANY SERVICES AVAILABLE VIA THIS WEBSITE, CAREFULLY READ THE TERMS AND CONDITIONS OF THIS WEBSITE. BY ACCESSING THIS WEBSITE OR USING THE SERVICES, YOU AND THE BUSINESS ENTITY THAT YOU REPRESENT, IF APPLICABLE, ARE AGREEING TO BE BOUND BY THESE TERMS. YOU REPRESENT AND WARRANT THAT YOUR ACTIONS WILL ALSO BIND THE ENTITY YOU REPRESENT WHILE USING THIS WEBSITE OR ANY SERVICES PROVIDED THROUGH THIS WEBSITE. YOU HEREBY COVENANT TO ENSURE THAT ALL USERS THAT GAIN ACCESS TO THE WEBSITE AND/OR THE SERVICES FROM YOU ARE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO ALL OF THE TERMS OF THIS AGREEMENT, THEN DO NOT ACCESS AND/OR USE THE SERVICES.`}</p>
          <p className="text-xl text-secondary not-italic ">{` PLEASE READ THESE TERMS CAREFULLY. IF COMPANY UNDERTAKES ANY MODIFICATIONS TO THESE TERMS, WE WILL HIGHLIGHT THE SAME ON OUR HOMEPAGE AND FOR ANY MATERIAL CHANGE MADE WE WILL SEND YOU AN EMAIL NOTIFICATION OF THE SAME, SUBJECT TO YOUR ACCOUNT WITH US. TO CONTINUE USING THE SERVICE POST SUCH CHANGES OR MODIFICATIONS YOU WILL BE REQUIRED TO ACCEPT THIS TERMS OF SERVICE ONCE AGAIN BY CLICKING ON ‘ACCEPT/AGREE’ TAB.`}</p>
          <p className="text-xl text-secondary not-italic ">{` This Terms of Service Agreement (“Agreement”) is a legal agreement between you (together with the business entity, if any, that you represent, “Client” or “You”) and Sekel Tech (India) Private Limited, a company incorporated under the Companies Act 1956, with its registered office in Bangalore,(hereinafter referred to as “Company”, “us” or “we”).`}</p>
          <p className="text-xl text-secondary not-italic ">{` Company and Client where the context so permits shall hereinafter collectively be referred to as the “Parties”, and each a “Party” WHEREAS, The Parties agree to the following terms of service in connection with Sekel Tech Platform (the “Service”). This Agreement governs in its entirety the relationship between the Company and the Client in connection with the Service.`}</p>
        </div>
        <div className="space-y-4 pb-4">
          <ol className="text-xl space-y-6 text-secondary not-italic ">
            <h2 className="text-3xl font-medium text-secondary not-italic">{`Description of Service`}</h2>
            {descListData.map((item, index) => {
              return (
                <li key={item.title + index}>
                  <strong className="text-primary"> {item.title} </strong>
                  {item.desc}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="space-y-4 pb-4">
          <ol className="text-xl space-y-6 text-secondary not-italic ">
            <h2 className="text-3xl font-medium text-secondary not-italic">{`Fees and Payment`}</h2>
            {feesListData.map((item, index) => {
              return (
                <li key={item.title + index}>
                  <strong className="text-primary"> {item.title} </strong>
                  {item.desc}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="space-y-4 pb-4">
          <ol className="text-xl space-y-6 text-secondary not-italic ">
            <h2 className="text-3xl font-medium text-secondary not-italic">{`Use of Service`}</h2>
            {serviceListData.map((item, index) => {
              return (
                <li key={item.title + index}>
                  <strong className="text-primary"> {item.title} </strong>
                  {item.desc}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="space-y-4 pb-4">
          <ol className="text-xl space-y-6 text-secondary not-italic ">
            <h2 className="text-3xl font-medium text-secondary not-italic">{`Term and Termination`}</h2>
            {termListData.map((item, index) => {
              return (
                <li key={item.title + index}>
                  <strong className="text-primary"> {item.title} </strong>
                  {item.desc}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="space-y-4 pb-4">
          <ol className="text-xl space-y-6 text-secondary not-italic ">
            <h2 className="text-3xl font-medium text-secondary not-italic">{`Disclaimer and Limitation of Liability.`}</h2>
            {disclaimerListData.map((item, index) => {
              return (
                <li key={item.title + index}>
                  <strong className="text-primary"> {item.title} </strong>
                  {item.desc}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="space-y-4 pb-4">
          <ol className="text-xl space-y-6 text-secondary not-italic ">
            <h2 className="text-3xl font-medium text-secondary not-italic">{`Indemnification.`}</h2>
            {indeListData.map((item, index) => {
              return (
                <li key={item.title + index}>
                  <strong className="text-primary"> {item.title} </strong>
                  {item.desc}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="space-y-4 pb-4">
          <ol className="text-xl space-y-6 text-secondary not-italic ">
            <h2 className="text-3xl font-medium text-secondary not-italic">{`Representations and Warranties.`}</h2>
            {warrantyListData.map((item, index) => {
              return (
                <li key={item.title + index}>
                  <strong className="text-primary"> {item.title} </strong>
                  {item.desc}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="space-y-4 pb-4">
          <ol className="text-xl space-y-6 text-secondary not-italic ">
            <h2 className="text-3xl font-medium text-secondary not-italic">{`General Provisions.`}</h2>
            {provisionListData.map((item, index) => {
              return (
                <li key={item.title + index}>
                  <strong className="text-primary"> {item.title} </strong>
                  {item.desc}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="space-y-4 pb-4">
          <ol className="text-xl space-y-6 text-secondary not-italic ">
            <h2 className="text-3xl font-medium text-secondary not-italic">{`Annexure A`}</h2>
            {annAListData.map((item, index) => {
              return (
                <li key={item.title + index}>
                  <strong className="text-primary"> {item.title} </strong>
                  {item.desc}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="space-y-4 pb-4">
          <ol className="text-xl text-left space-y-6 text-secondary not-italic">
            <h2 className="text-3xl font-medium text-secondary not-italic">{`Annexure B`}</h2>
            {annBListData.map((item, index) => {
              return (
                <li key={item.title + index}>
                  <strong className="text-primary"> {item.title} </strong>
                  {item.desc}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default TermsConditions;
