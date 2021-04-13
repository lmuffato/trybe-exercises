const messageDelay = () => Math.floor(Math.random() * 5000);
const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const sendMarsTemperature = () => {
    const temperatura = getMarsTemperature();
    setTimeout(() => console.log(`Mars temperature is: ${temperatura} degree Celsius`), messageDelay())
}

// crie a função sendMarsTemperature abaixo
sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo