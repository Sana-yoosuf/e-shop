import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="decription-navigator">
                <div className="descriptionbox-nav-box">Description </div>
                <div className="descriptionbox-nav-box fade">Reviews (122) </div>
            </div>

            <div className="descriptionbox-description">
                <p>E-commerce (electronic commerce) is the activity of electronically
                    buying or selling products on online services or over the Internet.
                    E-commerce draws on technologies such as mobile commerce, electronic
                    funds transfer, supply chain management, Internet marketing, online
                    transaction processing, electronic data interchange (EDI),
                    inventory management systems, and automated data collection systems.
                    E-commerce is the largest sector of the electronics industry and is
                    in turn driven by the technological advances of the semiconductor industry.</p>

                <p>The term was coined and first employed by Robert Jacobson, Principal
                    Consultant to the California State Assembly's Utilities & Commerce
                    Committee, in the title and text of California's Electronic
                    Commerce Act, carried by the late Committee Chairwoman Gwen Moore (D-L.A.)
                    and enacted in 1984.</p>
            </div>
        </div>
    )
}

export default DescriptionBox