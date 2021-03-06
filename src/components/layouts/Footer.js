import React from 'react'

// جسم العنصر
const Footer = () => {

    return (
        // الكود الأسفل هو كود
        // jsx
        // وهو مزيج بين الجافاسكريبت و اتش تي ام ال
        <div className="full-footer">
        <div className="footer">
            <div className="footer-container">
                
                <div className="footer-list">
                    <ul>
                        <li>Policy and Privacy</li>

                    </ul>
                </div>
                <div className="footer-list">
                    <ul>
                        <li>Learn More</li>
                        
                    </ul>
                </div>
                <div className="footer-icon-list">
                    <ul>
                        <li style={{fontWeight:'bolder'}}>ContactUs</li>
                        <li><i className="fa-2x fa fa-facebook-square" style={{color:'#1877f2'}}/></li>
                        <li><i className="fa-2x fa fa-telegram"style={{color:'#0088cc'}} /></li>
                        <li><i className="fa-2x fab fa-instagram-square"style={{color:'#c32aa3'}} /></li>
                    </ul>
                </div>

                


            </div>
            
            </div>
            <div className="footer-end">
            <p> 2021 All Rights Reserved </p>
            
            </div>
        </div>
    )
}
// تصدير العنصر ليتم استخدامه في أي مكان ضمن المشروع
export default Footer
