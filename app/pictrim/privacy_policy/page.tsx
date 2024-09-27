import React from 'react'
export async function generateMetadata() {
    return {
        title: "PicTrim - Privacy Policy",
        description: "PicTrim does not collect or store any personal information from users. We track the number of image exports users perform through the use of tickets. This data is stored locally on your device and will be lost if you uninstall the app.",
    };
}
const page = () => {
    return (
        <body>
            <div className={"max-w-3xl m-auto prose lg:prose-xl py-10"}>
                <h1 id="privacy-policy" className={"text-3xl font-bold mb-3"}>Privacy Policy</h1>
                <p>
                    <strong>Effective Date:</strong> 27-09-2024 (dd-mm-yyyy)
                </p>
                <p>
                    At PicTrim, we value your privacy. This Privacy Policy outlines how we
                    collect, use, and protect your information.
                </p>
                <h2 id="1-information-we-collect">1. Information We Collect</h2>
                <ul>
                    <li>
                        <strong>User Data:</strong> We do not collect or store any personal
                        information from users.
                    </li>
                    <li>
                        <strong>Usage Data:</strong> We track the number of image exports users
                        perform through the use of tickets. This data is stored locally on your
                        device and will be lost if you uninstall the app.
                    </li>
                </ul>
                <h2 id="2-how-we-use-your-information">2. How We Use Your Information</h2>
                <ul>
                    <li>
                        <strong>Image Exports:</strong> Each image export consumes one ticket.
                        Users can earn tickets by watching ads or purchasing them through in-app
                        transactions.
                    </li>
                </ul>
                <h2 id="3-data-storage">3. Data Storage</h2>
                <ul>
                    <li>
                        All data related to image exports and ticket usage is stored locally on
                        your device and is not stored on any servers. If you uninstall the PicTrim
                        app, all stored data on the device will be lost.
                    </li>
                </ul>
                <h2 id="4-security">4. Security</h2>
                <ul>
                    <li>
                        We take reasonable measures to protect your data, but please note that no
                        method of transmission over the internet or method of electronic storage
                        is 100% secure.
                    </li>
                </ul>
                <h2 id="5-childrens-privacy">5. Children&apos;s Privacy</h2>
                <ul>
                    <li>
                        Our application is not intended for children under the age of 13. We do
                        not knowingly collect personal information from children under 13.
                    </li>
                </ul>
                <h2 id="6-changes-to-this-privacy-policy">
                    6. Changes to This Privacy Policy
                </h2>
                <ul>
                    <li>
                        We may update this Privacy Policy from time to time. Any changes will be
                        posted on this page with an updated effective date.
                    </li>
                </ul>
                <h2 id="7-contact-us">7. Contact Us</h2>
                <ul>
                    <li>
                        If you have any questions about this Privacy Policy, please contact us at{" "}
                        <a href="mailto:contact.ducnv@gmail.com">contact.ducnv@gmail.com</a>.
                    </li>
                </ul>
            </div>
            <footer className={"text-center py-5"}>
                <p>© 2024 PicTrim. All Rights Reserved.</p>
            </footer>
        </body>

    )
}

export default page