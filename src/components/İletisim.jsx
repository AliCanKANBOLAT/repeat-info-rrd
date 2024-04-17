import React, { useState } from 'react';
import Footer from './Footer';

export default function Iletisim() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [alertType, setAlertType] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmitClear = (event) => {
    event.preventDefault();
    setFirstName('');
    setLastName('');
    setFeedback('');
    showAlert('success', 'Gönderildi...');
  };

  const showAlert = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setTimeout(() => {
      setAlertType('');
      setAlertMessage('');
    }, 3000);
  };

  // İsim girişlerinin güncellenmesi
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  // Geri bildirim metninin güncellenmesi
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  // Metin uzunluğunun kontrol edilmesi
  const remainingChars = 500 - feedback.length;

  // Form gönderme işlemi
  const handleSubmit = (event) => {
    event.preventDefault();
    // Gönderilecek işlemler burada gerçekleştirilir
    console.log('Form submitted:', { firstName, lastName, feedback });
    showAlert('info', 'Form gönderildi!');
  };

  return (
    <div className="container mt-5">
      {alertType && (
        <div className={`alert alert-${alertType}`} role="alert">
          {alertMessage}
        </div>
      )}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Ad..."
                    value={firstName}
                    onChange={handleFirstNameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Soyad..."
                    value={lastName}
                    onChange={handleLastNameChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="feedback">Feedback:</label>
                  <textarea
                    className="form-control"
                    id="feedback"
                    rows="5"
                    placeholder="Dilek, Öneri, Şikayet yazabilirsiniz. (En fazla 500 karakter girilebilir.)"
                    value={feedback}
                    onChange={handleFeedbackChange}
                    required
                  />
                  <small className="form-text text-muted">
                    {remainingChars} karakter kaldi
                  </small>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitClear}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
