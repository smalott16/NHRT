import useCleverForecast from '../hooks/useCleverForecast';

function ChartContainer() {

  const { forecast } = useCleverForecast();

  return (
    <div>
      hello world!
    </div>
  )
}

export default ChartContainer;