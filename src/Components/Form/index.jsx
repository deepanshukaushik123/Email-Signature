import React, { useRef, useState } from 'react'
import './style.css'
import Signature from '../Signature/index'
import Signature2 from '../Signature 2/index'
import Signature3 from '../Signature 3/index'

const Index = () => {
    const [name, setName] = useState()
    const [designation, setDesignation] = useState()
    const [companyName, setCompanyName] = useState("Nexgen Tech Solutions")
    const [phone, setPhone] = useState()
    const [companyLogo, setCompanyLogo] = useState("https://nexgentechsolutions.com/wp-content/uploads/2024/08/NexGen-Logo_color.png")
    const [email, setEmail] = useState()
    const [website, setWebsite] = useState("www.nexgentechsolutions.com")
    const [facebook, setFacebook] = useState("https://www.facebook.com/nexgeniotsolutions")
    const [linkedin, setLinkedin] = useState("https://www.linkedin.com/company/nexgen-techsolutions")
    const [twitter, setTwitter] = useState("https://x.com/i/flow/login?redirect_after_login=%2Fnexgeniots")

    const signatureRef = useRef(null);

    // const copyToClipboard = () => {
    //     if (signatureRef.current) {
    //         const signatureHTML = signatureRef.current.innerHTML;
    //         navigator.clipboard.writeText(signatureHTML).then(() => {
    //             alert('Signature copied to clipboard!');
    //         }).catch(err => {
    //             console.error('Failed to copy: ', err);
    //         });
    //     }
    // };
    return (
        <>
            <div className="appContainer">
                <h1 style={{color: 'black'}}>Email Signature Creator</h1>
                
                <div className="form">

                    <div className="input-field">
                        <label className="label">Name</label>
                        <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <label className="label">Designation</label>
                        <input type="text" className="input" value={designation} onChange={(e) => setDesignation(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <label className="label">Company Name</label>
                        <input type="text" className="input" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <label className="label">Company Logo URL</label>
                        <input type="url" className="input" value={companyLogo} onChange={(e) => setCompanyLogo(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <label className="label">Email</label>
                        <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <label className="label">Website</label>
                        <input type="url" className="input" value={website} onChange={(e) => setWebsite(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <label className="label">Phone Number</label>
                        <input type="text" className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <label className="label">Facebook Profile Link</label>
                        <input type="url" className="input" value={facebook} onChange={(e) => setFacebook(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <label className="label">LinkedIn Profile Link</label>
                        <input type="url" className="input" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                    </div>

                    <div className="input-field">
                        <label className="label">Twitter Profile Link</label>
                        <input type="url" className="input" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
                    </div>
                </div>
                <div className="preview-container">
                <div className="preview" ref={signatureRef}>
                        <Signature
                            name={name}
                            designation={designation}
                            companyName={companyName}
                            companyLogo={companyLogo}
                            email={email}
                            website={website}
                            phone={phone}
                            facebook={facebook}
                            linkedin={linkedin}
                            twitter={twitter}
                        />
                </div>
                <div className="preview">
                <Signature2
                            name={name}
                            designation={designation}
                            companyName={companyName}
                            companyLogo={companyLogo}
                            email={email}
                            website={website}
                            phone={phone}
                            facebook={facebook}
                            linkedin={linkedin}
                            twitter={twitter}
                        />
                </div>
                <div className="preview">
                <Signature3
                            name={name}
                            designation={designation}
                            companyName={companyName}
                            companyLogo={companyLogo}
                            email={email}
                            website={website}
                            phone={phone}
                            facebook={facebook}
                            linkedin={linkedin}
                            twitter={twitter}
                        />
                </div>
                </div>
            </div>
        </>
    )
}

export default Index