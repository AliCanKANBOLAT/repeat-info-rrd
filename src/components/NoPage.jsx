import React from 'react';

const NoPage = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4">
                        <h1 className="text-center mb-4">404</h1>
                        <p className="text-center">Aradığınız sayfa bulunamadı.</p>
                        <p className="text-center">Lütfen doğru URL'yi kontrol edin veya ana sayfaya dönün.</p>
                        <div className="text-center mt-4">
                            <button className="btn btn-primary" onClick={() => window.history.back()}>Geri Dön</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NoPage;
