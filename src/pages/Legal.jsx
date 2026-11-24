import React, { useState } from 'react';
import { Btn, Eyebrow, PageHero, useScrollTop } from '../components/Layout';

const terms = [
  ['1. Introduction and Acceptance', 'Campx Edutech Private Limited (“Campx”, “we”, “us”, or “our”) provides this website at campx.in, together with its sub-domains, blogs, landing pages, product pages, downloadable resources, demo-booking forms, event registration pages and careers portal (collectively, the “Website”). These Terms of Use govern your access to and use of the Website. By accessing or using the Website, you confirm that you have read, understood and agreed to be bound by these Terms and by our Privacy Policy. These Terms constitute an electronic record under the Information Technology Act, 2000 and do not require any physical or digital signature.'],
  ['2. Scope and Applicability', 'These Terms apply solely to your use of the Website. They do not govern use of the Campx Platform, which is governed by the master subscription agreement, order form and data-processing addendum executed between Campx and the institution; use of Campx mobile applications, governed by in-app terms; or third-party services linked from the Website, which are governed by their own terms.'],
  ['3. About Campx', 'Campx Edutech Private Limited is a company incorporated under the Companies Act, 2013, with its registered office at 03, Level 3, The District, My Scape Road, Nanakramguda, Financial District, Hyderabad, Telangana 500032, India. Campx builds and operates a campus-management platform used by higher-education institutions across India and select international markets.'],
  ['4. Definitions', '“Applicable Law” means all statutes, rules, regulations, guidelines and orders applicable to the Website. “Content” means all text, images, graphics, video, code, documents, white papers, case studies, blog posts, trademarks and logos made available on the Website. “User” means any individual who accesses the Website. “User Submission” means any information or material you submit through demo requests, contact forms, event registrations, newsletter sign-ups, support enquiries, the careers portal, or chat and feedback widgets.'],
  ['5. Eligibility', 'You may use the Website only if you are at least eighteen (18) years of age and are competent to enter into a binding contract under the Indian Contract Act, 1872. If you access the Website on behalf of an organisation, you represent that you are duly authorised to bind that organisation to these Terms. The Website is intended for a general professional audience and is not directed at children.'],
  ['6. Permitted Use of the Website', 'Subject to your compliance, Campx grants you a limited, non-exclusive, non-transferable, revocable right to access and view the Website for lawful, personal, internal business or evaluation purposes. You may browse and bookmark public pages; download, print or share publicly designated materials such as brochures and white papers in unmodified form with notices preserved; submit enquiries through designated forms; and subscribe to newsletters using a valid email address you are authorised to use. All rights not expressly granted are reserved.'],
  ['7. Account Registration', 'Where a feature requires you to provide identifying information, you agree to provide accurate, current and complete information, maintain and update it, keep credentials confidential, and notify us promptly at business@campx.in of any unauthorised access. You are responsible for all activities that occur under your account.'],
  ['8. Prohibited Use', 'You agree not to use the Website in any manner that violates Applicable Law, including the Information Technology Act, 2000 and the Intermediary Rules, 2021; infringes intellectual-property rights; is defamatory, obscene, harassing or objectionable; harms minors; deceives or misleads others; transmits malware or interferes with the Website; attempts unauthorised access; or uses the Website to send unsolicited promotional messages.'],
  ['9. Intellectual Property Rights', 'All Content on the Website, including design, layout, text, graphics, logos and software, is owned by Campx or its licensors and is protected by Indian and international intellectual-property laws. No right to use any trademark, logo or content is granted except as expressly set out in these Terms.'],
  ['10. User Submissions', 'By submitting information through the Website, you grant Campx a non-exclusive, worldwide, royalty-free licence to use such submissions to respond to your enquiry, provide requested resources, improve the Website and comply with law. You represent that you have the right to submit such information and that it does not infringe any third-party rights.'],
  ['11. Third-Party Links, Content and Services', 'The Website may contain links to third-party websites, tools and services. These links are provided for convenience only. Campx does not endorse and is not responsible for the content, privacy practices or availability of third-party services. Your use of them is at your own risk and subject to their terms.'],
  ['12. Demo Requests, Sales Enquiries and Marketing Communications', 'If you submit a demo request or sales enquiry, we may contact you using the details you provide to discuss your requirements. Where you have consented to marketing communications, you may withdraw consent at any time by using the unsubscribe link in any message or by writing to business@campx.in. Withdrawal does not affect communications necessary to perform a contract or comply with law.'],
  ['13. Cookies and Analytics', 'The Website uses strictly necessary cookies for authentication, security and session management, and, with your consent, functional, analytics and marketing cookies. You can manage your preferences at any time using Cookie Settings in the footer. Inside the Platform, session data is used only to deliver the service to the institution and its users.'],
  ['14. Privacy and Personal Data', 'Our handling of personal data is described in the Privacy Policy, which is incorporated into these Terms by reference. Where an institution onboards onto the Platform, Campx acts as a Data Processor on the institution’s instructions, and the institution acts as the Data Fiduciary.'],
  ['15. Disclaimer of Warranties', 'The Website is provided on an “as is” and “as available” basis. While we take reasonable care to ensure accuracy, Campx does not warrant that the Website will be uninterrupted, error-free or completely secure, or that information on it is suitable for any particular purpose. Product information on the Website is for general guidance and does not form part of any contractual offer.'],
  ['16. Limitation of Liability', 'To the maximum extent permitted by law, Campx and its officers, employees and affiliates shall not be liable for any indirect, incidental, special or consequential damages, or for loss of profits, data or business, arising out of your use of or inability to use the Website. Nothing in these Terms limits liability that cannot lawfully be limited.'],
  ['17. Indemnification', 'You agree to indemnify and hold harmless Campx from any claims, losses, damages, liabilities and expenses arising out of your breach of these Terms, your violation of Applicable Law, or your submission of content that infringes third-party rights.'],
  ['18. Intermediary Status and Grievance Mechanism', 'For the limited purpose of hosting information provided by users on the Website, Campx may act as an intermediary under the Information Technology Act, 2000 and the Intermediary Rules, 2021. Grievances regarding Website content may be sent to our Grievance Officer at business@campx.in with the subject “Grievance — Website”. We will acknowledge and address grievances in accordance with applicable law.'],
  ['19. Suspension and Termination', 'We may suspend or terminate your access to the Website, in whole or in part, immediately and without notice if we reasonably believe you have breached these Terms, posed a risk to the Website or its users, or where required by law. Provisions that by their nature should survive termination shall survive.'],
  ['20. Modifications', 'We may update the Website and these Terms from time to time to reflect changes in our practices, technology or legal obligations. The current version will always be posted on this page with a “Last updated” date. Your continued use of the Website after changes take effect constitutes acceptance of the revised Terms.'],
  ['21. Force Majeure', 'Campx shall not be liable for any failure or delay in performing obligations under these Terms due to events beyond its reasonable control, including natural disasters, war, civil unrest, government action, internet or power failures, and widespread service-provider outages.'],
  ['22. Governing Law and Jurisdiction', 'These Terms are governed by the laws of India, without regard to conflict-of-laws principles. Subject to any mandatory provisions of law, the courts at Hyderabad, Telangana, shall have exclusive jurisdiction over any dispute arising out of or relating to these Terms.'],
  ['23. Notices', 'Notices under these Terms may be sent to business@campx.in or to the registered office address above. Notices to you may be sent to the email address you provide, or by posting on the Website. Notices are deemed received on transmission, or on the next business day where sent outside business hours.'],
  ['24. General', 'If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall continue in full force. A failure to enforce any right is not a waiver of that right. You may not assign these Terms without our prior written consent; Campx may assign them in connection with a merger, acquisition or sale of assets.'],
  ['25. Grievance Officer and Contact', 'Grievance Officer: Campx Edutech Private Limited, 03, Level 3, The District, My Scape Road, Nanakramguda, Financial District, Hyderabad, Telangana 500032, India. Email: business@campx.in. Sales: +91 97000 23336. Support: +91 63036 23950.'],
];

