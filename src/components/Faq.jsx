import React from 'react'

const Faq = () => {
    return (
        <>
            <div className="accordion-with-tab-section mb-90">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-6">
                            <div className="accordion-image">
                                <img src="assets/image/accordion-image.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="accordion-with-tab-content">
                                <h2>Why You Should Choose Our Visa Services.</h2>
                                <div className="accordion-with-tab-wrap">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Visa</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Flight</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Hotel</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                                            <div className="faq-content">
                                                <div className="accordion" id="accordionGeneral">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="faqheadingOne">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseOne" aria-expanded="true" aria-controls="faqcollapseOne">
                                                                01. How do I book a Visa with your agency?
                                                            </button>
                                                        </h2>
                                                        <div id="faqcollapseOne" className="accordion-collapse collapse show" aria-labelledby="faqheadingOne" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                                per inci auctor tol euismod sit amet non ipsul growing this
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="faqheadingTwo">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseTwo" aria-expanded="false" aria-controls="faqcollapseTwo">
                                                                02. What payment methods do you accept?
                                                            </button>
                                                        </h2>
                                                        <div id="faqcollapseTwo" className="accordion-collapse collapse" aria-labelledby="faqheadingTwo" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                                per inci auctor tol euismod sit amet non ipsul growing this
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="faqheadingThree">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseThree" aria-expanded="false" aria-controls="faqcollapseThree">
                                                                03. What is your cancellation policy?
                                                            </button>
                                                        </h2>
                                                        <div id="faqcollapseThree" className="accordion-collapse collapse" aria-labelledby="faqheadingThree" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                                per inci auctor tol euismod sit amet non ipsul growing this
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="faqheadingFour">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseFour" aria-expanded="false" aria-controls="faqcollapseFour">
                                                                04. Can I make changes my reservation after booking?
                                                            </button>
                                                        </h2>
                                                        <div id="faqcollapseFour" className="accordion-collapse collapse" aria-labelledby="faqheadingFour" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                                per inci auctor tol euismod sit amet non ipsul growing this
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                                            <div className="faq-content">
                                                <div className="accordion" id="accordionGeneral">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="faqheadingOne">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseOne" aria-expanded="true" aria-controls="faqcollapseOne">
                                                                01. How do I book a Visa with your agency?
                                                            </button>
                                                        </h2>
                                                        <div id="faqcollapseOne" className="accordion-collapse collapse show" aria-labelledby="faqheadingOne" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                                per inci auctor tol euismod sit amet non ipsul growing this
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="faqheadingTwo">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseTwo" aria-expanded="false" aria-controls="faqcollapseTwo">
                                                                02. What payment methods do you accept?
                                                            </button>
                                                        </h2>
                                                        <div id="faqcollapseTwo" className="accordion-collapse collapse" aria-labelledby="faqheadingTwo" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                                per inci auctor tol euismod sit amet non ipsul growing this
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="faqheadingThree">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseThree" aria-expanded="false" aria-controls="faqcollapseThree">
                                                                03. What is your cancellation policy?
                                                            </button>
                                                        </h2>
                                                        <div id="faqcollapseThree" className="accordion-collapse collapse" aria-labelledby="faqheadingThree" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                                per inci auctor tol euismod sit amet non ipsul growing this
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="faqheadingFour">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseFour" aria-expanded="false" aria-controls="faqcollapseFour">
                                                                04. Can I make changes my reservation after booking?
                                                            </button>
                                                        </h2>
                                                        <div id="faqcollapseFour" className="accordion-collapse collapse" aria-labelledby="faqheadingFour" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                                per inci auctor tol euismod sit amet non ipsul growing this
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                                            <div className="faq-content">
                                                <div className="accordion" id="accordionGeneral">
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="faqheadingOne">
                                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseOne" aria-expanded="true" aria-controls="faqcollapseOne">
                                                                01. How do I book a Visa with your agency?
                                                            </button>
                                                        </h2>
                                                        <div id="faqcollapseOne" className="accordion-collapse collapse show" aria-labelledby="faqheadingOne" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                                per inci auctor tol euismod sit amet non ipsul growing this
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="faqheadingTwo">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseTwo" aria-expanded="false" aria-controls="faqcollapseTwo">
                                                                02. What payment methods do you accept?
                                                            </button>
                                                        </h2>
                                                        <div id="faqcollapseTwo" className="accordion-collapse collapse" aria-labelledby="faqheadingTwo" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                                per inci auctor tol euismod sit amet non ipsul growing this
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="faqheadingThree">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseThree" aria-expanded="false" aria-controls="faqcollapseThree">
                                                                03. What is your cancellation policy?
                                                            </button>
                                                        </h2>
                                                        <div id="faqcollapseThree" className="accordion-collapse collapse" aria-labelledby="faqheadingThree" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                                per inci auctor tol euismod sit amet non ipsul growing this
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item">
                                                        <h2 className="accordion-header" id="faqheadingFour">
                                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseFour" aria-expanded="false" aria-controls="faqcollapseFour">
                                                                04. Can I make changes my reservation after booking?
                                                            </button>
                                                        </h2>
                                                        <div id="faqcollapseFour" className="accordion-collapse collapse" aria-labelledby="faqheadingFour" data-bs-parent="#accordionGeneral">
                                                            <div className="accordion-body">
                                                                Aptent taciti sociosqu ad litora torquent per conubia nostra,
                                                                per inci auctor tol euismod sit amet non ipsul growing this
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Faq