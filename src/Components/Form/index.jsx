import React, { useRef, useState } from 'react'
import './style.css'
import Signature from '../Signature/index'

const Index = () => {
    const [name, setName] = useState()
    const [designation, setDesignation] = useState()
    const [companyName, setCompanyName] = useState("Nexgen Tech Solutions")
    const [phone, setPhone] = useState()
    const [companyLogo, setCompanyLogo] = useState("https://nexgentechsolutions.com/wp-content/uploads/2024/08/NexGen-Logo_color.png")
    const [email, setEmail] = useState()
    const [website, setWebsite] = useState("www.nexgentechsolutions.com/")
    const [facebook, setFacebook] = useState("https://www.facebook.com/nexgeniotsolutions")
    const [linkedin, setLinkedin] = useState("https://www.linkedin.com/company/nexgen-techsolutions")
    const [twitter, setTwitter] = useState("https://x.com/i/flow/login?redirect_after_login=%2Fnexgeniots")

    const signatureRef = useRef(null);

    const copyToClipboard = () => {
        if (signatureRef.current) {
            const signatureHTML = signatureRef.current.innerHTML;
            navigator.clipboard.writeText(signatureHTML).then(() => {
                alert('Signature copied to clipboard!');
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        }
    };
    return (
        <>
            <div className="appContainer">
                <h2>Email Signature Creator</h2>
                <div className="form">
                    <label className="label">Name</label>
                    <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} />

                    <label className="label">Designation</label>
                    <input type="text" className="input" value={designation} onChange={(e) => setDesignation(e.target.value)} />

                    <label className="label">Company Name</label>
                    <input type="text" className="input" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />

                    <label className="label">Company Logo URL</label>
                    <input type="text" className="input" value={companyLogo} onChange={(e) => setCompanyLogo(e.target.value)} />

                    <label className="label">Email</label>
                    <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label className="label">Website</label>
                    <input type="email" className="input" value={website} onChange={(e) => setWebsite(e.target.value)} />

                    <label className="label">Phone Number</label>
                    <input type="text" className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />

                    <label className="label">Facebook Profile Link</label>
                    <input type="text" className="input" value={facebook} onChange={(e) => setFacebook(e.target.value)} />

                    <label className="label">LinkedIn Profile Link</label>
                    <input type="text" className="input" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />

                    <label className="label">Twitter Profile Link</label>
                    <input type="text" className="input" value={twitter} onChange={(e) => setTwitter(e.target.value)} />
                </div>
                <div className="preview" ref={signatureRef}>
                    <Signature
                        name={name}
                        designation={designation}
                        companyName = {companyName}
                        companyLogo={companyLogo}
                        email={email}
                        website={website}
                        phone={phone}
                        facebook={facebook}
                        linkedin={linkedin}
                        twitter={twitter}
                    />
                </div>
                <div className="danger">
                    {/* <div dangerouslySetInnerHTML={{__html: <Signature
                     name={name}
                     designation={designation}
                     companyName = {companyName}
                     companyLogo={companyLogo}
                     email={email}
                     website={website}
                     phone={phone}
                     facebook={facebook}
                     linkedin={linkedin}
                     twitter={twitter}
                    />}}></div> */}
                    {/* <button onClick={copyToClipboard}>Copy Signature</button> */}
                </div>
            </div>
        </>
    )
}

export default Index