    const express = require('express');
    const app = express();
    const PORT = 5000;

    app.get('/', (req, res) => {
      res.send('Momentum Project: Server is alive.');
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    const userRoutes = require('./routes/userRoutes');
    const workoutRoutes = require('./routes/workoutRoutes');

  app.use('/api/users', userRoutes);
  app.use('/api/workouts', workoutRoutes);

    module.exports = app;
  