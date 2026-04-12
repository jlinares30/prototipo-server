import express from 'express';

const app = express();


async function start(){
  try {    // Simulate an asynchronous operation (e.g., database connection)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Asynchronous operation completed successfully');
  }
  catch (error) {
    console.error('Error during asynchronous operation:', error);
  }
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
