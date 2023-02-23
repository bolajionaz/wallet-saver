import React, {useState} from 'react'
import ModalDialog from '../Modal';

function FAQs (props) {

    // control states for FAQ modal
    const [showFAQ, setFAQShow] = useState(false);
    const handleFAQClose = () => setFAQShow(false);
    const handleFAQShow = () => setFAQShow(true);

    return (
        <>
            <div onClick={handleFAQShow}>
                FAQs
            </div>
            <ModalDialog modal_title = "FAQs"
                modal_content = {<div>
                                <strong>How do I use site?</strong><br/>
                                <p>Click, click, click</p>
                                <strong>Is the information displayed current?</strong><br/>
                                <p>But of course it is...</p>
                                <strong>Can I get your autograph please?!!!</strong><br/>
                                <p>Why yes, of course you can...</p>
                                </div>}
                show={showFAQ} 
                handleClose={handleFAQClose}
            />
        </>
    )
}

export default FAQs;