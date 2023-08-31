const createIssue = async ({ title, description, priority, status }) => {
    const issue = new Issue({
      title,
      description,
      priority,
      status,
    });
  
    await issue.save();
  
    return issue;
  };
  
  const updateIssue = async (id, { title, description, priority, status }) => {
    const issue = await Issue.findById(id);
  
    issue.title = title;
    issue.description = description;
    issue.priority = priority;
    issue.status = status;
  
    await issue.save();
  
    return issue;
  };
  
  const deleteIssue = async (id) => {
    await Issue.deleteOne({ _id: id });
  };
  
  const getIssues = async () => {
    const issues = await Issue.find({}).sort({});
  
    return issues;
  };
  
  const getIssueById = async (id) => {
    const issue = await Issue.findById(id).lean();
  
    return issue;
  };