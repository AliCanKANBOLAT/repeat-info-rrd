import React, { useState } from 'react';
import Footer from './Footer';

export default function Iletisim() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { firstName, lastName, feedback });
    setAlertMessage('Form gönderildi!');
    setFirstName('');
    setLastName('');
    setFeedback('');
    // 5 saniye sonra alertMessage'i temizle
    setTimeout(() => {
      setAlertMessage('');
    }, 5000);
  };

  const handleClear = () => {
    setFirstName('');
    setLastName('');
    setFeedback('');
  };

  const remainingChars = 500 - feedback.length;

  return (
    <div className="container mt-3">
      {alertMessage && (
        <div className="alert alert-info" role="alert">
          {alertMessage}
        </div>
      )}
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="firstName" className="form-label">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Ad..."
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="lastName" className="form-label">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Soyad..."
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="feedback" className="form-label">Feedback:</label>
                  <textarea
                    className="form-control"
                    id="feedback"
                    rows="5"
                    placeholder="Dilek, Öneri, Şikayet yazabilirsiniz. (En fazla 500 karakter girilebilir.)"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                  />
                  <small className="form-text text-muted">
                    {remainingChars} karakter kaldı
                  </small>
                </div>
                <button type="submit" className="btn btn-primary me-2">Gönder</button>
                <button type="button" className="btn btn-secondary" onClick={handleClear}>Sil</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
