
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    Defining the Schema Pattern for Job Applying portal 

    JobPosted Schema

    Parameter   ----->>     Data Type
    Rec_id                  String (To be Referenced from Recruiter Schema)
    date_posted             Date
    user_applied            Array (Fields : 
        user_id,            String
        Submission_date,    String
        pproval             boolean
        )

*/

const JobPost = new Schema({
    recruiter_id : { type: String }, //To be referenced from Recruiter Schema
    job_id : { type: String },
    headline : {type: String},
    job_type : {type: String},
    job_description : {type: String},
    Pref_branches : [{ type: String }], //Array of Strings
    deadline : {type: Date},
    dateofPosting : {type: Date},
    approved : {type: Boolean},
    users_applied : [  {  user_id: {type:String}, dateofSubmission: {type: String}  }  ]
});


const Jobposting = mongoose.model ('jobpost', JobPost);

module.exports = User,Recruiter, Jobposting;