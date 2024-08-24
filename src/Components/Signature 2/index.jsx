import React, { useRef } from 'react';

const Index = ({
    name,
    designation,
    companyName,
    companyLogo,
    email,
    website,
    phone,
    facebook,
    linkedin,
    twitter
}) => {
    const contentRef = useRef(null);
    // Helper function to ensure the URL has 'https://'
  const ensureHttps = (url) => {
    if (!url) return '';
    return url.startsWith('https://') ? url : `https://${url}`;
  };

  const fullWebsiteURL = ensureHttps(website);

    const copyToClipboard = () => {
        if (contentRef.current) {
            const range = document.createRange();
            range.selectNode(contentRef.current);
            window.getSelection().removeAllRanges(); // Clear current selection
            window.getSelection().addRange(range); // Select the content
            try {
                document.execCommand('copy'); // Copy the selection to clipboard
                alert('HTML copied to clipboard!');
            } catch (err) {
                alert('Failed to copy HTML. Please use Ctrl+C.');
            }
            window.getSelection().removeAllRanges(); // Clear the selection
        }
    };

    return (

        <div>
            <button onClick={copyToClipboard} style={{ marginBottom: '40px', height: "2.5em", color: 'white', backgroundColor: 'green', border: 'none', cursor: 'pointer' }}>
                Copy Signature
            </button>
            <table ref={contentRef} cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'separate', width: '100%', textAlign: 'left' }}>
                <tbody>
                    <tr>
                        <td style={{ padding: '0 1px 0 0' }}>
                            <table cellPadding="0" cellSpacing="0" border="0" style={{ borderCollapse: 'separate' }}>
                                <tbody>
                                    <tr>
                                        <td align="center" style={{ padding: '0 14px 0 0', verticalAlign: 'top' }}>
                                            <table cellPadding="0" cellSpacing="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ padding: '0 1px 0 0' }}>
                                                            <p style={{ margin: '1px' }}>
                                                                <a href={fullWebsiteURL}>
                                                                    <img
                                                                        src={companyLogo}
                                                                        alt={`${companyName} Logo`}
                                                                        width="100"
                                                                        height="77"
                                                                        style={{ display: 'block', border: '0', maxWidth: '100px' }}
                                                                    />
                                                                </a>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                        <td style={{ padding: '1px 0 0', borderRight: '1px solid rgb(0,0,0)' }}></td>
                                        <td style={{ padding: '0 1px 0 14px', verticalAlign: 'top' }}>
                                            <table cellPadding="0" cellSpacing="0" border="0">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ padding: '0 1px 8px 0', fontFamily: 'Arial, sans-serif', fontSize: '13px', lineHeight: '15px', whiteSpace: 'nowrap' }}>
                                                            <p style={{
                                                                fontFamily: 'Arial, sans-serif', display: 'flex',
                                                                alignItems: 'left', fontSize: '13px', lineHeight: '15px', fontWeight: '700', color: 'rgb(0,0,0)', margin: '1px'
                                                            }}>
                                                                {name}
                                                            </p>
                                                            <p style={{
                                                                fontFamily: 'Arial, sans-serif', display: 'flex',
                                                                alignItems: 'left', fontSize: '13px', lineHeight: '15px', color: 'rgb(136,136,136)', margin: '1px'
                                                            }}>
                                                                {designation}
                                                            </p>
                                                            <p style={{
                                                                fontFamily: 'Arial, sans-serif', display: 'flex',
                                                                alignItems: 'left', fontSize: '13px', lineHeight: '15px', color: 'rgb(136,136,136)', margin: '1px'
                                                            }}>
                                                                {companyName}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ padding: '0 1px 0 0' }}>
                                                            <table cellPadding="0" cellSpacing="0" border="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td valign="middle" style={{ padding: '1px 5px 1px 0', verticalAlign: 'middle' }}>
                                                                            <p style={{ margin: '1px' }}>
                                                                                <img
                                                                                    src="https://nexgentechsolutions.com/wp-content/uploads/2024/08/emailIcon.png"
                                                                                    alt="Email Icon"
                                                                                    width="14"
                                                                                    height="14"
                                                                                    style={{ display: 'block', border: '0', width: '14px', height: '14px' }}
                                                                                />
                                                                            </p>
                                                                        </td>
                                                                        <td style={{ lineHeight: '15px', padding: '1px 0', verticalAlign: 'middle' }}>
                                                                            <p style={{ margin: '1px' }}>
                                                                                <a href={`mailto:${email}`} style={{
                                                                                    fontFamily: 'Arial, sans-serif', display: 'flex',
                                                                                    alignItems: 'left', fontSize: '13px', lineHeight: '15px', color: 'rgb(136,136,136)', textDecoration: 'none'
                                                                                }}>
                                                                                    {email}
                                                                                </a>
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td valign="middle" style={{ padding: '1px 5px 1px 0', verticalAlign: 'middle' }}>
                                                                            <p style={{ margin: '1px' }}>
                                                                                <img
                                                                                    src="https://nexgentechsolutions.com/wp-content/uploads/2024/08/phoneIcon.png"
                                                                                    alt="Phone Icon"
                                                                                    width="14"
                                                                                    height="14"
                                                                                    style={{ display: 'block', border: '0', width: '14px', height: '14px' }}
                                                                                />
                                                                            </p>
                                                                        </td>
                                                                        <td style={{ lineHeight: '15px', padding: '1px 0', verticalAlign: 'middle' }}>
                                                                            <p style={{ margin: '1px' }}>
                                                                                <a href={`tel:${phone}`} style={{
                                                                                    fontFamily: 'Arial, sans-serif', display: 'flex',
                                                                                    alignItems: 'left', fontSize: '13px', lineHeight: '15px', color: 'rgb(136,136,136)', textDecoration: 'none'
                                                                                }}>
                                                                                    {phone}
                                                                                </a>
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td valign="middle" style={{ padding: '1px 5px 1px 0', verticalAlign: 'middle' }}>
                                                                            <p style={{ margin: '1px' }}>
                                                                                <img
                                                                                    src="https://nexgentechsolutions.com/wp-content/uploads/2024/08/linkIcon.png"
                                                                                    alt="Website Icon"
                                                                                    width="14"
                                                                                    height="14"
                                                                                    style={{ display: 'block', border: '0', width: '14px', height: '14px' }}
                                                                                />
                                                                            </p>
                                                                        </td>
                                                                        <td style={{ lineHeight: '15px', padding: '1px 0', verticalAlign: 'middle' }}>
                                                                            <p style={{ margin: '1px' }}>
                                                                                <a href={fullWebsiteURL} style={{
                                                                                    fontFamily: 'Arial, sans-serif', display: 'flex',
                                                                                    alignItems: 'left', fontSize: '13px', lineHeight: '15px', color: 'rgb(0,0,0)', fontWeight: '700', textDecoration: 'none'
                                                                                }}>
                                                                                    {website}
                                                                                </a>
                                                                            </p>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ padding: '0 1px 0 0' }}>
                                                            <table cellPadding="0" cellSpacing="0" border="0">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="19" style={{ fontSize: '0', lineHeight: '0', padding: '10px 1px 0 0' }}>
                                                                            <p style={{ margin: '1px' }}>
                                                                                <a href={facebook}>
                                                                                    <img
                                                                                        src="https://nexgentechsolutions.com/wp-content/uploads/2024/08/facebook_5968764-1.png"
                                                                                        alt="Facebook"
                                                                                        width="19"
                                                                                        height="19"
                                                                                        style={{ display: 'block', border: '0', width: '19px', height: '19px' }}
                                                                                    />
                                                                                </a>
                                                                            </p>
                                                                        </td>
                                                                        <td width="2" style={{ padding: '0 0 1px' }}></td>
                                                                        <td width="19" style={{ fontSize: '0', lineHeight: '0', padding: '10px 1px 0 0' }}>
                                                                            <p style={{ margin: '1px' }}>
                                                                                <a href={linkedin}>
                                                                                    <img
                                                                                        src="https://nexgentechsolutions.com/wp-content/uploads/2024/08/linkedin_3670045-1.png"
                                                                                        alt="LinkedIn"
                                                                                        width="19"
                                                                                        height="19"
                                                                                        style={{ display: 'block', border: '0', width: '19px', height: '19px' }}
                                                                                    />
                                                                                </a>
                                                                            </p>
                                                                        </td>
                                                                        <td width="2" style={{ padding: '0 0 1px' }}></td>
                                                                        <td width="19" style={{ fontSize: '0', lineHeight: '0', padding: '10px 1px 0 0' }}>
                                                                            <p style={{ margin: '1px' }}>
                                                                                <a href={twitter}>
                                                                                    <img
                                                                                        src="https://nexgentechsolutions.com/wp-content/uploads/2024/08/twitter_5969020-1.png"
                                                                                        alt="Twitter"
                                                                                        width="19"
                                                                                        height="19"
                                                                                        style={{ display: 'block', border: '0', width: '19px', height: '19px' }}
                                                                                    />
                                                                                </a>
                                                                            </p>
                                                                        </td>
                                                                        <td width="2" style={{ padding: '0 0 1px' }}></td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ padding: '0 1px 0 0' }}>
                            <table cellPadding="0" cellSpacing="0" border="0" style={{ maxWidth: '600px' }}>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '12px 1px 0 0', fontFamily: 'Arial, sans-serif', fontSize: '10px', lineHeight: '12px', color: 'rgb(136,136,136)', textAlign: 'justify'  }}>
                                            <p style={{ margin: '1px' }}>
                                                The content of this email is confidential and intended for the recipient specified in the message only. It is strictly forbidden to share any part of this message with any third party, without written consent from the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Index;
