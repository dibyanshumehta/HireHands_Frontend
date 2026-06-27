const WorkerPostJobForm = () => {
  return (
    <>
      <div>
        <div className="mb-4">
          <h3 className="fw-bold">Post for Work</h3>
          <p className="text-muted mb-0">
            Fill in the details below to post for work requirement.
          </p>
        </div>

        <div className="card border-0 shadow-sm rounded-4 p-4">
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Name"
                />
              </div>
              
              <div className="col-md-6 mb-3">
                <label className="form-label">Skill</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Skill"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Experience</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Experience"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Phone Number"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your Location"
                />
              </div>

            </div>
            <button className="btn btn-primary px-4 py-2">Post Work</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WorkerPostJobForm;
