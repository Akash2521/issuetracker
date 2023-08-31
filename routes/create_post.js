const { Router } = require('express');
const Issue = require('../models/issueSchema'); // Import your Issue model here

const router = Router();

router.post('/issues', async (req, res) => {
  try {
    const { title, description, priority, status } = req.body;

    const issue = new Issue({
      title,
      description,
      priority,
      status,
    });

    await issue.save();

    res.status(201).json({
      success: true,
      data: issue,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.get('/issues', async (req, res) => {
  try {
    const issues = await Issue.find();

    res.status(200).json({
      success: true,
      data: issues,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.get('/issues/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const issue = await Issue.findById(id);

    if (!issue) {
      return res.status(404).json({
        success: false,
        error: 'Issue not found',
      });
    }

    res.status(200).json({
      success: true,
      data: issue,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

router.put('/issues/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, priority, status } = req.body;

    const issue = await Issue.findByIdAndUpdate(id, {
      title,
      description,
      priority,
      status,
    }, { new: true });

    if (!issue) {
      return res.status(404).json({
        success: false,
        error: 'Issue not found',
      });
    }

    res.status(200).json({
      success: true,
      data: issue,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