const privacy = [
  ['1. Introduction', 'Campx Edutech Private Limited (“Campx”) is committed to protecting the privacy and personal data of every individual who interacts with our website, cloud-based campus management platform and mobile applications (collectively, the “Services”). This Policy describes the categories of personal data we collect, the purposes for which we process it, the persons with whom we share it, and the rights available to you as a Data Principal. It is published in compliance with the Digital Personal Data Protection Act, 2023 and the SPDI Rules, 2011, and the Intermediary Rules, 2021 to the extent applicable.'],
  ['2. Scope and Applicability', 'This Policy applies to personal data processed through the Website (campx.in and sub-domains), the Platform (used by institutions for admissions, learning, examinations, fees, hostel, transport, HR & payroll and alumni engagement), and the Campx Student and Faculty mobile applications. It does not apply to third-party websites or services linked from our Services.'],
  ['3. Roles: Data Fiduciary and Data Processor', 'Where you visit our website, request a demo, subscribe to marketing communications or apply for employment, Campx determines the purpose and means of processing and is the Data Fiduciary. Where an educational institution onboards onto the Platform and uploads personal data of its applicants, students, parents, faculty or staff, the Institution is the Data Fiduciary and Campx processes that data on its instructions under a written contract. In such cases, direct your rights requests to the Institution first.'],
  ['4. Definitions', '“Personal Data” means any data about an individual identifiable by or in relation to such data. “SPDI” means categories specified under Rule 3 of the SPDI Rules, including financial, health and biometric information. “Data Principal” means the individual to whom the data relates. “Child” means an individual who has not completed eighteen years of age. “Processing” includes collection, storage, use, disclosure, alteration and erasure.'],
  ['5. Categories of Personal Data We Collect', 'Information you provide: identity and contact data (name, designation, institution, work email, phone, address, country); account credentials (user ID, salted-hashed password, MFA tokens); demo and sales enquiry data; and recruitment data including CV and work history. Information processed for an Institution: applicant and admissions records, academic and learning data, examination data, fee and scholarship records, hostel and transport allocations, HR & payroll data, and communications logs. Card numbers, CVVs and net-banking credentials are never stored by Campx. We also collect device and technical data, usage data, cookies, and approximate location from IP; precise GPS is processed only with explicit permission.'],
  ['6. Purposes of Processing', 'We process Personal Data for service delivery and authentication; customer support; sales and marketing based on consent; analytics and product improvement; security and fraud prevention; legal and regulatory compliance; and recruitment. We rely on consent or another lawful ground under the DPDP Act such as performance of a contract, compliance with law or a legitimate use specified in the Act. For SPDI under the SPDI Rules, we obtain prior written or electronic consent.'],
  ['7. Children’s Personal Data', 'Some applicants and students using the Platform may be Children. We do not knowingly process the Personal Data of a Child without verifiable consent of a parent or lawful guardian. We do not undertake tracking, behavioural monitoring or targeted advertising directed at Children. Institutions are responsible for obtaining requisite parental consent and furnishing records on request. If we become aware of unconsented collection, we erase it without undue delay.'],
  ['8. Disclosure to Third Parties', 'We do not sell Personal Data. We disclose it only to sub-processors under written confidentiality contracts: cloud hosting and infrastructure (AWS, Azure, Google Cloud); PCI-DSS-compliant payment gateways (such as Razorpay and Cashfree); communications providers (such as MSG91, Twilio and AWS SES); website analytics and session-replay tools (Google and Microsoft Clarity). We may also disclose data to affiliates, professional advisors, authorities and courts where required, and to parties to a corporate transaction who agree to honour this Policy.'],
  ['9. Cookies and Similar Technologies', 'Strictly necessary cookies support authentication, security, session management and load balancing and cannot be disabled. Functional cookies remember preferences. Analytics cookies help us understand aggregated usage, including session-replay on the public website. Marketing cookies measure campaign effectiveness on the website only. You can manage non-essential cookies through Cookie Settings in the footer.'],
  ['10. Cross-border Transfers', 'Some sub-processors may process Personal Data outside India. Where this occurs, we use contractual and organisational safeguards designed to ensure a level of protection consistent with this Policy and applicable law, including confidentiality obligations and reasonable security practices.'],
  ['11. Storage, Retention and Erasure', 'Personal Data is retained only for as long as necessary to fulfil the purposes described in this Policy, to comply with legal obligations, resolve disputes and enforce agreements. Retention for data processed on behalf of an Institution follows the Institution’s instructions and record-retention requirements. When data is no longer required, it is deleted or anonymised using secure methods, subject to backup cycles and legal holds.'],
  ['12. Rights of Data Principals', 'Subject to applicable law, you may request access to your Personal Data, correction of inaccurate data, erasure where retention is no longer necessary, nomination of another individual to exercise rights in the event of death or incapacity, and redressal of grievances. You may also withdraw consent at any time where processing is based on consent. To exercise rights, write to our Grievance Officer at business@campx.in. Where data is processed for an Institution, direct your request to that Institution first.'],
  ['13. Security Practices', 'We implement reasonable security practices and procedures appropriate to the nature of the data, including encryption in transit and at rest, role-based access controls, least-privilege access, logging and monitoring, secure development practices, vulnerability management, periodic assessments, personnel confidentiality obligations and incident-response processes. Campx is ISO/IEC 27001:2022 certified for the design, development, deployment, hosting and maintenance of the platform.'],
  ['14. Automated Decision-Making and AI Features', 'Campx uses AI features, including Medha, to assist users with retrieval, drafting, analysis and workflow tasks. AI outputs are intended to support — not replace — human judgement in academic and administrative decisions. Every AI interaction inherits the user’s permissions and is logged for auditability. We do not use Institution or student records for behavioural advertising, and model providers are engaged under contractual restrictions on data use.'],
  ['15. Changes to this Policy', 'We may update this Policy to reflect changes in our practices, technology or legal obligations. The current version is posted on this page with an effective date and version number. Where changes are material, we will take reasonable steps to notify affected users.'],
  ['16. Grievance Officer and Contact', 'Grievance Officer: Campx Edutech Private Limited, 03, Level 3, The District, My Scape Road, Nanakramguda, Financial District, Hyderabad, Telangana 500032, India. Email: business@campx.in. We aim to acknowledge grievances promptly and resolve them in accordance with applicable law.'],
  ['17. Governing Law and Jurisdiction', 'This Policy is governed by the laws of India. Subject to mandatory provisions of law, the courts at Hyderabad, Telangana, shall have exclusive jurisdiction over disputes arising out of this Policy.'],
  ['Annexure A: Sub-processors', 'Material categories of sub-processors include cloud infrastructure and hosting providers, PCI-DSS-compliant payment gateways, SMS/email/voice notification providers, analytics and session-replay providers, and support and back-office service providers. A current list of named sub-processors can be obtained by writing to business@campx.in.'],
];

