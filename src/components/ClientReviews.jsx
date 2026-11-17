import { useState, useEffect } from 'react';
import {
  CheckCircle2,
  MessageSquare,
  PenSquare,
  Send,
  Sparkles,
  Star,
  UserCheck,
  X,
} from 'lucide-react';
import { INITIAL_CLIENT_REVIEWS } from '../data/portfolioData';

const STORAGE_KEY = 'mgs_client_reviews_data';

export default function ClientReviews() {
  const [reviews, setReviews] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return INITIAL_CLIENT_REVIEWS;
  });

  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [category, setCategory] = useState('Bike / Car Workshop');
  const [location, setLocation] = useState('Rajapalayam');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastSubmittedReview, setLastSubmittedReview] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
    } catch {
      // Ignore quota error
    }
  }, [reviews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      business: business.trim() || 'Business Owner',
      category: category.trim() || 'Client',
      location: location.trim() || 'Tamil Nadu',
      rating: Number(rating) || 5,
      date: 'Just now',
      comment: comment.trim(),
      verified: true,
    };

    setReviews([newReview, ...reviews]);
    setLastSubmittedReview(newReview);
    setFormSubmitted(true);

    // Reset inputs
    setName('');
    setBusiness('');
    setComment('');
  };

  const getWhatsAppShareUrl = (rev) => {
    const text = `Hi Sathish (MGS Freelance),%0A%0AI have posted a client review for your service:%0A%0A*Name:* ${encodeURIComponent(
      rev.name
    )}%0A*Business:* ${encodeURIComponent(rev.business)} (${encodeURIComponent(
      rev.category
    )})%0A*Rating:* ${'⭐'.repeat(rev.rating)} (${rev.rating}/5)%0A*Review:* %22${encodeURIComponent(
      rev.comment
    )}%22`;

    return `https://wa.me/917708691940?text=${text}`;
  };

  return (
    <section id="reviews" className="section section--reviews reveal" aria-labelledby="reviews-heading">
      <div className="section-bg-effect" aria-hidden="true" />
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-eyebrow">Client Feedback &amp; Reviews</span>
          <h2 id="reviews-heading" className="section-title">
            What Business Owners Say About <span className="text-gradient">MGS Freelance</span>
          </h2>
          <p className="section-subtitle">
            Genuine feedback and ratings from automobile workshops, retail shops, and businesses that use
            our custom software and websites.
          </p>
        </div>

        {/* Rating Summary Bar */}
        <div className="reviews-summary-bar glass-card">
          <div className="summary-score-group">
            <div className="score-number">5.0</div>
            <div className="score-details">
              <div className="stars-row" aria-label="5 out of 5 stars rating">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} className="star-filled" fill="currentColor" />
                ))}
              </div>
              <span className="score-label">100% Client Satisfaction &bull; Rajapalayam &amp; TN</span>
            </div>
          </div>

          <div className="summary-perks">
            <div className="summary-perk-item">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>Workshop &amp; Retail Ready</span>
            </div>
            <div className="summary-perk-item">
              <CheckCircle2 size={16} className="text-cyan" />
              <span>Dedicated Tamil &amp; English Support</span>
            </div>
          </div>

          <button
            type="button"
            className="btn btn--primary btn--sm review-post-trigger"
            onClick={() => {
              setFormOpen(true);
              setFormSubmitted(false);
            }}
          >
            <PenSquare size={16} aria-hidden="true" />
            <span>Write a Review / Feedback</span>
          </button>
        </div>

        {/* Post Review Form Modal / Inline Box */}
        {formOpen && (
          <div className="review-modal-backdrop" onClick={() => setFormOpen(false)}>
            <div className="review-modal glass-card" onClick={(e) => e.stopPropagation()}>
              <div className="review-modal__header">
                <div>
                  <h3 className="review-modal__title">Post Your Feedback / Review</h3>
                  <p className="review-modal__desc">
                    Share your experience with MGS Freelance websites or billing software.
                  </p>
                </div>
                <button
                  type="button"
                  className="modal-card__close"
                  onClick={() => setFormOpen(false)}
                  aria-label="Close form"
                >
                  <X size={18} />
                </button>
              </div>

              {formSubmitted ? (
                <div className="review-form-success">
                  <div className="success-icon-wrap">
                    <Sparkles size={28} className="text-cyan" />
                  </div>
                  <h4>Thank You For Your Feedback!</h4>
                  <p>Your review has been successfully added to the client testimonials list.</p>

                  {lastSubmittedReview && (
                    <div className="success-actions">
                      <a
                        href={getWhatsAppShareUrl(lastSubmittedReview)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--whatsapp btn--sm"
                      >
                        <MessageSquare size={16} />
                        <span>Send Also on WhatsApp</span>
                      </a>
                      <button
                        type="button"
                        className="btn btn--secondary btn--sm"
                        onClick={() => setFormOpen(false)}
                      >
                        <span>Done</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="review-form">
                  <div className="review-form__row">
                    <div className="review-form__field">
                      <label htmlFor="rev-name">Your Name *</label>
                      <input
                        id="rev-name"
                        type="text"
                        required
                        placeholder="e.g. K. Murugan"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="calc-input"
                      />
                    </div>
                    <div className="review-form__field">
                      <label htmlFor="rev-business">Shop / Business Name</label>
                      <input
                        id="rev-business"
                        type="text"
                        placeholder="e.g. Murugan Two-Wheeler Auto Care"
                        value={business}
                        onChange={(e) => setBusiness(e.target.value)}
                        className="calc-input"
                      />
                    </div>
                  </div>

                  <div className="review-form__row">
                    <div className="review-form__field">
                      <label htmlFor="rev-category">Business / Service Type</label>
                      <select
                        id="rev-category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="calc-input"
                      >
                        <option value="Two-Wheeler / Bike Workshop">Two-Wheeler / Bike Workshop</option>
                        <option value="Car Garage & Auto Care">Car Garage &amp; Auto Care</option>
                        <option value="Retail Store & POS Billing">Retail Store &amp; POS Billing</option>
                        <option value="E-Commerce & Online Store">E-Commerce &amp; Online Store</option>
                        <option value="Company / Business Website">Company / Business Website</option>
                        <option value="Logistics & Fleet Transport">Logistics &amp; Fleet Transport</option>
                        <option value="Other Business">Other Business</option>
                      </select>
                    </div>
                    <div className="review-form__field">
                      <label htmlFor="rev-location">Location / City</label>
                      <input
                        id="rev-location"
                        type="text"
                        placeholder="e.g. Rajapalayam, Sivakasi"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="calc-input"
                      />
                    </div>
                  </div>

                  <div className="review-form__field">
                    <label>Your Rating *</label>
                    <div className="star-rating-selector" role="radiogroup" aria-label="Select star rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="star-btn"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          aria-label={`${star} Stars`}
                        >
                          <Star
                            size={24}
                            className={
                              (hoverRating || rating) >= star ? 'star-filled' : 'star-empty'
                            }
                            fill={(hoverRating || rating) >= star ? 'currentColor' : 'none'}
                          />
                        </button>
                      ))}
                      <span className="rating-text-label">{rating} Out of 5 Stars</span>
                    </div>
                  </div>

                  <div className="review-form__field">
                    <label htmlFor="rev-comment">Your Feedback &amp; Review *</label>
                    <textarea
                      id="rev-comment"
                      required
                      rows={4}
                      placeholder="Tell us how the software or website helped your business..."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="calc-input"
                    />
                  </div>

                  <div className="review-form__actions">
                    <button type="submit" className="btn btn--primary btn--sm">
                      <Send size={15} />
                      <span>Submit Review</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn--ghost btn--sm"
                      onClick={() => setFormOpen(false)}
                    >
                      <span>Cancel</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((rev) => (
            <div key={rev.id} className="review-card glass-card">
              <div className="review-card__header">
                <div className="review-card__user">
                  <div className="review-card__avatar">
                    <span>{rev.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <div>
                    <h3 className="review-card__name">{rev.name}</h3>
                    <p className="review-card__business">{rev.business}</p>
                    <span className="review-card__location">{rev.location}</span>
                  </div>
                </div>

                <div className="review-card__meta">
                  <div className="review-card__stars" aria-label={`${rev.rating} stars`}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={14}
                        className={s <= rev.rating ? 'star-filled' : 'star-empty'}
                        fill={s <= rev.rating ? 'currentColor' : 'none'}
                      />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="review-verified-pill" title="Verified Customer">
                      <UserCheck size={11} aria-hidden="true" />
                      <span>Verified Client</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="review-card__tag">
                <span>{rev.category}</span>
              </div>

              <p className="review-card__comment">&ldquo;{rev.comment}&rdquo;</p>

              <div className="review-card__footer">
                <span className="review-card__date">{rev.date}</span>
                <a
                  href={getWhatsAppShareUrl(rev)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="review-card__whatsapp-ref"
                  title="Share or enquire about this feedback"
                >
                  <MessageSquare size={13} />
                  <span>Enquire</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
