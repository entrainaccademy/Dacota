import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Compass, Headphones, PackageCheck, Wrench } from 'lucide-react';

const capabilities = [
  { number: '01', title: 'Equipment supply', text: 'Commercial cooking equipment selected around your menu, volume, and operating model.', icon: PackageCheck },
  { number: '02', title: 'Installation', text: 'Careful placement, utility connections, testing, and commissioning by experienced technicians.', icon: Wrench },
  { number: '03', title: 'Kitchen planning', text: 'Practical layouts that make movement, service, ventilation, and production flow better.', icon: Compass },
  { number: '04', title: 'Ongoing support', text: 'Preventive maintenance, breakdown response, and access to the right spare parts.', icon: Headphones },
];

const principles = [
  ['Built for the real shift', 'We choose materials and components for long service hours, not showroom appeal.'],
  ['Useful before impressive', 'Every detail should make the kitchen safer, faster, or easier to maintain.'],
  ['Present after handover', 'Our responsibility continues through training, service, and day-to-day support.'],
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-shell about-hero-grid">
          <motion.div className="about-hero-copy" initial="hidden" animate="visible" transition={{ staggerChildren: 0.1 }}>
            <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }}>Kitchens work better<br />when the <em>equipment does.</em></motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.7 }} className="about-lead">We design, supply, and support commercial kitchen equipment for teams who need their operation to perform—day after day, service after service.</motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="about-hero-actions">
              <Link to="/request-quote" className="about-primary-link">Start a project <ArrowUpRight size={17} /></Link>
              <Link to="/products" className="about-text-link">Explore equipment <ArrowUpRight size={15} /></Link>
            </motion.div>
            <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="about-hero-capabilities">
              <span>Equipment supply</span><i />
              <span>Installation</span><i />
              <span>Kitchen planning</span><i />
              <span>Maintenance</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="about-story about-shell">
        <div className="about-story-grid about-story-grid-no-label">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
          >
            A dependable kitchen is never an accident.
          </motion.h2>
          <motion.div
            className="about-story-copy"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="about-dropcap">DACOTA began with a straightforward idea: commercial kitchens deserve equipment partners who understand what happens after the drawings are approved and the doors open.</p>
            <p>Since 2021, we have focused on the working realities of food service—heat, volume, tight timelines, demanding menus, and no room for downtime. That perspective shapes everything from the machines we recommend to the way we install and maintain them.</p>
            <div className="about-proof-row">
              <div><strong>2021</strong><span>Year established</span></div>
              <div><strong>4</strong><span>End-to-end services</span></div>
              <div><strong>Pan India</strong><span>Project capability</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-capabilities"><div className="about-shell">
        <div className="about-section-label about-section-label-light"><span>02</span> What we do</div>
        <div className="about-capabilities-heading"><h2>From equipment selection<br />to the first service.</h2><p>One accountable team across the entire kitchen journey.</p></div>
        <div className="about-capability-list">{capabilities.map((item, index) => { const Icon = item.icon; return (
          <motion.article key={item.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.55, delay: index * 0.08 }} whileHover={{ y: -6 }}>
            <div className="about-capability-top"><span>{item.number}</span><Icon size={22} /></div><h3>{item.title}</h3><p>{item.text}</p>
          </motion.article>); })}</div>
      </div></section>

      <section className="about-principles about-shell">
        <div className="about-section-label"><span>03</span> How we work</div>
        <div className="about-principles-grid">
          <div><h2>Practical thinking.<br />Precise execution.</h2><p>Three principles keep our decisions grounded.</p></div>
          <div className="about-principle-list">{principles.map(([title, text], index) => (
            <motion.div key={title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.08 }}>
              <span className="about-check"><Check size={15} /></span><div><h3>{title}</h3><p>{text}</p></div>
            </motion.div>))}</div>
        </div>
      </section>

      <section className="about-cta-wrap about-shell">
        <motion.div className="about-cta" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.7 }}>
          <div><span>Have a kitchen in mind?</span><h2>Let’s make it work.</h2></div><Link to="/request-quote" aria-label="Request a quote"><ArrowUpRight size={28} /></Link>
        </motion.div>
      </section>
    </main>
  );
};
export default About;