function LegalPage({ eyebrow, title, sub, effective, updated, version, sections }) {
  useScrollTop(title);
  const [active, setActive] = useState(0);
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} sub={sub}>
        <div className="legal-meta">
          <div><span>Effective</span><strong>{effective}</strong></div>
          <div><span>Last updated</span><strong>{updated}</strong></div>
          <div><span>Version</span><strong>{version}</strong></div>
        </div>
      </PageHero>
      <section className="section legal-section">
        <div className="container">
          <div className="legal-layout">
            <aside className="legal-toc">
              <Eyebrow>On this page</Eyebrow>
              <ol>{sections.map(([h], i) => <li key={h}><button className={active === i ? 'on' : ''} onClick={() => { setActive(i); document.getElementById('legal-' + i)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>{h}</button></li>)}</ol>
            </aside>
            <div className="legal-content">
              {sections.map(([h, p], i) => <article key={h} id={'legal-' + i} className="legal-block"><h2>{h}</h2><p>{p}</p></article>)}
              <div className="panel legal-contact">
                <h3>Questions about this policy?</h3>
                <p>Write to our Grievance Officer at <a href="mailto:business@campx.in">business@campx.in</a>, or call us on <a href="tel:+919700023336">+91 97000 23336</a>.</p>
                <Btn to="/contact" variant="outline">Contact Campx</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  return <LegalPage eyebrow="Legal · Campx Edutech Private Limited" title="Terms of Use" sub="The agreement governing your access to and use of campx.in and its sub-domains, published in compliance with the Information Technology Act, 2000 and the Intermediary Rules, 2021." effective="03 May 2026" updated="03 May 2026" version="2.0" sections={terms} />;
}

export function PrivacyPolicy() {
  return <LegalPage eyebrow="Legal · Campx Edutech Private Limited" title="Privacy Policy" sub="How we collect, use, share, and protect personal data, published in compliance with the Digital Personal Data Protection Act, 2023 and the SPDI Rules, 2011." effective="02 May 2026" updated="02 May 2026" version="2.0" sections={privacy} />;
}

export function ShippingPolicy() {
  useScrollTop('shipping');
  return (
    <>
      <PageHero eyebrow="Legal" title="Shipping Policy" sub="Campx is a software-as-a-service product; no physical goods are shipped. Access to the platform is provisioned electronically once an agreement is in place." />
      <section className="section">
        <div className="container">
          <div className="panel legal-simple">
            <h2>Digital delivery, not physical shipping</h2>
            <p>Campx is a software-as-a-service product; no physical goods are shipped. Access to the platform is provisioned electronically once an agreement is in place. For onboarding timelines and rollout details, please contact <a href="mailto:business@campx.in">business@campx.in</a>.</p>
            <h3>How access is provisioned</h3>
            <p>Following signature of a master subscription agreement and order form, a dedicated tenant instance is configured, administrators are onboarded, data migration is planned, and training is scheduled. Credentials are issued securely to nominated institution administrators. Implementation timelines are agreed in writing and depend on the scope of systems and the readiness of institutional data.</p>
            <h3>Contact</h3>
            <p>Campx Edutech Private Limited, 03, Level 3, The District, My Scape Road, Nanakramguda, Financial District, Hyderabad 500032, Telangana, India. Sales: <a href="tel:+919700023336">+91 97000 23336</a>. Support: <a href="tel:+916303623950">+91 63036 23950</a>.</p>
            <Btn to="/contact" variant="coral">Ask about onboarding</Btn>
          </div>
        </div>
      </section>
    </>
  );
}
