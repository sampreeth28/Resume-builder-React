import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      {/* landing page */}
      <section style={{width:'100%',height:'100vh',backgroundImage:"url('https://img.freepik.com/premium-photo/laptop-ppt-presentation-business-meeting-team-working-review-new-digital-website-design-planning-group-marketing-strategy-diversity-corporate-people-collaboration-online-project_590464-80700.jpg?w=2000')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} className='container-fluid row align-items-center'>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow border p-5 rounded mt-5 text-center text-light" style={{backgroundColor:"rgba(113, 113, 135, 0.63)"}}>
            <h3 style={{fontSize:'25px'}}>Designed to get hired.
              Your skills, Your story, Your next job - all in one
            </h3>
            <Link to={'/resume'} className='btn text-black' style={{backgroundColor:'white'}} > Make Your Resume</Link>
          </div>
        </div>
      </section>
      {/* tools */}
      <section style={{width:'100%',height:'100vh'}} className='container-fluid row align-items-center'>
        <h1 className='head text-center mt-5'>Tools</h1>
          <div className="container row justify align-items-center">
          <div className="col-md-6">
            <div style={{marginLeft:'40px'}} className='my-5'>
              <h4>Resume</h4>
              <p>Create unlimited new resumes and easily edit them afterwards.</p>
            </div>
            <div style={{marginLeft:'40px'}} className='my-5'>
              <h4>Cover Letter</h4>
              <p>Easily write professional cover letters.</p>
            </div>
            <div style={{marginLeft:'40px'}} className='my-5'>
              <h4>Jobs</h4>
              <p>Automatically receive new and relevant job postings.</p>
            </div>
            <div style={{marginLeft:'40px'}} className='my-5'>
              <h4>Applications</h4>
              <p>Effortlessly manage and track your job applications in an organized manner.</p>
            </div>
          </div>
          <div className="col-md-6"><img width={'90%'} src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" /></div>
          </div>
      </section>
      {/* image */}
      <section style={{height:'600px',width:'100%',backgroundImage:"url('public/group-people-working-out-business-plan-office.jpg')", backgroundAttachment:"fixed",backgroundPosition:'top',backgroundSize:'cover'}}>

      </section>
      {/* testimony */}
      <section className='m-5'>
        <h1 className='text-center my-5'>Testimony</h1>
        <div className="row container">
          <div className="col-md-6">
            <h4 className='my-5'>Trusted by professionals worldwide.</h4>
            <p className='my-4'>At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p className='my-4'>In fact, users who used LiveCareer reported getting hired an average of 48 days faster</p>
            <p className='my-4'>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
            </div>
            
            
          </div>
          
        </div>
      </section>
    </div>
  )
} 

export default LandingPage