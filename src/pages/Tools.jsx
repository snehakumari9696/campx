import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Btn, Eyebrow, PageHero, CheckList, Field, SelectField, useScrollTop,
} from '../components/Layout';
import { systems, countries } from '../data/site';

const costs = [
  { id: 'fees', label: 'Fee & payment operations', base: 18 },
  { id: 'admissions', label: 'Admissions & enrolment', base: 16 },
  { id: 'hr', label: 'HR & attendance', base: 12 },
  { id: 'inventory', label: 'Inventory & assets', base: 10 },
  { id: 'transport', label: 'Transport & hostel', base: 9 },
  { id: 'exams', label: 'Exams & academics', base: 11 },
];

export function RoiCalculator() {
  useScrollTop();
  const [students, setStudents] = useState(2000);
  const [selected, setSelected] = useState(costs.map((c) => c.id));
  const [hostel, setHostel] = useState(true);

  const result = useMemo(() => {
    const coverage = selected.reduce((sum, id) => sum + (costs.find((c) => c.id === id)?.base || 0), 0);
    const annualThousands = Math.round((students / 1000) * coverage * 1.85 + (hostel ? students * 0.12 : 0));
    const annual = annualThousands * 1000;
    const hours = Math.round(students * (coverage / 76) * 1.35);
    return {
      annual,
      hours,
      payback: Math.max(4, Math.round(78 / (annualThousands / 100))),
      coverage: Math.min(94, Math.round((coverage / 76) * 100)),
    };
  }, [students, selected, hostel]);

  const toggle = (id) => setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <>
      <PageHero
        eyebrow="Return on investment"
        title={<>See what Campx gives <em>back.</em></>}
        sub="Model the hours, costs and visibility your institution could gain. A directional estimate in under a minute — no spreadsheet, no sales call."
      />
      <section className="section">
        <div className="container">
          <div className="roi-grid">
            <div className="panel roi-form">
              <div className="roi-step">
                <span className="roi-stepnum">01</span>
                <div className="grow">
                  <label className="field-label" htmlFor="roi-students">How many students are enrolled?</label>
                  <input id="roi-students" className="range" type="range" min="100" max="20000" step="100" value={students} onChange={(e) => setStudents(Number(e.target.value))} />
                  <div className="range-labels"><span>100</span><strong>{students.toLocaleString('en-IN')} students</strong><span>20,000</span></div>
                </div>
              </div>
              <div className="roi-step">
                <span className="roi-stepnum">02</span>
                <div className="grow">
                  <div className="field-label">Which operations should we consolidate?</div>
                  <div className="roi-options">
                    {costs.map((c) => (
                      <button type="button" key={c.id} className={`roi-option ${selected.includes(c.id) ? 'on' : ''}`} onClick={() => toggle(c.id)}>
                        <span className="checkmini">{selected.includes(c.id) ? '✓' : ''}</span>{c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="roi-step">
                <span className="roi-stepnum">03</span>
                <div className="grow">
                  <label className="switchrow">
                    <input type="checkbox" checked={hostel} onChange={(e) => setHostel(e.target.checked)} />
                    <span className="switch" />
                    <span><strong>We manage hostels or residences</strong><small>Includes occupancy, mess and room allocation savings.</small></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="roi-result panel-dark">
              <Eyebrow>Your indicative impact</Eyebrow>
              <div className="roi-big">₹{(result.annual / 100000).toFixed(1)}<span>L</span></div>
              <p className="roi-caption">estimated annual operational saving</p>
              <div className="roi-stats">
                <div><strong>{result.hours.toLocaleString('en-IN')}</strong><span>staff hours returned / year</span></div>
                <div><strong>{result.payback} wks</strong><span>typical payback period</span></div>
                <div><strong>{result.coverage}%</strong><span>of routine work consolidated</span></div>
              </div>
              <div className="roi-bar"><i style={{ width: `${result.coverage}%` }} /></div>
              <div className="roi-disclaimer">Estimates are directional, based on benchmarks from institutions of a similar size. Your actual results will vary with scope and deployment.</div>
              <Btn to="/book-demo" variant="coral" icon>Get a personalised estimate</Btn>
            </div>
          </div>
          <div className="roi-note">
            <CheckList title="What gets counted" items={['Manual reconciliation across registers and spreadsheets', 'Duplicate follow-ups for fees and documents', 'Reporting time for leadership and accreditation', 'Integration and training effort during rollout']} />
            <CheckList title="What we do not count" items={['One-time data migration charges', 'Third-party payment gateway fees', 'Hardware or device procurement', 'Change-management effort inside your teams']} />
          </div>
        </div>
      </section>
    </>
  );
}

const systemsList = systems.map((s) => s.name);

export function BookDemo() {
  useScrollTop();
  const [tab, setTab] = useState('institution');
  const [form, setForm] = useState({ name: '', email: '', phone: '', institution: '', country: '', role: '', students: '', timeline: '', systems: [], message: '' });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const set = (key, value) => { setForm((f) => ({ ...f, [key]: value })); setErrors((e) => ({ ...e, [key]: '' })); };
  const toggleSystem = (name) => set('systems', form.systems.includes(name) ? form.systems.filter((s) => s !== name) : [...form.systems, name]);

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Enter a valid work email.';
    if (!/^\d{7,15}$/.test(form.phone.replace(/\D/g, ''))) err.phone = 'Enter a valid phone number.';
    if (!form.institution.trim()) err.institution = tab === 'consultant' ? 'Enter your consultancy name.' : 'Enter your institution name.';
    if (!form.country) err.country = 'Select a country.';
    if (!form.systems.length) err.systems = 'Pick at least one area.';
    setErrors(err);
    if (Object.keys(err).length === 0) setDone(true);
  };

  if (done) return (
    <section className="section demo-success">
      <div className="container">
        <div className="panel success-card">
          <div className="success-icon">✓</div>
          <Eyebrow>Request received</Eyebrow>
          <h1>Thank you, {form.name.split(' ')[0]}.</h1>
          <p>Our {tab === 'consultant' ? 'partnerships' : 'solutions'} team will reach out at <strong>{form.email}</strong> within one business day with a tailored walkthrough of {form.systems.join(', ')}.</p>
          <div className="row gap wrap">
            <Btn to="/platform" variant="coral">Explore the platform</Btn>
            <Btn to="/" variant="outline">Back to home</Btn>
          </div>
          <button className="textlink" onClick={() => { setDone(false); setForm({ name: '', email: '', phone: '', institution: '', country: '', role: '', students: '', timeline: '', systems: [], message: '' }); }}>Submit another request</button>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <PageHero
        eyebrow="Book a demo"
        title={<>See Campx in your <em>context.</em></>}
        sub="A 30-minute, no-obligation walkthrough built around your institution's actual workflows. No generic pitch decks."
      />
      <section className="section demo-section">
        <div className="container">
          <div className="demo-layout">
            <div className="demo-aside">
              <div className="panel">
                <Eyebrow>What to expect</Eyebrow>
                <h3>A conversation about your reality.</h3>
                <CheckList simple items={['A tailored demo of the systems you care about', 'An honest discussion of fit, timelines and pricing', 'Answers on data migration, security and integrations', 'A clear next step — whether or not you buy']} />
                <div className="demo-contact">
                  <span>Prefer to talk now?</span>
                  <a href="tel:+919700023336">+91 97000 23336</a>
                  <a href="mailto:hello@campx.in">hello@campx.in</a>
                </div>
              </div>
            </div>
            <form className="panel demo-form" onSubmit={submit} noValidate>
              <div className="segmented">
                <button type="button" className={tab === 'institution' ? 'on' : ''} onClick={() => setTab('institution')}>I'm an institution</button>
                <button type="button" className={tab === 'consultant' ? 'on' : ''} onClick={() => setTab('consultant')}>I'm a consultant</button>
              </div>
              <div className="form-grid">
                <Field label="Full name" value={form.name} onChange={(v) => set('name', v)} placeholder="Your name" error={errors.name} />
                <Field label="Work email" type="email" value={form.email} onChange={(v) => set('email', v)} placeholder="you@institution.edu" error={errors.email} />
                <Field label="Mobile number" value={form.phone} onChange={(v) => set('phone', v)} placeholder="10-digit number" error={errors.phone} />
                <Field label={tab === 'consultant' ? 'Consultancy name' : 'Institution name'} value={form.institution} onChange={(v) => set('institution', v)} placeholder={tab === 'consultant' ? 'Your firm' : 'Your institution'} error={errors.institution} />
                <SelectField label="Country" value={form.country} onChange={(v) => set('country', v)} options={[{ value: '', label: 'Select country' }, ...countries.map((c) => ({ value: c, label: c }))]} error={errors.country} />
                {tab === 'institution' ? (
                  <SelectField label="Your role" value={form.role} onChange={(v) => set('role', v)} options={[{ value: '', label: 'Select role' }, ...['Principal / Director', 'Administrator', 'IT head', 'Finance head', 'Academic head', 'Other'].map((r) => ({ value: r, label: r }))]} />
                ) : (
                  <SelectField label="Number of institutions you serve" value={form.students} onChange={(v) => set('students', v)} options={[{ value: '', label: 'Select range' }, ...['1–5', '6–20', '21–50', '50+'].map((r) => ({ value: r, label: r }))]} />
                )}
              </div>
              <div className="field">
                <label className="field-label">Which systems are you interested in?</label>
                <div className="chips">
                  {systemsList.map((name) => (
                    <button type="button" key={name} className={`chip ${form.systems.includes(name) ? 'on' : ''}`} onClick={() => toggleSystem(name)}>{name}</button>
                  ))}
                </div>
                {errors.systems && <small className="err">{errors.systems}</small>}
              </div>
              <SelectField label="Ideal start timeline" value={form.timeline} onChange={(v) => set('timeline', v)} options={[{ value: '', label: 'Select timeline' }, ...['Immediately', 'Within 1–3 months', 'This academic year', 'Just exploring'].map((t) => ({ value: t, label: t }))]} />
              <div className="field">
                <label className="field-label" htmlFor="demo-msg">Anything else we should know? <span>(optional)</span></label>
                <textarea id="demo-msg" rows="4" value={form.message} onChange={(e) => set('message', e.target.value)} placeholder="Tell us about your campus, challenges or goals..." />
              </div>
              <label className="switchrow consent">
                <input type="checkbox" defaultChecked />
                <span className="switch" />
                <span><strong>Keep me updated</strong><small>Send occasional product news. You can unsubscribe anytime.</small></span>
              </label>
              <Btn type="submit" variant="coral" icon>Request my demo</Btn>
              <p className="form-foot">By submitting, you agree to our <Link to="/privacy-policy">Privacy Policy</Link>. We'll never share your details.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
