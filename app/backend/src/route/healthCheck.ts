import express = require('express');
import di from '../di';

const router = express.Router();

router.get('/health_check', async (req, res) => {
  console.log('hit routes');
  const healthCheck = await di.healthCheckService.healthCheckBasic(res);
  return healthCheck;
});

export default router;
