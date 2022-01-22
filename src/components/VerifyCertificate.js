import React from "react";
const VerifyCertificate = (props)=>{
 
    return (
        <div class="page-login">
            <div class="ui centered grid container">
                <div class="nine wide column">
                    <div class="ui icon message">
                        <div class="content">
                            <p>
                                Please provide your details to <em>verify</em> the certificate
                            </p>
                        </div>
                    </div>
                    <div class="ui fluid card">
                        <div class="content">
                            <form class="ui form">
                                <div class="field">
                                    <label>UID Number</label>
                                    <input
                                        type="text"
                                        name="uid"
                                        placeholder="UID Number"
                                    />
                                </div>
                                <button
                                    class="ui teal labeled fluid icon button"
                                >
                                    <i class="check circle icon"></i>
                                    Verify
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default VerifyCertificate;