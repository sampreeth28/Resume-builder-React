import React, { useState,useRef } from 'react'
import { CiEdit } from "react-icons/ci";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { FaXmark } from "react-icons/fa6";
import { updateResumeAPI } from '../services/allAPI';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    maxHeight:'80vh',
    overflowY:'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Edit({ resumeDetails, setResumeDetails }) {
    const [open, setOpen] = useState(false)
    const skillRef = useRef()
    

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addSkill = (skill)=>{
    if(resumeDetails.userSkills.includes(skill)){
      alert("Given skill already exist...,Add another one!!!")
    }else{
      setResumeDetails({...resumeDetails,userSkills:[...resumeDetails.userSkills,skill]})
      // to clear text box
      skillRef.current.value=""
        }
    }

    const removeSkill = (skill)=>{
        setResumeDetails({...resumeDetails,userSkills:resumeDetails.userSkills.filter(item=>item!=skill)})
    }

    const handleResumUpdate = async()=>{
        const {id,username,jobTitle,location}=resumeDetails
            if(!username && !jobTitle && !location){
              alert("Please fill the form completly")
            }else{
              // api
              console.log("Api Call");
            try {
             const result = await updateResumeAPI(id,resumeDetails)
             console.log(result);
             if(result.status==200){
                alert("Resume updated successfully...")
                handleClose()
             }
            } catch (error) {
              console.log(error); 
            }
            }
          }
    

    return (
        <div>
            <button onClick={handleOpen} className='btn fs-4 text-primary'> <CiEdit /> </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Resume Details
                    </Typography>
                    <Box id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* personal data */}
                        <div>
                            <h3>Personal Details</h3>
                            <div className="d-flex row p-3">
                                <TextField value={resumeDetails.username} onChange={e => setResumeDetails({ ...resumeDetails, username: e.target.value })} id="standard-basic-name" label="Full Name" variant="standard" />
                                <TextField value={resumeDetails.jobTitle} onChange={e => setResumeDetails({ ...resumeDetails, jobTitle: e.target.value })} id="standard-basic-job" label="Job Title" variant="standard" />
                                <TextField value={resumeDetails.location} onChange={e => setResumeDetails({ ...resumeDetails, location: e.target.value })} id="standard-basic-location" label="Location" variant="standard" />
                            </div>
                        </div>
                        {/* contact details */}
                        <div>
                                  <h3>Contact Details</h3>
                                  <div className="d-flex row p-3">
                                     <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
                                     <TextField value={resumeDetails.mobile} onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})} id="standard-basic-phn" label="Phone Number" variant="standard" />
                                     <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-github" label="GitHub Profile Link" variant="standard" />
                                     <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic-linkedin" label="LinkedIn Profile Link" variant="standard" />
                                     <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                                  </div>
                                </div>
                        {/* education details */}
                        <div>
                                  <h3>Educational Details</h3>
                                    <div className="d-flex row p-3">
                                     <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                                     <TextField value={resumeDetails.collage} onChange={e=>setResumeDetails({...resumeDetails,collage:e.target.value})} id="standard-basic-clg" label="Collage Name" variant="standard" />
                                     <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
                                     <TextField value={resumeDetails.passoutYear} onChange={e=>setResumeDetails({...resumeDetails,passoutYear:e.target.value})} id="standard-basic-passout" label="Year of Passout" variant="standard" />
                                 </div>
                                </div>
                        {/* work experience */}
                        <div>
                                  <h3>Professional Details</h3>
                                   <div className="d-flex row p-3">
                                     <TextField value={resumeDetails.jobType} onChange={e=>setResumeDetails({...resumeDetails,jobType:e.target.value})} id="standard-basic-joborintern" label="Job or Internship" variant="standard" />
                                     <TextField value={resumeDetails.company} onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-cmpnyname" label="Company Name" variant="standard" />
                                     <TextField value={resumeDetails.cLocation} onChange={e=>setResumeDetails({...resumeDetails,cLocation:e.target.value})} id="standard-basic-cmpnyloc" label="Company Location" variant="standard" />
                                     <TextField value={resumeDetails.duration} onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
                                 </div>
                                </div>
                        {/* skills */}
                        <div>
                                  <h3>Skills</h3>
                                  <div className="d-flex align-items-center justify-contents-between p-3 w-100">
                                    <input ref={skillRef} type="text" placeholder='Add Skill' className='form-control p-1 rounded w-50' />
                                    <Button onClick={()=>addSkill(skillRef.current.value)} variant='text'>ADD</Button>
                                  </div>
                                  
                                  <h5>Added Skill</h5>
                                  <div className="d-flex flex-wrap justify-content-between my-3">
                                    {
                                      resumeDetails.userSkills?.length>0?
                                      resumeDetails.userSkills?.map((skill,index)=>(
                                        <Button key={index} style={{borderRadius:'50px',backgroundColor:'grey'}} variant="contained" className='m-1'>{skill} <FaXmark onClick={()=>removeSkill(skill)} className='ms-2 fs-5' /> </Button>
                                      ))
                                      :
                                      <p className='fw-bolder'>No skills are added yet!!!</p>
                                    }
                                  </div>
                                </div> 
                        {/* summary */}
                        <div>
                                  <h3>Summary</h3>
                                  <div className="p-3 row">
                                    <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})}  id="standard-basic-summary" label="Write a short summary of yourself..." variant="standard" multiline rows={7} defaultValue={'Enthusiastic and detail-oriented MERN Stack Developer with hands-on experience in building responsive web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in developing RESTful APIs, integrating front-end and back-end services, and implementing user-friendly interfaces. Passionate about clean code, modern JavaScript frameworks, and scalable architectures. Adept at collaborating in agile environments to deliver efficient, high-quality solutions.'} />
                                  </div>
                                </div>
                                
                        <div className="my-3">
                            <button onClick={handleResumUpdate} className="btn btn-warning text-light">Update</button>
                        </div>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default Edit