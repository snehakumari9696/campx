import React,{useEffect,useRef,useState} from 'react';import {Link} from 'react-router-dom';import {ArrowRight,ArrowUpRight,Award,Building2,Check,ExternalLink,Globe,Mail,MapPin,Phone,ShieldCheck,Sparkles,X} from 'lucide-react';import {Btn,CTA,Eyebrow,PageHero,TextLink,CheckList} from '../components/Layout';import {beliefs,blueprintTiles,logos,people} from '../data/site';
const aboutFounders = [{"name": "Venkat Yellapragada", "role": "Co-founder & CEO", "desc": "Venkat leads Campx's vision and product, shaping a single AI-first infrastructure that unites every function of a campus. He set the direction the company runs on, and keeps steering it toward more intelligent, context-aware systems.", "img": "/founders/venkat.jpeg", "href": "https://www.linkedin.com/in/yellapragadavenkat/"}, {"name": "Srikanth Yellapragada", "role": "Co-founder & CTO", "desc": "Srikanth is the chief architect of the Campx ecosystem, leading the engineers who build it. With over a decade of building systems at scale, he is shaping the agentic AI that now runs across the platform.", "img": "/founders/srikanth.jpeg", "href": "https://www.linkedin.com/in/srikanth-yellapragada/"}, {"name": "Ketansrisai Kondabathula", "role": "Chief Business Officer", "desc": "Ketansrisai leads Sales, Marketing, and Partnerships, consulting with colleges rather than selling to them. He builds the relationships and the go-to-market that help each institution scale with its own ambition.", "img": "/founders/ketan.png", "href": "https://www.linkedin.com/in/ketansrisai-kondabathula/"}];
const aboutBeliefs = [{"num": "01", "title": "Institutions first", "desc": "Every decision starts with the people running campuses.", "paths": "<path d=\"M3 21h18\"></path><path d=\"M5 21V9l7-6 7 6v12\"></path><rect height=\"7\" width=\"6\" x=\"9\" y=\"14\"></rect><path d=\"M9 9h.01M12 9h.01M15 9h.01\"></path><path d=\"M12 3v2\"></path>"}, {"num": "02", "title": "AI woven in, not bolted on", "desc": "Intelligence belongs inside the system of record, not as a chatbot sitting on top of it.", "paths": "<path d=\"M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z\"></path><path d=\"M5 17l.75 2.25L8 20l-2.25.75L5 23l-.75-2.25L2 20l2.25-.75L5 17z\"></path><path d=\"M19 2l.6 1.8L21.4 4.4l-1.8.6L19 7l-.6-1.8L16.6 4.4l1.8-.6L19 2z\"></path>"}, {"num": "03", "title": "Ship in weeks, not years", "desc": "Momentum compounds, so we move fast and stay reliable.", "paths": "<path d=\"M9.5 20.5C9.5 20.5 8 19 8 16c0-1 .5-2 1-3\"></path><path d=\"M14.5 20.5C14.5 20.5 16 19 16 16c0-1-.5-2-1-3\"></path><path d=\"M12 2C12 2 6 6 6 13h12C18 6 12 2 12 2z\"></path><path d=\"M8 13v3h8v-3\"></path><circle cx=\"12\" cy=\"9\" r=\"1.5\"></circle>"}, {"num": "04", "title": "Trust by design", "desc": "Security, privacy, and compliance are foundations, not features.", "paths": "<path d=\"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z\"></path><polyline points=\"9 12 11 14 15 10\"></polyline>"}, {"num": "05", "title": "Built for India", "desc": "NEP 2020, DPDPA, and the realities of Indian higher education shape what we build.", "paths": "<path d=\"M12 21C12 21 5 13.5 5 8.5a7 7 0 0 1 14 0C19 13.5 12 21 12 21z\"></path><circle cx=\"12\" cy=\"8.5\" r=\"2.5\"></circle>"}, {"num": "06", "title": "Simplicity is the point", "desc": "The x in Campx: we make the complex feel effortless, and the more we grow, the simpler we get.", "paths": "<circle cx=\"12\" cy=\"12\" r=\"9\"></circle><circle cx=\"12\" cy=\"12\" r=\"5\"></circle><circle cx=\"12\" cy=\"12\" r=\"1.5\"></circle>"}];
const aboutAdvisors = [{"name": "Dr. Ram K Sharma", "role": "Chancellor, UPES", "img": "/Advisors/ram-k-sharma.jpeg", "href": "https://www.linkedin.com/in/ramksharma/"}, {"name": "Rama Krishna Reddy", "role": "CEO, Gaudium School", "img": "/Advisors/rama-krishna-reddy.jpg", "href": "https://www.linkedin.com/in/rama-lingireddy-1b00b33/"}, {"name": "Sumanth Palepu", "role": "CEO, The Funnel Story", "img": "/Advisors/sumanth-palepu.jpeg", "href": "https://www.linkedin.com/in/sumanthpalepu/"}];
const aboutTeam = [{"name": "Shashank Preetham", "role": "Head of Product Design", "href": "https://www.linkedin.com/in/shashank-preetham-4b03b2176/"}, {"name": "Dr. Bala Nagendra Prasad", "role": "Head of Product Development", "href": "https://www.linkedin.com/in/bbnprasad/"}, {"name": "Deepak Kumar Dontula", "role": "Head of Finance", "href": "https://www.linkedin.com/in/ca-deepak-kumar-dontula-aa104658/"}, {"name": "Vamsi Krishna Voleti", "role": "VP, Institutional Partnerships", "href": "https://www.linkedin.com/in/voleti-vamsi-krishna-68a6a81b3/"}, {"name": "Jagdish Chalasani", "role": "VP, Institutional Partnerships", "href": "https://www.linkedin.com/in/jagadeeswara-rao-chalasani-63768646"}, {"name": "Manasa Krishna", "role": "Marketing Manager", "href": "https://www.linkedin.com/in/manasa-krishna-gajjala-3846991b6/"}, {"name": "Siva Ram Sandeep", "role": "Team Lead", "href": "https://www.linkedin.com/in/siva-ram-sandeep/"}, {"name": "Vineeth Pejathaya", "role": "Pod Lead, Examinations", "href": "https://www.linkedin.com/in/vineethpejathaya/"}, {"name": "Gowtham Manda", "role": "Pod Lead, Finance", "href": "https://www.linkedin.com/in/gowthammandla/"}, {"name": "Sri Ranganadh", "role": "Pod Lead, Academics", "href": "https://www.linkedin.com/in/sri-ranganadh/"}, {"name": "Gowtham Kurella", "role": "Pod Lead, People", "href": "https://www.linkedin.com/in/gowtham-kurella-390ba627b/"}, {"name": "Sai Kiran Nampally", "role": "Pod Lead, AI Development", "href": "https://www.linkedin.com/in/nampally-sai-kiran-varma/"}];
const aboutLogos = [{"alt": "UPES Online", "src": "/logos/upes-online.webp"}, {"alt": "IILM University", "src": "/logos/IILM_LOGO.webp"}, {"alt": "Graphic Era Institute of Medical Sciences", "src": "/logos/GEIMS.webp"}, {"alt": "CGU Odisha", "src": "/logos/C._V._Raman_Global_University_Logo.webp"}, {"alt": "Anurag University", "src": "/logos/Anurag.svg"}, {"alt": "Annamacharya University", "src": "/logos/Annamacharya-University-Logo.webp"}, {"alt": "Mayadevi University", "src": "/logos/Mayadevi_logo.webp"}, {"alt": "GMRIT", "src": "/logos/GMRIT_Logo.webp"}, {"alt": "Siddhartha Academy of Higher Education", "src": "/logos/SAHE.webp"}, {"alt": "GGU", "src": "/logos/GGU.svg"}, {"alt": "Guru Nanak Institutions", "src": "/logos/Guru Nanak.svg"}, {"alt": "MVGR College of Engineering", "src": "/logos/mvgr-logo.webp"}, {"alt": "CBIT", "src": "/logos/CBIT-LOGO.png"}, {"alt": "MGIT", "src": "/logos/MGIT-logo.webp"}, {"alt": "MVSR Engineering College", "src": "/logos/MVSR.webp"}, {"alt": "JBIET", "src": "/logos/jbit_logo.webp"}, {"alt": "SV Colleges, Tirupati", "src": "/logos/sv-colleges-logo-dark.webp"}, {"alt": "SVCET, Chittoor", "src": "/logos/SVCET.webp"}, {"alt": "St. Martin's", "src": "/logos/st_martins.webp"}, {"alt": "St. Peter's", "src": "/logos/St-peters.webp"}, {"alt": "Vaagdevi", "src": "/logos/vaagdevi-logo.webp"}, {"alt": "Narasaraopeta", "src": "/logos/Nec.webp"}, {"alt": "VJIT", "src": "/logos/vjit-logo.webp"}, {"alt": "Global Academy of Technology", "src": "/logos/gat-logo.webp"}, {"alt": "Lamrin Tech Skills University", "src": "/logos/ltsu-logo.webp"}, {"alt": "Adichunchanagiri University", "src": "/logos/acu-logo.webp"}, {"alt": "Dhanalakshmi Srinivasan College of Engineering", "src": "/logos/dsce-logo.webp"}, {"alt": "Dr. K.V. Subba Reddy Institute of Technology", "src": "/logos/kvsubba-logo.webp"}, {"alt": "PBRVITS", "src": "/logos/pbrvits-logo.webp"}];
const aboutPartners = [{"alt": "GrayQuest", "src": "/Partnerships/Greyquest.png"}, {"alt": "Easebuzz", "src": "/Partnerships/Easebuzz.png"}, {"alt": "Winnify", "src": "/Partnerships/Winnify.png"}, {"alt": "AcademInk", "src": "/Partnerships/AcademInk.png"}, {"alt": "Drillbit", "src": "/Partnerships/drillbit-logo.webp"}, {"alt": "Truscholar", "src": "/Partnerships/truscholar.svg"}, {"alt": "Area 51", "src": "/Partnerships/Area51.png"}, {"alt": "Funnel Story", "src": "/Partnerships/TFS_Black.png"}];
export function About(){
  const [videoOpen,setVideoOpen]=useState(false);
  useEffect(()=>{
    const previousTitle=document.title;
    document.title='About Campx | AI-first Infrastructure for Education';
    const nodes=[...document.querySelectorAll('.about-page .ab-reveal')];
    const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('ab-in');io.unobserve(entry.target)}}),{threshold:.12});
    nodes.forEach(node=>io.observe(node));
    return ()=>{document.title=previousTitle;io.disconnect()};
  },[]);
  return <div className="about-page">
    <section className="ab-hero">
      <div className="ab-grid-bg" aria-hidden="true"/><div className="ab-blob ab-blob-coral" aria-hidden="true"/><div className="ab-blob ab-blob-indigo" aria-hidden="true"/>
      <div className="ab-wrap ab-hero-inner">
        <p className="ab-eyebrow">OUR STORY</p>
        <h1>The AI-first <span>Infrastructure</span> Behind Indian Education.</h1>
        <p className="ab-hero-sub">Campx is the AI-first infrastructure for Indian education. One platform unites academics, finance, operations, and enrollment on a single source of truth, carrying every student from first enquiry to alumnus, with Medha, our AI, working across all of it.</p>
        <div className="ab-hero-actions"><Link to="/book-demo" data-cta-location="about_hero">Book a demo</Link><Link className="ab-text-link" to="/platform">Explore the platform <span aria-hidden="true">→</span></Link></div>
      </div>
    </section>
    <section className="ab-section">
      <div className="ab-wrap">
        <div className="ab-reveal"><p className="ab-eyebrow">FOUNDER’S NOTE</p><h2 className="ab-section-title">Building the base for Indian education.</h2></div>
        <div className="ab-reveal ab-video-wrap">
          <div className="ab-video">
            <button type="button" aria-label="Play video: Founder's Note: Building the Base for Indian Education" onClick={()=>setVideoOpen(true)}>
              <img src="/founders/founder-note.jpg" alt=""/>
              <span className="ab-video-shade"><span className="ab-play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg></span></span>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="ab-section">
      <div className="ab-wrap">
        <div className="ab-reveal"><h2 className="ab-section-title">Our Founders</h2></div>
        <div className="ab-founder-grid">
          {aboutFounders.map(f=><div className="ab-reveal" key={f.name}><article className="ab-founder-card">
            <div className="ab-founder-photo"><img src={f.img} alt={f.name} loading="lazy"/></div>
            <p><a href={f.href} target="_blank" rel="noopener noreferrer">{f.name}</a></p><p className="ab-role">{f.role}</p><p className="ab-bio">{f.desc}</p>
          </article></div>)}
        </div>
      </div>
    </section>
    <section className="ab-section ab-white">
      <div className="ab-wrap">
        <div className="ab-reveal"><h2 className="ab-section-title">What We Believe</h2></div>
        <div className="ab-belief-grid">
          {aboutBeliefs.map(b=><div className="ab-reveal" key={b.num}><article className="ab-belief-card">
            <div className="ab-belief-top"><span className="ab-belief-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{__html:b.paths}}/></span><span className="ab-belief-num">{b.num}</span></div>
            <h3>{b.title}</h3><p>{b.desc}</p>
          </article></div>)}
        </div>
      </div>
    </section>
    <section className="ab-section">
      <div className="ab-wrap">
        <div className="ab-reveal"><h2 className="ab-section-title">Our Advisors</h2></div>
        <div className="ab-advisor-grid">
          {aboutAdvisors.map(a=><div className="ab-reveal" key={a.name}><a href={a.href} target="_blank" rel="noopener noreferrer" className="ab-advisor-card">
            <div className="ab-advisor-photo"><img src={a.img} alt={a.name} loading="lazy"/></div><p>{a.name}</p><p className="ab-small-role">{a.role}</p>
          </a></div>)}
        </div>
      </div>
    </section>
    <section className="ab-section">
      <div className="ab-wrap">
        <div className="ab-reveal"><h2 className="ab-section-title">Our Team</h2></div>
        <div className="ab-team-grid">
          {aboutTeam.map(t=><div className="ab-reveal" key={t.name}><a href={t.href} target="_blank" rel="noopener noreferrer" className="ab-team-card"><p>{t.name}</p><p>{t.role}</p></a></div>)}
        </div>
      </div>
    </section>
    <section className="ab-section ab-white ab-center">
      <div className="ab-wrap">
        <div className="ab-reveal"><p className="ab-eyebrow ab-eyebrow-sm">Certifications</p><h2 className="ab-section-title">Certified to the standards that matter.</h2></div>
        <div className="ab-cert-copy ab-reveal"><p><strong>ISO 27001:2022 certified</strong>, on path to DPDPA, and SOC 2-ready. Built on security institutions and auditors can trust.</p><p><strong>1EdTech Certified with LTI Advantage Complete</strong>, so Campx plugs into any compliant LMS (Moodle, Canvas, Google Classroom) with SSO and auto-syncing rosters and grades. No custom build.</p></div>
        <div className="ab-reveal"><div className="ab-cert-grid">
          <div><div className="ab-cert-logo"><img src="/Compliance/ISO-1024x1024.png" alt="ISO 27001:2022 Certified" loading="lazy"/></div><p>ISO 27001:2022 Certified</p></div>
          <div><div className="ab-cert-logo"><img src="/Compliance/1edtech_trusted-apps-certified.svg" alt="1EdTech Certified, LTI Advantage Complete" loading="lazy"/></div><p>1EdTech · LTI Advantage Complete</p></div>
        </div></div>
      </div>
    </section>
    <section className="ab-section">
      <div className="ab-wrap">
        <div className="ab-reveal"><div className="ab-google-card">
          <div aria-hidden="true" className="ab-google-glow"/>
          <div className="ab-google-grid">
            <div>
              <p className="ab-google-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>Google Cloud Partner</p>
              <h2>We’re an official Google Cloud Partner.</h2>
              <p className="ab-google-copy">Campx is now part of the Google Cloud partner ecosystem, across Google Cloud and Google Workspace. Combining our deep higher-education expertise with Google Cloud’s AI capabilities, Campx will help turn every campus into an AI-native campus.</p>
              <p className="ab-google-lead">Ready to accelerate your campus’s digital journey?</p>
              <div className="ab-google-actions"><Link to="/book-demo" data-cta-location="about_google_cloud">Let’s connect <ArrowRight size={16}/></Link><Link to="/xpress/articles/campx-google-cloud-partner">Read the announcement</Link></div>
            </div>
            <div className="ab-google-logo"><img src="/Compliance/google-cloud-logo.svg" alt="Google Cloud" loading="lazy"/></div>
          </div>
        </div></div>
      </div>
    </section>
    <section className="ab-section">
      <div className="ab-wrap">
        <div className="ab-reveal"><h2 className="ab-section-title">Institutions That Trust Us</h2></div>
        <div className="ab-logo-grid">
          {aboutLogos.map(l=><div className="ab-reveal" key={l.src}><div className="ab-logo-card"><div><img src={l.src} alt={l.alt} loading="lazy"/></div></div></div>)}
        </div>
      </div>
    </section>
    <section className="ab-section">
      <div className="ab-wrap">
        <div className="ab-reveal"><h2 className="ab-section-title">Our Partners</h2><p className="ab-section-sub">The partners we build alongside to keep the whole campus ecosystem unified.</p></div>
        <div className="ab-partner-grid">
          {aboutPartners.map(p=><div className="ab-reveal" key={p.src}><div className="ab-partner-card"><div><img src={p.src} alt={p.alt} loading="lazy"/></div></div></div>)}
        </div>
      </div>
    </section>
    {videoOpen&&<div className="ab-modal" role="dialog" aria-modal="true" aria-label="Founder's Note" onClick={()=>setVideoOpen(false)}><div className="ab-modal-inner" onClick={e=>e.stopPropagation()}><button type="button" aria-label="Close video" onClick={()=>setVideoOpen(false)}><X size={20}/></button><iframe src="https://www.youtube-nocookie.com/embed/RlBKcYmtjjU?autoplay=1&rel=0" title="Founder's Note: Building the Base for Indian Education" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/></div></div>}
  </div>;
}

