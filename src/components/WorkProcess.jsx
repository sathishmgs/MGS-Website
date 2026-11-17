import {
  CheckCircle2,
  Code2,
  FileText,
  MessageSquare,
  Rocket,
} from 'lucide-react';
import { CLIENT_BENEFITS, WORK_PROCESS_STEPS } from '../data/portfolioData';

const STEP_ICONS = {
  MessageSquare,
  FileText,
  Code2,
  Rocket,
};

export default function WorkProcess() {
  return (
    <section id="process" className="section section--process reveal" aria-labelledby="process-heading">
      <div className="section-bg-effect" aria-hidden="true" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Simple &amp; Transparent</span>
          <h2 id="process-heading" className="section-title">
            How We Work With <span className="text-gradient">Our Clients</span>
          </h2>
          <p className="section-subtitle">
            Getting your website or software built shouldn&apos;t be stressful. We follow a simple 4-step
            process with regular updates and zero technical confusion.
          </p>
        </div>

        {/* Process Steps Cards */}
        <div className="process-grid">
          {WORK_PROCESS_STEPS.map((stepItem, index) => {
            const Icon = STEP_ICONS[stepItem.icon] || Code2;
            return (
              <div key={stepItem.step} className="process-card glass-card">
                <div className="process-card__header">
                  <span className="process-card__number">{stepItem.step}</span>
                  <div className="process-card__icon-wrap" aria-hidden="true">
                    <Icon size={20} className="process-card__icon" />
                  </div>
                </div>

                <span className="process-card__tag">Step {index + 1}</span>
                <h3 className="process-card__title">{stepItem.title}</h3>
                {stepItem.tamilTitle && (
                  <span className="process-card__tamil">{stepItem.tamilTitle}</span>
                )}
                <p className="process-card__desc">{stepItem.description}</p>

                <div className="process-card__bar" aria-hidden="true" />
              </div>
            );
          })}
        </div>

        {/* Why Clients Choose MGS */}
        <div className="benefits-section">
          <div className="section-header section-header--centered">
            <span className="section-eyebrow">Client Guarantees</span>
            <h3 className="section-title">
              Why Businesses Choose <span className="text-gradient">MGS</span>
            </h3>
            <p className="section-subtitle">
              We focus on practical, hassle-free solutions that actually help your shop or company grow.
            </p>
          </div>

          <div className="benefits-grid">
            {CLIENT_BENEFITS.map((benefit) => (
              <div key={benefit.title} className="benefit-card glass-card">
                <div className="benefit-card__icon-wrap">
                  <CheckCircle2 size={22} className="text-cyan" />
                </div>
                <div>
                  <h4 className="benefit-card__title">{benefit.title}</h4>
                  <p className="benefit-card__desc">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
