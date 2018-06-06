import React from "react";

export const title = "Resume";

class Page extends React.Component {
    render() {

        return (
            <div className="page-content">

                <div style={{display: "none"}}>
                    <button id="pdf-button">Download PDF Verson</button>
                </div>
                <script dangerouslySetInnerHTML={{__html: `
                

                    function addJspdf(callback) {
                        var jspdfId = "jspdf-script"
                        var existingJspdfScript = document.getElementById(jspdfId);
                        if (existingJspdfScript) {
                            console.log("jspdf is already there");
                            return;
                        }
                        var script = document.createElement('script');
                        script.id = jspdfId;
                        script.type = "text/javascript";
                        script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.debug.js";   
                        script.crossOrigin = "anonymous";
                        script.integrity = "sha384-CchuzHs077vGtfhGYl9Qtc7Vx64rXBXdIAZIPbItbNyWIRTdG0oYAqki3Ry13Yzu";
                        document.getElementsByTagName('head')[0].appendChild(script);
                        script.addEventListener("load", callback);
                    }
                    var pdfButton = document.getElementById("pdf-button");
                    pdfButton.addEventListener("click", function(event) {
                        console.log("button clicked");
                            addJspdf(function() {
                            var doc = new jsPDF();
                            var source = document.getElementById("resume-root");
                            //var ctx = canvas.getContext('2d');
                            //ctx.clearRect( 0 , 0 , canvas.width, canvas.height );
                            //ctx.fillStyle="#FFFFFF";
                            //ctx.fillRect(0 , 0 , canvas.width, canvas.height);
                            doc.addHTML(source, 15, 15, {}, function() {
                                console.log("pdf rendered?");
                                //doc.output("dataurlnewwindow");
                                doc.save("Resume_Tyler_Haun.pdf")
                            });
                        });
                    })
                `}}>
                </script>
                <div id="resume-root">
                    <div class="resume-header">
                    <img src="https://media.licdn.com/dms/image/C5603AQEub54WKx_ptQ/profile-displayphoto-shrink_200_200/0?e=1531958400&v=beta&t=j5Gcv9QRlrn2lyCudz3PLNkRxieCjuWoyew6iVBsB38">
                    </img>
                    <div class="name">Tyler Haun</div>
                    <div class="email">
                        <a href="mailto:me@tylerhaun.com">me@tylerhaun.com</a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/in/tyler-haun-20b66666">https://www.linkedin.com/in/tyler-haun-20b66666</a>
                    </div>
                    <div>
                        <a href="http://frobots.net">http://frobots.net</a>
                    </div>
                </div>
                <br />
                <div id="resume-experience"></div>
                </div>
                <style dangerouslySetInnerHTML={{__html: `
                
                    #resume-root {
                        width: 100%;
                        height: 100%;
                        background-color: #ffffff;
                        padding: 10px;
                    }
                    .resume-header {
                        text-align: center;
                    }
                    .resume-header img {
                        height: 5em;
                        border-radius: 50%;
                    }
                    .resume-header .name {
                        font-size: 2em;
                        font-weight: 600;
                    }
                    .resume-header .email {
                    }
                
                `}}>
                </style>
                <script dangerouslySetInnerHTML={{__html: `

                    (function() {
                        var experience = [{
                                position: "Cofounder + Lead Software Engineer",
                                company: "Aperture Systems",
                                start: new Date("2015-04-01T00:00:00"),
                                end: new Date("2015-07-01T00:00:00"),
                                description: "Worked on creating portable x-ray machine and low dosage ct scanner. https://www.youtube.com/watch?v=PdflUAPgh6o"
                            }, {
                                position: "Software Engineer Intern",
                                company: "Phase Space",
                                start: new Date("2015-08-01T00:00:00"),
                                end: new Date("2015-11-01T00:00:00"),
                                description: "Customer Service, Server Hardware Construction, Translating Javascript API to Python, Construction of Calibration System for Motion Capture Cameras, Design of Optics for Head Mounted Display"
                            }, {
                                position: "Lead Fullstack Software Engineer",
                                company: "Adventure Bucket List",
                                start: new Date("2016-04-01T00:00:00"),
                                end: new Date("2018-02-01T00:00:00"),
                                description: "Design and development of booking software for tours, activities , and accommodations using MEAN stack. Refactoring monolith server into microservices. Setting up automation with jenkins. Implementing payments with stripe and payzen. Designing database models."
                            }, {
                                position: "Lead Software Engineer",
                                company: "Kura Technologies",
                                start: new Date("2018-03-01T00:00:00"),
                                end: new Date("2018-06-01T00:00:00"),
                                description: "Creation of demo for mixed reality headset using unity, SLAM, pcl, meshlab"
                        }];
                        function createExperienceElement(experience) {
                            var positionElement = document.createElement("h4");
                            positionElement.innerText = experience.position;
                            var companyElement = document.createElement("h4");
                            companyElement.innerText = experience.company;
                            companyElement.style.marginTop="0px";
                            var dateElement = document.createElement("span");
                            dateElement.innerText = experience.start.toLocaleDateString() + " - " + experience.end.toLocaleDateString();
                            var descriptionElement = document.createElement("p");
                            descriptionElement.innerText = experience.description;
                            var container = document.createElement("div");
                            //
                            container.appendChild(positionElement);
                            container.appendChild(companyElement);
                            container.appendChild(dateElement);
                            container.appendChild(descriptionElement);
                            return container;
                        }
                        var experienceRoot = document.getElementById("resume-experience");
                        var experienceHeaderElement = document.createElement("h2");
                        experienceHeaderElement.innerText = "Experience";
                        experienceRoot.appendChild(experienceHeaderElement);
                        var experienceContainer = document.createElement("div");
                        experienceContainer.style.paddingLeft = "10px";
                        experience.forEach(function(e, i) {
                            var experienceElement = createExperienceElement(e);
                            experienceElement.style.borderTop = "solid 1px #ccc";
                            experienceElement.style.paddingTop = "10px"
                            experienceContainer.appendChild(experienceElement);
                        })
                        experienceRoot.appendChild(experienceContainer);
                    }())
                
                `}}>
                </script>



            </div>
       );
    }
}

export const component = Page;
export default Page;