const problems=[['Redundant effort','The same student, fee and faculty data is entered and reconciled many times, across many offices.'],['Fragmented truth','No single live view of the institution. Enrolment, revenue and risk are pieced together by hand, after the fact.'],['Compounding cost','Per-student and per-module fees grow with every admission cycle and are repriced at every renewal.'],['No safe place for AI','With data spread across tools, no AI can reason over the whole institution safely.']];
const entProblems=[["Redundant effort","The same student, fee and faculty data is entered and reconciled many times, across many offices."],["Fragmented truth","No single live view of the institution. Enrolment, revenue and risk are pieced together by hand, after the fact."],["Compounding cost","Per-student and per-module fees grow with every admission cycle and are repriced at every renewal."],["No safe place for AI","With data spread across tools, no AI can reason over the whole institution safely."]];
const entLicense=[["A perpetual license.","The right to use the agreed enterprise version, permanently. No yearly platform license that resets."],["A dedicated cloud environment.","Provisioned and managed by Campx on our infrastructure, or where agreed in your institution's own Google Cloud or AWS account, with data resident in India. Your data never shares a database with another institution."],["Your brand, end to end.","Your name, your logo, your identity on every screen and app. Other vendors brand a portal; Campx carries your brand through the whole platform."],["No meters.","The license isn't tied to student or staff counts. Staff users are unlimited, and growing enrolment adds nothing to your platform cost."],["Built around your workflows.","Your processes and your modules, configured for your institution from day one."],["Upgrades included, never forced.","Improvements and new features reach your deployment as part of your service. When a major new version arrives, you choose if and when to move, with preferential pricing as an existing customer."]];
const entJourney=["Enquiry","Admission","Academics","Fees","Hostel & life","Placements","Alumni"];
const entSystems=[["Academics","Curriculum, LMS, attendance, exams, OBE"],["Enrollment","Admissions CRM, applicant tracking, counselling"],["Finance","Fees, scholarships, payroll, expenses"],["People","Onboarding, leave, appraisals, research"],["Operations","Hostel, transport, library, placements, helpdesk"],["Medha AI","The intelligence layer across all five: chat, voice and agents in every module."]];
const entAiFeatures=[["Ask, don't navigate","A personal assistant for students, faculty and leadership, answering from live data across all five systems."],["Course Studio","Subject experts build complete courses in hours, not days, with no third-party content."],["Workflow agents","Multi-step tasks carried out under each user's own permissions, and audited."]];
const entAiPrinciples=[["Your account, your control.","You hold the accounts, control usage, and see costs directly, instead of a bundled charge billed back to you with no visibility."],["Never locked to one model.","Medha works across leading models, so you're never tied to a single vendor's AI, and your choice can change as providers evolve."],["Built in, not bolted on.","Smart dashboards, assistance, and automation are part of the platform, not a chatbot stuck on the side."]];
const entModelRows=[["What you pay for","Recurring fees every year, across many tools and vendors.","One license, priced once. Implementation and data migration included."],["Every year after","Full fees continue, repriced at every renewal.","A fixed annual maintenance fee for updates and support."],["As you grow","The bill rises with every admission cycle.","Nothing extra per new learner, and unlimited staff users."],["What you keep","Access ends when the contract does.","A perpetual license, under your brand."]];
const entStandards=[["Modern, modular architecture.","Scales across institutions, campuses, departments, and programs without mixing databases or workflows. One connected data layer, with a web and mobile experience that works everywhere."],["Certified interoperable: LTI Advantage Complete.","1EdTech certified. Campx plugs into any compliant LMS such as Moodle, Canvas, or Google Classroom, with single sign-on, and rosters and grades that sync automatically. No custom build."],["Your data, in India.","A dedicated setup that helps you meet DPDP and data-localization rules, so your data stays under your governance."],["Aligned with the standards you answer to.","NAAC, NBA, UGC, and NEP 2020: the frameworks Indian institutions are measured against."],["Run to a 99.9% uptime SLA.","Monitoring, backups, and updates, all handled by Campx."],["ISO 27001 certified.","Security built into the platform and independently certified."]];
const entRollout=[["Discovery & branding","Workflows, roles, fees and calendars mapped, and your identity applied end to end."],["Setup & migration","The platform configured, and your data migrated with validation cycles and dry runs before cutover."],["Training & pilot","Integrations connected, role-based training, and a pilot with live users."],["Go-live","Cutover and hypercare, then Campx runs, monitors and maintains it."]];
const entRolloutNotes=[["Specialist teams","Every workstream is run by people who deploy Campx every week."],["Configuration, not code","Workflows, roles and fee rules are set up in days, not built over months."],["Nothing left behind","Historical records are preserved and searchable from day one."]];
const entAssurances=[["No lock-in, by design.","Your data, settings, and any custom work we agree on are yours to export, anytime. Your license keeps running even if you ever stop the managed service."],["A founding Enterprise partner.","Early Enterprise partners get recognized founding status and a direct voice in the product roadmap."]];
const entFaqs=[["Do we own the source code?","You own what matters: your data, configuration, branding, and any agreed custom work, all exportable at any time. The core platform and its source code stay with Campx, by design. A copy of the source frozen in time, without continuous security patches, upgrades, and maintenance, quickly becomes technical debt. We carry that, so your institution never has to."],["What does a perpetual license mean?","A perpetual right to use the agreed enterprise version of Campx. There's no annual platform license that resets or expires."],["Are upgrades included?","Improvements and new features reach your deployment as part of your service. Major new versions are optional, so you choose if and when to move, with preferential pricing as an existing customer."],["Can it run on our own cloud?","Your deployment is a dedicated environment provisioned and managed by Campx. By default it runs on Campx-managed infrastructure; where agreed, it can run in your institution's own Google Cloud or AWS account. Either way, your data stays in India."],["Can we use our own AI provider?","Yes. You connect your own AI provider accounts with Anthropic, OpenAI, or Google Gemini, and Campx integrates and maintains them. You hold the account and control usage and cost, and your model choice can change as providers evolve."],["What happens if we stop the managed service?","Your perpetual license keeps running, and your data, configuration, branding, and agreed custom work stay fully exportable, with no lock-in."],["Can Campx integrate with our existing systems?","Yes. Google Workspace stays through single sign-on, LTI tools keep syncing rosters and grades, and payment gateways, biometric devices and legacy systems are connected during deployment."]];
const entLogos=[["/logos/upes-online.webp","UPES Online"],["/logos/IILM_LOGO.webp","IILM University"],["/logos/C._V._Raman_Global_University_Logo.webp","CGU Odisha"],["/logos/Anurag.svg","Anurag University"],["/logos/Guru Nanak.svg","Guru Nanak Institutions"],["/logos/CBIT-LOGO.png","CBIT"]];
function EntCta({children,to='/book-demo',className=''}){return <Link to={to} className={'ent-cta '+className}>{children}<span aria-hidden="true">→</span></Link>}
function EntTextLink({children,to}){return <Link to={to} className="ent-text-link">{children}<span aria-hidden="true">→</span></Link>}
function EntSection({num,label,title,intro,tone='paper',children,className=''}){return <section className={'ent-section-outer ent-'+tone+' '+(tone==='ink'?'ent-grain-dark':'ent-grain')+' '+className}><div className="ent-container"><div className="ent-sec-head" data-ent-reveal>{num&&<div className="ent-kicker"><span className="ent-roman">{num}</span><span className="ent-label">{label}</span><i/></div>}<h2>{title}</h2>{intro&&<p className="ent-intro">{intro}</p>}</div>{children}</div></section>}
export function Enterprise(){
  const root=useRef(null);
  useEffect(()=>{
    if(!root.current)return;
    const els=[...root.current.querySelectorAll('[data-ent-reveal]')];
    if(!('IntersectionObserver' in window)){els.forEach(el=>el.classList.add('seen'));return}
    const io=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('seen');io.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[]);
  return <div className="enterprise-page" ref={root}>
    <section className="ent-hero ent-paper ent-grain">
      <div className="ent-container ent-hero-inner">
        <img className="ent-hero-mark" src="/campx-gold-mark.svg" alt="" aria-hidden="true"/>
        <div className="ent-hero-copy">
          <span className="ent-eyebrow" data-ent-reveal>Enterprise Edition</span>
          <h1 data-ent-reveal>Six years of engineering.<br/><span className="ent-serif">Yours in weeks.</span></h1>
          <p data-ent-reveal>A complete AI-first infrastructure, already built, already proven at scale, and licensed to your institution as a dedicated, perpetual enterprise deployment. Under your brand, configured for how you work, and run by us.</p>
          <div className="ent-actions" data-ent-reveal><EntCta data-cta-location="enterprise_hero">Book a Demo</EntCta><EntTextLink to="/platform">See the platform</EntTextLink></div>
        </div>
      </div>
    </section>

    <section className="ent-stats ent-deep ent-grain">
      <div className="ent-container">
        <dl className="ent-stat-grid" data-ent-reveal>{[['140+','Institutions'],['500K+','Users'],['99.9%','Uptime SLA'],['ISO 27001','Certified']].map(([value,label])=><div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}</dl>
        <div className="ent-trust" data-ent-reveal>
          <p>Trusted by institutions including</p>
          <div className="ent-logo-row">{entLogos.map(([src,alt])=><img key={alt} src={src} alt={alt}/>)}</div>
        </div>
      </div>
    </section>

    <EntSection num="I" label="The Problem" title="Separate systems cost more every year." intro="Most large institutions and groups run on separate systems and point tools. Each works on its own. Together, they leave the institution fragmented.">
      <div className="ent-card-grid">{entProblems.map(([title,detail],i)=><article key={title} data-ent-reveal><h3>{title}</h3><p>{detail}</p></article>)}</div>
    </EntSection>

    <EntSection num="II" label="Same Platform" title="Enterprise changes one thing: control." intro="Every institution on Campx runs the same platform and receives the same continuous updates. Enterprise adds the layer large institutions require: a dedicated, white-labeled deployment with your branding, your data governance, and commercial terms structured for institutional scale." tone="deep">
      <div className="ent-compare" data-ent-reveal>
        <div><h3>Same on every edition</h3><ul>{['The full platform, every module','Continuous updates, as they ship','Medha, the built-in AI','Web and mobile apps'].map(x=><li key={x}>{x}</li>)}</ul></div>
        <div className="gold"><h3>Yours on Enterprise</h3><ul>{['Deployment: a dedicated environment','Branding: your identity, end to end','Data: your governance, your exports','Commercial terms: structured for scale'].map(x=><li key={x}>{x}</li>)}</ul></div>
      </div>
      <div className="ent-quote" data-ent-reveal><span aria-hidden="true">“</span><p>Same platform. Same updates. Yours to control.</p></div>
    </EntSection>

    <section className="ent-section-outer ent-paper ent-grain ent-whofor">
      <div className="ent-container"><div data-ent-reveal><span className="ent-eyebrow">Who it's for</span><p>Built for universities, autonomous institutions, and multi-campus education groups that need a dedicated digital infrastructure layer, not a patchwork of software subscriptions.</p></div></div>
    </section>

    <EntSection num="III" label="One Record" title="One learner record, from enquiry to alumni." intro="Five systems and 26 modules share one data core, with Medha AI across all of them. A student's record is created once and never entered again." tone="deep">
      <ol className="ent-journey" data-ent-reveal>{entJourney.map((x,i)=><li key={x}><b>{x}</b></li>)}</ol>
      <div className="ent-benefits">{[['One truth in every office','Admissions to alumni read and write the same live record. No silos, no integration projects.'],['Insight across the journey','See which intake channels produce the strongest graduates, because the whole journey is in one place.'],['Ready for AI by design','AI is only as good as its context. Here, the whole institution lives in one governed platform.']].map(([title,detail])=><article key={title} data-ent-reveal><h3>{title}</h3><p>{detail}</p></article>)}</div>
      <div className="ent-system-grid" data-ent-reveal>{entSystems.map(([name,detail],i)=><div className={'ent-system-item '+(i===5?'gold':'')} key={name}><b>{name}</b><p>{detail}</p></div>)}</div>
      <div className="ent-tail" data-ent-reveal><h3>Transform without disruption.</h3><p>Google Workspace stays, through single sign-on. LTI tools keep syncing rosters and grades. Payment gateways, biometric devices and legacy systems are connected during rollout, and every screen carries your institution's identity.</p></div>
    </EntSection>

    <EntSection num="IV" label="Yours to Run" title="A dedicated platform, run on your terms." intro="Enterprise isn't a subscription you rent by the user. It's a perpetual license to a dedicated deployment, built around how your institution actually works, and run for you.">
      <div className="ent-license-grid">{entLicense.map(([title,detail],i)=><div className="ent-license-item" key={title} data-ent-reveal><span>{String(i+1).padStart(2,'0')}</span><div><h3>{title}</h3><p>{detail}</p></div></div>)}</div>
      <p className="ent-fine" data-ent-reveal>Campx retains ownership of the core platform and its source code. Your institution owns its data, configuration, branding, and any agreed custom work.</p>
    </EntSection>

    <EntSection num="V" label="AI on Your Terms" title="Your AI, on your account." intro="Medha is the AI built into Campx, powering chat, voice, and automated workflows across the platform. On Enterprise, it runs on AI provider accounts your institution holds. We set them up and maintain them for you." tone="ink">
      <div className="ent-ai-features">{entAiFeatures.map(([title,detail])=><article key={title} data-ent-reveal><h3>{title}</h3><p>{detail}</p></article>)}</div>
      <div className="ent-principles">{entAiPrinciples.map(([title,detail],i)=><article key={title} data-ent-reveal><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
      <div className="ent-provider" data-ent-reveal><div className="ent-providers"><b>Anthropic</b><span aria-hidden="true">·</span><b>OpenAI</b><span aria-hidden="true">·</span><b>Google Gemini</b></div><p className="ent-fine">Your institutional data is used only within the AI workflows and provider terms agreed with your institution.</p><p className="ent-quiet">Most platforms run the AI on their own account and bill it back to you. With Campx, it runs on yours.</p></div>
    </EntSection>

    <EntSection num="VI" label="The Model" title="An asset you keep, not software you rent." intro="One purchase and a fixed annual maintenance fee, with nothing added as you grow. Against fees that rise every year, the license recovers its cost well within its life.">
      <div className="ent-model" data-ent-reveal>
        <div className="ent-model-head"><span/><p>Separate tools, today</p><p className="gold-col">Campx Enterprise</p></div>
        {entModelRows.map(([label,old,enterprise])=><div className="ent-model-row" key={label}><b>{label}</b><p>{old}</p><p className="gold-col">{enterprise}</p></div>)}
      </div>
      <p className="ent-fine" data-ent-reveal>Cloud infrastructure and AI usage run on your own accounts and are billed to you directly. Final commercials are issued after discovery.</p>
    </EntSection>

    <EntSection num="VII" label="Enterprise Standard" title="Deployed and run to enterprise standard." intro="Every Enterprise deployment is engineered and operated for the security, compliance, and reliability an institution is accountable for." tone="deep">
      <div className="ent-standards">{entStandards.map(([title,detail],i)=><div className="ent-standard-row" key={title} data-ent-reveal><span>{String(i+1).padStart(2,'0')}</span><b>{title}</b><p>{detail}</p></div>)}</div>
      <div className="ent-standards-links" data-ent-reveal><EntTextLink to="/platform">Explore the full platform</EntTextLink><EntTextLink to="/security">Security &amp; compliance</EntTextLink></div>
    </EntSection>

    <EntSection num="VIII" label="Deployment" title="A guided rollout, live in weeks." intro="Campx plans, configures, migrates, and trains: a structured, hands-on rollout that takes your institution live fast and keeps it supported afterwards.">
      <div className="ent-rollout">{entRollout.map(([title,detail],i)=><div className="ent-step" key={title} data-ent-reveal><span>{String(i+1).padStart(2,'0')}</span><h3>{title}</h3><p>{detail}</p></div>)}</div>
      <div className="ent-clock" data-ent-reveal><h3>The clock, honestly.</h3><p>The timeline runs against dependencies we confirm at the start: data extracts, system access and sign-offs. If a dependency moves, the plan moves with it, in the open.</p></div>
      <div className="ent-rollout-notes">{entRolloutNotes.map(([title,detail])=><article key={title} data-ent-reveal><h3>{title}</h3><p>{detail}</p></article>)}</div>
    </EntSection>

    <EntSection num="IX" label="Our Assurances" title="Yours, permanently. And protected." tone="deep">
      <div className="ent-assurances">{entAssurances.map(([title,detail])=><article className="ent-assurance-card" key={title} data-ent-reveal><h3>{title}</h3><p>{detail}</p></article>)}</div>
    </EntSection>

    <EntSection num="X" label="FAQ" title="Questions, answered.">
      <div className="ent-faq">{entFaqs.map(([q,a])=><details key={q} data-ent-reveal><summary><span>{q}</span><i aria-hidden="true">+</i></summary><p>{a}</p></details>)}</div>
    </EntSection>

    <section className="ent-section-outer ent-deep ent-grain ent-final">
      <div className="ent-container"><div className="ent-final-panel" data-ent-reveal>
        <img src="/campx-gold-mark.svg" alt="Campx" aria-hidden="true"/>
        <h2>Campx is building the <span className="ent-serif">education infrastructure</span> of the country.</h2>
        <p>Let's show you what Campx Enterprise could look like for your institution. Tell us how you operate today, and we'll walk you through what your deployment would look like, and how quickly it could go live.</p>
        <ol className="ent-final-steps">{[['Leadership walkthrough','A demo for your leadership with Medha live, then working sessions with the teams who will run it.'],['Technical validation','A half-day with your IT leadership: cloud choice, integrations, migration and infrastructure.'],['Formal proposal','Final commercials, issued after discovery.'],['Agreement and kickoff','Discovery starts soon after signing, and your first institution goes live in weeks.']].map(([title,detail],i)=><li key={title}><span className="ent-num">{i+1}</span><b>{title}</b><p>{detail}</p></li>)}</ol>
        <EntCta>Book a Demo</EntCta>
      </div></div>
    </section>
  </div>
}
const bpDetail={THESIS:['Campx is the AI-first infrastructure for higher education: five systems and 26 modules on one shared data core, with Medha embedded across every workflow.','The platform is workflow-first. Every capability is designed around the real roles, responsibilities and rhythms of an institution, not around software categories.'],'THE PROBLEM':['Campus software usually arrives as separate products with separate databases. The same student is entered many times, and the institution is left reconciling data after the fact.','Fragmentation makes reporting slow, increases cost at every renewal, and leaves AI with no safe, unified context to reason over.'],'SHARED CORE':['Every service inherits identity, permissions, audit logging, workflows, notifications and configuration from one shared core.','A new capability is secure and governed on the day it ships, because security is a property of the platform, not a task assigned to each module.'],'CONTEXT-AWARE':['Every request is resolved to an institution, user, role and data domain before business logic runs.','Boundaries are enforced programmatically: one institution’s data, configuration and schema changes never leak into another.'],SYSTEMS:['Academics, Enrollment, Finance, People and Operations are five connected systems built natively for higher education.','Medha is the sixth system: the intelligence layer that works across all five through the same permission model.'],'PLATFORM AI':['Medha is not a chatbot attached to a portal. It runs inside the platform, with live context from every system.','Chat, voice, smart buttons and agents all use the same governed access path as a human user.'],'AI FEATURES':['Smart Analysis turns any results table into an explanation. Agents draft, route, review and publish multi-step workflows.','Course Studio helps subject experts build complete courses in hours, with no third-party content.'],'OUR VIEW OF AI':['AI should reduce clerical weight, not replace institutional judgement. Every action remains attributable to a named user.','Institutions keep control of their AI provider accounts, usage and costs on Enterprise deployments.'],'DESIGN SYSTEM':['One design language keeps 26 modules coherent: shared components, typography, spacing, and a consistent workspace model.','Simple workspaces handle complex workflows, so users see only the actions relevant to their role.'],STACK:['Campx runs on a modern cloud stack with web and mobile apps, open standards and documented APIs.','LTI 1.3, SSO and open exports keep institutions free to choose the tools they need.'],SECURITY:['Role-based access control, multi-factor authentication, encryption in transit and at rest, and full audit logging are platform-wide.','ISO 27001:2022 certified, SOC 2-ready, and run to a 99.9% uptime SLA.'],COMPLIANCE:['Aligned with DPDPA, NEP 2020, NAAC, NBA and UGC requirements.','1EdTech Certified with LTI Advantage Complete for compliant LMS interoperability.'],CONFIGURATION:['Institution type, stream and level configure the platform around the campus: workflows, roles, fees, approvals and reports.','Most changes are configuration, not custom code, and can be made by institutional teams in minutes.'],DEVELOPER:['Decoupled modules and a plugin architecture allow institution-specific extensions on Enterprise.','Open standards and APIs connect internal, legacy and third-party systems during rollout.'],TYPE:['Campx is built for autonomous colleges, universities, multi-campus groups, distance universities and Ed-Tech institutions.','From diploma to doctoral research, one platform serves the whole learner journey.']};
export function Blueprint(){
  const [active,setActive]=useState(null);
  const [closing,setClosing]=useState(false);
  const didMount=useRef(false);
  const timer=useRef(null);
  const tiles=[
    {id:'thesis',eyebrow:'THESIS',title:'Campus, automated. Experience, simplified.',question:'What is Campx?',span:2,rotation:-.15},
    {id:'problem',eyebrow:'THE PROBLEM',title:'Built whole, from one core.',question:"Why doesn't existing campus software work?",span:1,rotation:.2},
    {id:'shared-core',eyebrow:'SHARED CORE',title:'One core. Every service inherits.',question:'What does every service inherit?',span:1,rotation:-.18},
    {id:'context-aware',eyebrow:'CONTEXT-AWARE',title:'Boundaries enforced before logic runs.',question:'How is access enforced?',span:2,rotation:.15},
    {id:'systems',eyebrow:'SYSTEMS',title:'Five systems. One platform.',question:'How is the platform organised?',span:2,rotation:.18},
    {id:'platform-ai',eyebrow:'PLATFORM AI',title:'AI native to the platform.',question:'How is AI built into Campx?',span:2,rotation:-.12},
    {id:'ai-features',eyebrow:'AI FEATURES',title:'Acts before someone has to ask.',question:'Where does AI show up?',span:1,rotation:.16},
    {id:'ai-view',eyebrow:'OUR VIEW OF AI',title:'A native intelligence layer for the whole campus.',question:'How do we think about AI?',span:1,rotation:-.14},
    {id:'design-system',eyebrow:'DESIGN SYSTEM',title:'One language. Every surface.',question:'How does Campx feel coherent?',span:2,rotation:-.16},
    {id:'stack',eyebrow:'STACK',title:'Modern foundations, top to bottom.',question:'What is it built on?',span:1,rotation:.15},
    {id:'security',eyebrow:'SECURITY',title:'Inherited across the platform.',question:'How is data kept safe?',span:1,rotation:-.2},
    {id:'compliance',eyebrow:'COMPLIANCE',title:'ISO. SOC 2. DPDPA. By design.',question:'What standards does it meet?',span:1,rotation:.12},
    {id:'configuration',eyebrow:'CONFIGURATION',title:'Fits your ecosystem. Hand in glove.',question:'How does it slot into a campus?',span:1,rotation:-.15},
    {id:'developer',eyebrow:'DEVELOPER',title:'Extend it yourself. Or let us build.',question:'Can institutions extend it?',span:2,rotation:.1},
    {id:'scale',eyebrow:'TYPE',title:'Every kind of campus.',question:'Who is Campx for?',span:4,rotation:-.18}
  ];
  const systems=[
    {label:'Academics',owns:'Curriculum, attendance, exams, evaluation, outcomes.'},
    {label:'Enrollment',owns:'Lead capture through enrollment confirmation.'},
    {label:'Finance',owns:'Fees, payments, payroll, reconciliation, reporting.'},
    {label:'People',owns:'Staff lifecycle: onboarding, performance, insights.'},
    {label:'Operations',owns:'Hostel, transport, facilities, assets, services.'}
  ];
  const principles=[
    {title:'Tenant-scoped',description:"Every agent operates inside one institution's boundaries. Access stops at the data domains that institution has permitted."},
    {title:'Structured access',description:'Agents query governed institutional data through a typed interface. Same access patterns the rest of the platform uses.'},
    {title:'Audited',description:'Every action attributed and replayable. Same audit trail and access controls as a human user.'},
    {title:'Semantic retrieval',description:'Embedded vector search over institutional records, under the same boundaries as every other query.'}
  ];
  const features=[
    {name:'Document understanding',detail:'Forms, transcripts, certificates, IDs, all extracted into records.'},
    {name:'Natural-language queries',detail:'Ask questions of your data. Get answers with sources.'},
    {name:'Workflow automation',detail:'Multi-step tasks, scoped and audited end to end.'},
    {name:'Predictive nudges',detail:"Surfaces what needs attention before it's asked for."}
  ];
  const views=[
    {stance:'Accountability',rationale:'Every agent acts as a named participant on the platform. Its work belongs to a user, a service, a moment. Trust is built from a clear record.'},
    {stance:'Auditing',rationale:'Every step is logged and replayable. Decisions can be reviewed, refined, and learned from. The platform gets smarter the longer you run it.'},
    {stance:'Seamless workflows',rationale:'AI moves between systems the way work already moves on campus. One intelligence layer threading every workflow, end to end.'},
    {stance:'Light-speed adaptability',rationale:'Agents pick up new policies, modules, and data the moment they ship. The intelligence layer grows with the platform, and with you.'}
  ];
  const design=[
    {name:'Tokens',detail:'Type, colour, spacing, motion. One source of truth across every surface.'},
    {name:'Components',detail:'Documented, versioned, ready to ship. Reusable patterns across every screen.'},
    {name:'Themes',detail:'Light, dark, institutional brand. Themed per institution.'},
    {name:'Cross-platform',detail:'Same language on web and mobile. Native-feeling on both.'}
  ];
  const stack=[
    {layer:'Backend',choice:'Service-oriented. Each domain owns its data, releases, and scaling.'},
    {layer:'Clients',choice:'One design language. Web and mobile. Native-feeling on both.'},
    {layer:'Infrastructure',choice:'Elastic compute. Edge delivery for speed. Observable end-to-end.'},
    {layer:'Data + messaging',choice:'Relational, document, event-driven. Each layer chosen for the workload it carries.'}
  ];
  const stackTints=['rgba(30,2,127,0.22)','rgba(30,2,127,0.16)','rgba(30,2,127,0.10)','rgba(30,2,127,0.05)'];
  const types=[
    {number:'01',category:'Institution Type',pills:['Standalone College','Autonomous College','Group of Colleges','University','Distance / Open University','Ed-Tech']},
    {number:'02',category:'Stream of Study',pills:['Engineering & Technology','Medical & Health Sciences','Arts & Humanities','Sciences','Commerce','Management','Law','Pharmacy','Agriculture']},
    {number:'03',category:'Level of Study',pills:['Diploma & Certificate','Undergraduate','Postgraduate','Research (PhD / MPhil)','Executive Programmes']}
  ];
  useEffect(()=>{
    const readHash=()=>window.location.hash.replace(/^#/,'');
    const fromHash=readHash();
    if(fromHash&&tiles.some(t=>t.id===fromHash))setActive(fromHash);
    const onHash=()=>{const id=readHash();if(id&&tiles.some(t=>t.id===id))setActive(id);else if(!id)setActive(null)};
    window.addEventListener('hashchange',onHash);
    return ()=>{window.removeEventListener('hashchange',onHash);if(timer.current)clearTimeout(timer.current)};
  },[]);
  useEffect(()=>{
    if(!didMount.current){didMount.current=true;return}
    window.history.replaceState(null,'',active?`#${active}`:window.location.pathname+window.location.search);
  },[active]);
  const close=()=>{
    if(!active||closing)return;
    if(timer.current)clearTimeout(timer.current);
    setClosing(true);
    timer.current=setTimeout(()=>{setActive(null);setClosing(false);timer.current=null},180);
  };
  const open=id=>{if(timer.current)clearTimeout(timer.current);setClosing(false);setActive(id)};
  useEffect(()=>{
    if(!active)return;
    const onKey=e=>{if(e.key==='Escape')close()};
    document.addEventListener('keydown',onKey);
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    return ()=>{document.removeEventListener('keydown',onKey);document.body.style.overflow=previous};
  },[active]);
  const lead=(w,children)=><p className={'bpx-lead bpx-w'+w}>{children}</p>;
  const tail=(w,children)=><p className={'bpx-tail bpx-w'+w}>{children}</p>;
  const numCell=(n,title,note,mod='')=><div className={'bpx-cell '+mod} key={title}><p className="bpx-cell-num">{n}</p><p className="bpx-cell-title">{title}</p><p className="bpx-cell-note">{note}</p></div>;
  const sixGrid=(items,mod='')=><div className={'bpx-six '+mod}>{items.map((x,i)=>numCell(String(i+1).padStart(2,'0'),x[0],x[1]))}</div>;
  const body=id=>{
    switch(id){
      case 'thesis':return <div className="bpx-stack bpx-stack--thesis">
        {lead(720,<>Campx is the <b>Campus Automation Management Platform</b>. We automate every workflow a campus runs on, and simplify the experience for everyone who touches it.</>)}
        <div className="bpx-thesis-rows">{[['01','AUTOMATION','Every campus workflow, end-to-end.'],['02','WORKFLOW-FIRST','Built around how campuses actually run.'],['03','SIMPLIFIED EXPERIENCE','Lighter days for students, staff, and leaders.'],['04','TRANSFORMATION PARTNER','Aligned with how your institution evolves.']].map(([n,t,d],i)=><React.Fragment key={n}><div className="bpx-thesis-row"><span className="bpx-thesis-num">{n}</span><div><p className="bpx-thesis-title">{t}</p><p className="bpx-thesis-note">{d}</p></div></div>{i<3&&<div className="bpx-thesis-plus"><span>+</span><i/></div>}</React.Fragment>)}</div>
        <div className="bpx-thesis-eq"><span>=</span><b>Campx</b></div>
      </div>;
      case 'problem':return <div className="bpx-stack">
        {lead(660,<>Most campus platforms grew by accretion: features stitched onto monoliths, CSV exports passing for integration. <b>Campx was built the other way around.</b> One platform. One core. Every service inherits the same guarantees.</>)}
        <div className="bpx-split">
          <div className="bpx-split-col">
            <p className="bpx-split-label bpx-muted">Stitched</p>
            <div className="bpx-mini-grid">{Array.from({length:9}).map((_,i)=><div key={i} style={{background:`hsl(${37*i%360} 28% ${72-i%3*6}%)`,border:'1px dashed rgba(10,10,35,0.3)',transform:`rotate(${(i%2?-1:1)*(1+i%3)}deg)`}}/>)}</div>
            <p className="bpx-split-note">CSV exports as integration.</p>
          </div>
          <div className="bpx-split-col">
            <p className="bpx-split-label">Unified</p>
            <div className="bpx-mini-grid">{Array.from({length:9}).map((_,i)=><div key={i} style={{background:'rgba(30,2,127,0.12)',border:'1px solid rgba(30,2,127,0.45)'}}/>)}</div>
            <p className="bpx-split-note bpx-strong">One core. Every service inherits.</p>
          </div>
        </div>
        <div className="bpx-three">{[['Modules drift apart','Nightly syncs become the integration. Records disagree by morning.'],['Records double up','Two systems, one student, two versions of the truth.'],['Standards split per module','Compliance lives in admissions; finance follows a different rulebook.']].map(([t,d],i)=><div className="bpx-three-cell" key={t}><p className="bpx-red-num">{String(i+1).padStart(2,'0')}</p><p className="bpx-three-title">{t}</p><p className="bpx-cell-note">{d}</p></div>)}</div>
        {tail(820,'INTEGRATION IS A PLATFORM PROPERTY.')}
      </div>;
      case 'shared-core':return <div className="bpx-stack">
        {lead(820,<>Six platform properties live in the core. <b>Every service inherits them</b>, automatically, on the day it ships.</>)}
        {sixGrid([['Identity','Single sign-on across every service.'],['Role-based access','Permission scoped to the action.'],['Tenant context','Institution boundary at every call.'],['Data separation','Each institution stays inside its own boundary.'],['Logging','Every event written, attributed.'],['Audit trails','Replayable history for every action.']])}
        {tail(820,'SECURITY AND COMPLIANCE LIVE IN THE PLATFORM. INHERITED EVERYWHERE.')}
      </div>;
      case 'context-aware':return <div className="bpx-stack">
        {lead(820,<>Every request resolves to an institutional context <b>before any business logic runs</b>. Boundaries are enforced by the platform itself, so each institution’s data, schema, and configuration stay sovereign end-to-end.</>)}
        <div className="bpx-flow">{[['01','REQUEST','User · device · session lands at the gateway.'],['02','CONTEXT RESOLVED','Institution · role · data domain attached before logic runs.'],['03','LOGIC RUNS','Scoped, audited, attributed end-to-end.']].map(([n,t,d],i)=><React.Fragment key={n}><div className="bpx-flow-card"><p className="bpx-stage">Stage {n}</p><p className="bpx-flow-num">{n}</p><p className="bpx-cell-title">{t}</p><p className="bpx-cell-note">{d}</p></div>{i<2&&<React.Fragment><span className="bpx-arrow-lg" aria-hidden="true">→</span><span className="bpx-arrow-sm" aria-hidden="true">↓</span></React.Fragment>}</React.Fragment>)}</div>
        {tail(820,'ISOLATION OF A DEDICATED DEPLOYMENT. VELOCITY OF A SHARED ONE.')}
      </div>;
      case 'systems':return <div className="bpx-stack bpx-stack--systems">
        {lead(760,<>Campx is <b>one platform</b> where every role on campus gets work done. Five systems carry the workload on one shared data core, and Medha, the intelligence layer, reasons across all of them.</>)}
        <div className="bpx-systems">
          <div className="bpx-sys-bar"><span className="bpx-sys-label">Intelligence Layer</span><b>Medha</b></div>
          <div className="bpx-sys-box"><span className="bpx-sys-tag">Campx · Five systems</span><div className="bpx-sys-five">{systems.map(s=><div className="bpx-sys-cell" key={s.label}><p>{s.label}</p><small>{s.owns}</small></div>)}</div></div>
          <div className="bpx-core-bar">Shared Core · Identity · Audit · Tenancy · Data</div>
        </div>
        {tail(760,'FIVE SYSTEMS. ONE DATA CORE. ONE INTELLIGENCE.')}
      </div>;
      case 'platform-ai':return <div className="bpx-stack">
        {lead(820,<>AI runs natively inside Campx. <b>Every agent operates inside one institution’s boundaries</b>: governed, audited, accountable.</>)}
        <div className="bpx-rows">{principles.map((p,i)=><div className="bpx-row" key={p.title}><div className="bpx-row-head"><span className="bpx-italic-num">{String(i+1).padStart(2,'0')}</span><h4>{p.title}</h4></div><p>{p.description}</p></div>)}</div>
        {tail(820,'GOVERNED LIKE EVERY OTHER SERVICE. ACTING AT THE SPEED OF SOFTWARE.')}
      </div>;
      case 'ai-features':return <div className="bpx-stack">
        {lead(720,<>Where AI shows up in the day-to-day. <b>Removes the busywork. Surfaces what matters.</b></>)}
        <div className="bpx-features">{features.map((f,i)=><div className="bpx-feature" key={f.name}><div className="bpx-feature-rule"><span className="bpx-italic-num">{String(i+1).padStart(2,'0')}</span><i/></div><h4>{f.name}.</h4><p>{f.detail}</p></div>)}</div>
        {tail(720,'ACTS BEFORE SOMEONE HAS TO ASK.')}
      </div>;
      case 'ai-view':return <div className="bpx-stack">
        {lead(680,<>Campx sees AI as a tool that <b>aids the people who run a campus</b>. Applied natively across the platform, it grows into the intelligence layer that covers every workflow, every record, every interaction.</>)}
        <div className="bpx-cards">{views.map((v,i)=>numCell(String(i+1).padStart(2,'0'),v.stance,v.rationale))}</div>
        {tail(720,'A NATIVE INTELLIGENCE LAYER. GROWING WITH EVERY CAMPUS.')}
      </div>;
      case 'design-system':return <div className="bpx-stack">
        {lead(820,<>One unified design system across web and mobile. <b>Every screen feels native to Campx</b> on the day it ships: consistent across modules, ready out of the box, themed to your brand.</>)}
        <div className="bpx-four">{design.map((d,i)=>numCell(String(i+1).padStart(2,'0'),d.name,d.detail))}</div>
        <div className="bpx-panel"><p className="bpx-panel-label">What it gives the platform</p><p className="bpx-panel-copy">New screens inherit the system. New modules look like the platform on day one. Brand and motion stay consistent across every surface a student, parent, or staff member touches.</p></div>
        {tail(820,'ONE LANGUAGE. EVERY SURFACE.')}
      </div>;
      case 'stack':return <div className="bpx-stack">
        {lead(760,<>Modern foundations, top to bottom. <b>Every layer chosen to scale, evolve, and stand up to the questions a board or a regulator asks.</b></>)}
        <div className="bpx-tiers">{stack.slice().reverse().map((s,i)=><div className="bpx-tier" key={s.layer} style={{background:stackTints[i]}}><div className="bpx-tier-num"><b>{String(stack.length-i).padStart(2,'0')}</b><span>Tier</span></div><div><p className="bpx-tier-title">{s.layer}</p><p className="bpx-tier-choice">{s.choice}</p></div></div>)}</div>
        {tail(760,'SAME FOUNDATIONS. 500-STUDENT COLLEGE. 100,000-STUDENT GROUP.')}
      </div>;
      case 'security':return <div className="bpx-stack">
        {lead(820,<>Security is a <b>property of the platform</b>. Every service inherits it. Every release ships with it on the day it goes out.</>)}
        <div className="bpx-four bpx-four--security">{[['RBAC','Role-based access. Permission scoped to action.'],['MFA','Multi-factor auth on every sensitive surface.'],['TLS · AES','Encryption in transit and at rest.'],['AUDIT LOG','Every action attributed and replayable.']].map(([t,d])=><div className="bpx-sec-cell" key={t}><p>{t}</p><small>{d}</small></div>)}</div>
        <div className="bpx-panel"><p className="bpx-panel-label">Held to standard</p><div className="bpx-standards"><span>ISO 27001</span><span className="bpx-dot">·</span><span>SOC 2 TYPE II</span><span className="bpx-dot">·</span><span>DPDPA</span></div></div>
        <div className="bpx-panel"><p className="bpx-panel-label">Inheritance</p><p className="bpx-panel-copy">Service A inherits → Service B inherits → Service N inherits. One platform. One set of guarantees. Applied identically.</p></div>
        {tail(820,'INHERITED ACROSS THE PLATFORM.')}
      </div>;
      case 'compliance':return <div className="bpx-stack">
        {lead(920,<>Compliance is <b>built into the architecture</b> from day one. The same architectural properties align with comparable global frameworks as institutions expand internationally.</>)}
        <div className="bpx-standards-grid">{[['ISO 27001','ALIGNED','Information security management to international standard.'],['SOC 2 TYPE II','ALIGNED','Operational controls evaluated over a sustained period of time.'],['DPDPA','ALIGNED','Consent, minimisation, and subject rights built into the data layer.'],['VAPT','BI-ANNUAL','Vulnerability assessment & penetration testing on a fixed schedule.']].map(([code,stamp,detail])=><div className="bpx-std-cell" key={code}><span className="bpx-stamp">{stamp}</span><p>{code}</p><small>{detail}</small></div>)}</div>
        {tail(920,'STANDARDS BY DESIGN.')}
      </div>;
      case 'configuration':return <div className="bpx-stack">
        {lead(820,<>Campx fits the ecosystem you already run on. <b>Existing tools wired in. Existing policies respected.</b> Same architecture, shaped to your campus.</>)}
        {sixGrid([['Identity','SSO, SAML, OIDC. Your directory, our login.'],['Payments','Gateways, banks, reconciliation already wired.'],['Communications','Email, SMS, WhatsApp, push, all on one delivery layer.'],['Government','UDISE, AICTE, state portals; formats handled.'],['Policies','Calendars, grading, fees, approvals; yours, configured.'],['Brand','Logos, palette, voice, themed to your institution.']],'bpx-six--config')}
        {tail(820,'FITS YOUR ECOSYSTEM. HAND IN GLOVE.')}
      </div>;
      case 'developer':return <div className="bpx-stack">
        {lead(920,<>Two ways to take Campx further. Build with our <b>enterprise extensions</b>, or partner with <b>our team</b>. Same platform, either path.</>)}
        <div className="bpx-dev">
          <div>
            <div className="bpx-dev-head"><p>01 · Enterprise Extensions</p><b>Build it yourself.</b></div>
            {[['APIs','Documented. Versioned. Typed.'],['SDKs','Multi-language. Drop-in.'],['Webhooks','Event-driven, signed, retried.'],['Custom workflows','Domain rules, no forking.']].map(([n,d],i)=><div className="bpx-dev-item" key={n}><span>{String(i+1).padStart(2,'0')}</span><div><p>{n}</p><small>{d}</small></div></div>)}
          </div>
          <div>
            <div className="bpx-dev-head"><p>02 · In-house Dev / Managed Services</p><b>Hand it to our team.</b></div>
            {[['Custom modules','Proprietary capabilities, built on the platform core.'],['Integrations','Bespoke pipelines into your existing systems of record.'],['Managed ops','Run, monitor, support, all handled by our team.'],['Roadmap partnership','Co-build the bespoke tools your campus needs to grow.']].map(([n,d],i)=><div className="bpx-dev-item" key={n}><span>{String(i+1).padStart(2,'0')}</span><div><p>{n}</p><small>{d}</small></div></div>)}
          </div>
        </div>
        {tail(920,'BUILD WITH US. OR LET US BUILD WITH YOU.')}
      </div>;
      case 'scale':return <div className="bpx-stack">
        {lead(820,<>From a 500-student college to a 100,000-student university group: <b>same platform, same simplification</b>, configured to your scale.</>)}
        <div className="bpx-scale">{types.map(t=><div className="bpx-scale-cell" key={t.number}><p className="bpx-cell-num">{t.number}</p><p className="bpx-scale-cat">{t.category}</p><ul>{t.pills.map(p=><li key={p}>{p}</li>)}</ul></div>)}</div>
        {tail(820,'ONE ARCHITECTURE. CONFIGURED TO EVERY CAMPUS.')}
      </div>;
      default:return null;
    }
  };
  const tile=tiles.find(t=>t.id===active);
  return <div className="blueprint-page">
    <div className="bpx-bg" aria-hidden="true"><div className="bpx-gridlines"/><div className="bpx-vignette"/></div>
    <section className="bpx-section">
      <header className="bpx-header">
        <p className="bpx-eyebrow">The Blueprint</p>
        <h1>We understand how a campus can work.<br className="bpx-break"/> <span>Here’s our blueprint.</span></h1>
        <p className="bpx-sub">The Campus Automation Management Platform, built workflow-first.</p>
        <p className="bpx-pick">Pick a tile to begin.</p>
      </header>
      <div className="bpx-tiles" style={{boxShadow:'0 24px 48px -24px rgba(10,10,35,0.18), 0 6px 12px -6px rgba(10,10,35,0.08)'}}>
        {tiles.map(t=><div className={'bpx-tile-cell '+(t.span===4?'bpx-span4':t.span===2?'bpx-span2':'bpx-span1')} key={t.id}><div className="bpx-tile-wrap"><button type="button" className="bpx-tile" style={{transform:`rotate(${t.rotation}deg)`}} aria-label={`Open ${t.title}`} onClick={()=>open(t.id)}><span className="bpx-sheen" aria-hidden="true"/><span className="bpx-tile-label">{t.eyebrow}</span><span className="bpx-tile-question">{t.question}</span><span className="bpx-hover-shadow" aria-hidden="true"/></button></div></div>)}
      </div>
      <div className="bpx-cta"><Link to="/book-demo" data-cta-location="blueprint" className="bpx-demo">Book a Demo<span aria-hidden="true">→</span></Link><p>See the platform on a real campus.</p></div>
    </section>
    {tile&&<div className={'bpx-layer'+(closing?' bpx-closing':'')} onClick={close}>
      <div className="bpx-modal" role="dialog" aria-modal="true" aria-label={tile.title} onClick={e=>e.stopPropagation()}>
        <span className="bpx-modal-sheen" aria-hidden="true"/>
        <img className="bpx-watermark" src="/campx-mark.png" alt="" aria-hidden="true"/>
        <div className="bpx-modal-top">
          <div className="bpx-modal-tags"><p>{tile.eyebrow}</p><span>· Campx Blueprint</span></div>
          <div className="bpx-modal-tools"><img src="/campx-mark.png" alt="Campx" width="28" height="22"/><button type="button" onClick={close} aria-label="Close"><X size={18} strokeWidth={1.75}/></button></div>
        </div>
        <div className="bpx-modal-head"><p>{tile.question}</p><h2>{tile.title}</h2><i/></div>
        <div className="bpx-modal-content"><div className="bpx-body-wrap">{body(tile.id)}</div></div>
      </div>
    </div>}
  </div>
}
const sec=[['Security, inherited from the core','Security is a property of the platform, not a duty assigned to each service. Every service operates inside the same boundaries — a new capability inherits security on the day it ships.',['Role-based access control — access is resolved per institution, per role, per data domain.','Multi-factor authentication, built into platform sign-in.','Encryption in transit and at rest, applied platform-wide.','Full audit logging — a capability shipped in admissions carries the same audit trail as one in finance.']],['Isolation by architecture','Every request is resolved to an institutional context before any business logic runs — which institution, which user, which role, which data domain.',['Boundaries are enforced programmatically.','One institution’s data, schema changes and configuration never leak into another.']],['AI under the same governance','Medha, the AI built into Campx, is held to the same governance as a human user. Every agent is scoped, audited, and accountable.',['Every prompt, retrieval and action is recorded.','Agents run under the permissions of the named user.']],['Your data, your governance','Aligned with the DPDP Act and on path to DPDPA compliance. Your institution owns its data and can export it at any time.',['Dedicated environments support data-localization rules.','Enterprise deployments keep your data under your governance.']],['Reliability','Run to a 99.9% uptime SLA — monitoring, backups, and updates handled by Campx.',['Certified interoperability: 1EdTech Certified, LTI Advantage Complete (16 June 2026), covering LTI 1.3, Deep Linking 2.0, Assignment & Grade Services 2.0 and Names & Role Provisioning 2.0.']]];
export function Security(){return <><PageHero eyebrow="SECURITY & COMPLIANCE" title={<>Enterprise-grade security and India-specific compliance,<br/><em>built in from day one.</em></>} sub="Security, privacy, and compliance are foundations of the Campx platform — not features added at the end."><Btn to="/book-demo">Book a Demo</Btn></PageHero><section className="container security-certs">{[['ISO 27001:2022 Certified','/Compliance/ISO-1024x1024.png'],['On Path to DPDPA Compliance','/Compliance/google-cloud-logo.svg'],['SOC 2-Ready','/Compliance/1edtech_trusted-apps-certified.svg'],['99.9% Uptime SLA','/icon.svg'],['NAAC · NBA · UGC · NEP 2020 Aligned','/campx-gold-mark.svg']].map(([t,img])=><div key={t}><img src={img} alt=""/><b>{t}</b></div>)}</section><section className="container detail-section"><Eyebrow>SECURITY</Eyebrow><h2>Security, inherited<br/><em>from the core.</em></h2><div className="security-list">{sec.map(([t,d,list],i)=><article key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{d}</p>{list&&<ul>{list.map(x=><li key={x}><Check size={15}/>{x}</li>)}</ul>}</div></article>)}</div></section><section className="container trust-section"><div className="glass-panel"><h3>Have a security questionnaire or a procurement review?</h3><p>We’ll walk your IT committee through all of it.</p><Btn to="/contact">Book a Demo</Btn></div></section><CTA/></>}
export function Contact(){return <><PageHero eyebrow="CONTACT US" title={<>We’d love to<br/><em>hear from you.</em></>} sub="Have questions? Want to see Campx in action? Let’s talk."><Btn to="/book-demo">Book a demo</Btn></PageHero><section className="container contact-grid"><div className="contact-cards">{[[Building2,'Headquarters','03, Level 3, The District, My Scape Road, Nanakramguda, Financial District, Hyderabad 500032, Telangana, India.'],[Mail,'General Enquiries','business@campx.in'],[Phone,'Sales & Partnerships','+91 97000 23336'],[ShieldCheck,'Support Line','+91 63036 23950']].map(([Icon,t,d],i)=><div key={t}><span className="contact-icon"><Icon size={22}/></span><small>0{i+1} · {t.toUpperCase()}</small><b>{d}</b></div>)}<div><span className="contact-icon"><Globe size={22}/></span><small>FOLLOW US</small><div className="socials dark"><a href="https://www.linkedin.com/company/campx-digital-campus-ecosystem" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13}/></a><a href="https://www.instagram.com/campx_digitalcampus" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13}/></a><a href="https://x.com/CampXDigital" target="_blank" rel="noreferrer">X <ArrowUpRight size={13}/></a></div></div></div><div className="contact-map"><div className="map-grid"/><div className="map-pin"><MapPin size={28}/><b>Campx Edutech Pvt Ltd</b><span>Financial District, Hyderabad</span></div></div></section><CTA/></>}
