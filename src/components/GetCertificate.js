import React from "react";
const GetCertificate = (props) => {
    return (
        <div class="page-login">
            <div class="ui centered grid container">
                <div class="nine wide column">
                    <div class="ui icon message">
                        <div class="content">
                            <p>
                                Please provide your details to <em>fetch</em> the certificate
                            </p>
                        </div>
                    </div>
                    <div class="ui fluid card">
                        <div class="content">
                            <form class="ui form">
                                <div class="field">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                    />
                                </div>
                                <div class="field">
                                    <label>University</label>
                                    <input
                                        type="text"
                                        name="university"
                                        placeholder="University"
                                    />
                                </div>
                                <div class="field">
                                    <label>Event Code</label>
                                    <input
                                        type="text"
                                        name="eventCode"
                                        placeholder="Event Code"
                                    />
                                </div>
                                <div class="field">
                                    <label>Participant Id</label> 
                                    <input
                                        type="text"
                                        name="participantId"
                                        placeholder="Participant Id"
                                    />
                                </div>
                                <button
                                    class="ui teal labeled fluid icon button"
                                >
                                    <i class="download icon"></i>
                                    Fetch
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GetCertificate;
