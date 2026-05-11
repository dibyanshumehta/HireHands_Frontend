import React from "react";

const PostJobForm = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-4">
        <h3 className="fw-bold">Post a New Job</h3>
        <p className="text-muted mb-0">
          Fill in the details below to post your job requirement.
        </p>
      </div>

      {/* Form Card */}
      <div className="card border-0 shadow-sm rounded-4 p-4">
        <form>

          <div className="row">

            {/* Job Title */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Job Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. Need a Professional Cook"
              />
            </div>

            {/* Category */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Category</label>
              <select className="form-select">
                <option>Select Category</option>
                <option>Cook</option>
                <option>Plumber</option>
                <option>Electrician</option>
                <option>Babysitter</option>
                <option>Gardener</option>
                <option>Cleaner</option>
                <option>Driver</option>
                <option>Carpenter</option>
              </select>
            </div>

          </div>

          <div className="row">

            {/* Budget */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Budget / Salary</label>
              <input
                type="text"
                className="form-control"
                placeholder="e.g. ₹500/day"
              />
            </div>

            {/* Location */}
            <div className="col-md-6 mb-3">
              <label className="form-label">Location</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter location"
              />
            </div>

          </div>

          {/* Date / Time */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Preferred Date</label>
              <input type="date" className="form-control" />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Preferred Time</label>
              <input type="time" className="form-control" />
            </div>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="form-label">Job Description</label>
            <textarea
              rows="4"
              className="form-control"
              placeholder="Describe your job requirements..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="btn btn-primary px-4 py-2">
            Post Job
          </button>

        </form>
      </div>
    </div>
  );
};

export default PostJobForm;